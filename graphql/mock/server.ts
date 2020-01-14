import { ApolloServer } from 'apollo-server'
import { addMockFunctionsToSchema } from 'graphql-tools'
import { schema } from './schema'
import { mocks } from './mocks'

addMockFunctionsToSchema({ schema, mocks })

const server = new ApolloServer({
	schema,
	playground: true,
})

server.listen(1337).then(({ url }) => {
	// eslint-disable-next-line
	console.log(`GraphQL Mocked Server ready at ${url}`)
})
