import React from 'react'
import { GQLLoadingProvider, GQLErrorProvider } from '@graphql-mock'
import { SignUp } from './index'

export default {
	component: SignUp,
	title: 'Organisms/SignUp',
}

export const Base = () => <SignUp />

export const Loading = () => (
	<GQLLoadingProvider>
		<SignUp />
	</GQLLoadingProvider>
)
export const Error = () => (
	<GQLErrorProvider>
		<SignUp />
	</GQLErrorProvider>
)
