// @ts-nocheck
import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SchemaLink } from '@apollo/client/link/schema'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloLink } from 'apollo-link'
import { addMocksToSchema } from '@graphql-tools/mock'
import { applyMiddleware } from 'graphql-middleware'
import LRUCache from 'lru-cache'
import { Observable } from 'rxjs'
import { mocks as globalMocks } from './mocks'
import { mergeResolvers } from './mergeResolvers'
import { schema } from './schema'

interface Props {
	customResolvers?: any
	children: any
}

const cache = new LRUCache({ max: 2000, maxAge: 60 * 1000 })

const cacheMiddleware = async (resolve, root, args, context, info) => {
	const key = `${info.parentType.name}:${info.operation.name.value}:${
		info.fieldName
	}:${JSON.stringify(args)}`
	if (cache.get(key)) return cache.get(key)
	const result = await resolve(root, args, context, info)
	cache.set(key, result)
	return result
}

export const GQLProvider = ({ customResolvers = {}, children }: Props) => {
	const mocks = mergeResolvers(globalMocks, customResolvers)
	const client = new ApolloClient({
		link: new SchemaLink({
			schema: applyMiddleware(
				addMocksToSchema({ schema, mocks }),
				cacheMiddleware,
			),
		}),
		cache: new InMemoryCache(),
	})
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export const withGQLProvider = (storyFn) => (
	<GQLProvider>{storyFn()}</GQLProvider>
)

export const GQLLoadingProvider = ({ children }: any) => {
	const link = new ApolloLink(() => new Observable(() => {}))

	const client = new ApolloClient({
		link,
		cache: new InMemoryCache(),
	})

	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export const GQLErrorProvider = ({ graphQLErrors, children }: any) => {
	const link = new ApolloLink(() => ({
		errors: graphQLErrors || [
			{ message: 'Unspecified error from ErrorProvider.' },
		],
	}))

	const client = new ApolloClient({
		link,
		cache: new InMemoryCache(),
	})

	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
