import React from 'react'
import { GQLProvider } from '@graphql-mock'
import { ChangePassword } from './index'

export default {
	component: ChangePassword,
	title: 'Molecules/ChangePassword',
}

const customResolvers = {
	Mutation: () => ({
		updateUser: () => {
			// eslint-disable-next-line
			throw 'error'
		},
	}),
}

export const Base = () => <ChangePassword />

export const Error = () => (
	<GQLProvider customResolvers={customResolvers}>
		<ChangePassword />
	</GQLProvider>
)
