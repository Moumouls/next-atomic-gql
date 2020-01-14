import React from 'react'
import { GQLErrorProvider, GQLLoadingProvider } from '@graphql-mock'
import { TopBar } from './index'

export default {
	component: TopBar,
	title: 'Organisms/TopBar',
}

export const Base = () => <TopBar />
export const NoViewer = () => (
	<GQLErrorProvider>
		<TopBar />
	</GQLErrorProvider>
)
export const Loading = () => (
	<GQLLoadingProvider>
		<TopBar />
	</GQLLoadingProvider>
)
