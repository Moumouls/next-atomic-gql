/* eslint-disable */
module.exports = {
	publicRuntimeConfig: {
		appId: process.env.APP_ID || 'dev',
		graphQLUrl: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql',
	},
	webpack(config) {
		config.resolve.alias['@graphql'] = `${__dirname}/graphql/generated.tsx`
		config.resolve.alias['@utils'] = `${__dirname}/utils/index.tsx`
		config.resolve.alias[
			'@graphql-mock'
		] = `${__dirname}/graphql/mock/provider.tsx`
		return config
	},
}
