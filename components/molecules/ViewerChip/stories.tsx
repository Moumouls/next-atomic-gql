import React from 'react'
import {
	GQLLoadingProvider,
	GQLProvider,
	GQLErrorProvider,
} from '@graphql-mock'
import { ViewerChip } from './index'

export default {
	component: ViewerChip,
	title: 'Molecules/ViewerChip',
}

const customResolvers = {
	User: () => ({
		picture: null,
	}),
}

export const Base = () => <ViewerChip />
export const Loading = () => (
	<GQLLoadingProvider>
		<ViewerChip />
	</GQLLoadingProvider>
)
export const NoViewer = () => (
	<GQLErrorProvider>
		<ViewerChip />
	</GQLErrorProvider>
)
export const WithoutPicture = () => (
	<GQLProvider customResolvers={customResolvers}>
		<ViewerChip />
	</GQLProvider>
)
