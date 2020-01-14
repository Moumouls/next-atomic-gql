const { readFileSync } = require('fs')

module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:import/typescript',
		'plugin:react/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'graphql'],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@graphql', './graphql/generated'],
					['@graphql-mock', './graphql/mock/provider'],
					['@utils', './utils/index'],
				],
				extensions: ['.ts', '.tsx'],
			},
		},
	},
	rules: {
		semi: 0,
		indent: [0, 4],
		'no-tabs': 0,
		'no-use-before-define': 0,
		'no-mixed-spaces-and-tabs': 0,
		'object-curly-newline': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'implicit-arrow-linebreak': 0,
		'function-paren-newline': 0,
		'import/prefer-default-export': 0,
		'import/no-unresolved': [2, { commonjs: true }],
		curly: 0,
		'@typescript-eslint/no-unused-vars': 'error',
		'operator-linebreak': 0,
		'nonblock-statement-body-position': 0,
		'no-confusing-arrow': 0,
		'react/jsx-uses-react': 1,
		'graphql/template-strings': [
			'error',
			{
				env: 'apollo',
				schemaString: readFileSync(
					`./graphql/cloud-schema.graphql`,
					'utf-8',
				),
			},
		],
	},
}
