import React from 'react'
import { GQLErrorProvider, GQLLoadingProvider } from '@graphql-mock'
import { SignUpLogin } from './index'

export default {
	component: SignUpLogin,
	title: 'Templates/SignUpLogin',
}

export const Base = () => <SignUpLogin />

export const Loading = () => (
	<GQLLoadingProvider>
		<SignUpLogin />
	</GQLLoadingProvider>
)

export const NoViewer = () => (
	<GQLErrorProvider>
		<SignUpLogin />
	</GQLErrorProvider>
)
