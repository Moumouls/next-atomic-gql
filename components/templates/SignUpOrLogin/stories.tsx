import React from 'react'
import { GQLErrorProvider, GQLLoadingProvider } from '@graphql-mock'
import { SignUpOrLogin } from './index'

export default {
	component: SignUpOrLogin,
	title: 'Templates/SignUpOrLogin',
}

export const Base = () => <SignUpOrLogin />

export const Loading = () => (
	<GQLLoadingProvider>
		<SignUpOrLogin />
	</GQLLoadingProvider>
)

export const NoViewer = () => (
	<GQLErrorProvider>
		<SignUpOrLogin />
	</GQLErrorProvider>
)
