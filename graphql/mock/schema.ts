import { makeExecutableSchema } from 'graphql-tools'
import schemaString1 from '../cloud-schema'
import schemaString2 from '../local-schema'

const s = makeExecutableSchema({
	typeDefs: `${schemaString1}${schemaString2}`,
	resolverValidationOptions: {
		requireResolversForResolveType: false,
	},
})

export const schema = s
