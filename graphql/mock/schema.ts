import { makeExecutableSchema } from '@graphql-tools/schema'
import schemaString1 from '../cloud-schema'
import schemaString2 from '../local-schema'

const s = makeExecutableSchema({
	typeDefs: `${schemaString1}${schemaString2}`,
	resolverValidationOptions: {
		requireResolversForResolveType: 'ignore',
	},
})

export const schema = s
