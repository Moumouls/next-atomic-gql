import React from 'react'
import { GQLLoadingProvider, GQLErrorProvider } from '@graphql-mock'
import { OnBoarding } from './index'

export default {
	component: OnBoarding,
	title: 'Organisms/OnBoarding',
}

export const Base = () => <OnBoarding />

export const Loading = () => (
	<GQLLoadingProvider>
		<OnBoarding />
	</GQLLoadingProvider>
)
export const Error = () => (
	<GQLErrorProvider>
		<OnBoarding />
	</GQLErrorProvider>
)
