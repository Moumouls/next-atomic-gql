import { ApolloServer } from 'apollo-server'
import { check } from 'tcp-port-used'
import { addMockFunctionsToSchema } from 'graphql-tools'
import { schema } from './schema'
import { mocks } from './mocks'

addMockFunctionsToSchema({ schema, mocks })

const server = new ApolloServer({
	schema,
	playground: true,
})

check(Number(process.env.MOCKED_SERVER_PORT || 1337), '127.0.0.1').then(
	(inUse) => {
		const defaultPort = inUse ? 1338 : 1337
		server
			.listen(process.env.MOCKED_SERVER_PORT || defaultPort)
			.then(({ url }) => {
				// eslint-disable-next-line
				console.log(`\nGraphQL Mocked Server ready at ${url}`)
			})
	},
)
