import React from 'react'
import { GQLLoadingProvider, GQLErrorProvider } from '@graphql-mock'
import { Login } from './index'

export default {
	component: Login,
	title: 'Organisms/Login',
}

export const Base = () => <Login />

export const Loading = () => (
	<GQLLoadingProvider>
		<Login />
	</GQLLoadingProvider>
)
export const Error = () => (
	<GQLErrorProvider>
		<Login />
	</GQLErrorProvider>
)
