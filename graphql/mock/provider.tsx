// @ts-nocheck
import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloLink } from 'apollo-link'
import { addMockFunctionsToSchema } from 'graphql-tools'
import { Observable } from 'rxjs'
import { mocks as globalMocks } from './mocks'
import { mergeResolvers } from './mergeResolvers'
import { schema } from './schema'

interface Props {
	customResolvers?: any
	children: any
}

export const GQLProvider = ({ customResolvers = {}, children }: Props) => {
	const mocks = mergeResolvers(globalMocks, customResolvers)
	addMockFunctionsToSchema({ schema, mocks })

	const client = new ApolloClient({
		link: new SchemaLink({ schema }),
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
