import React from 'react'
import { name, image } from 'faker'
import { ViewerChip } from './index'

export default {
	component: ViewerChip,
	title: 'Molecules/ViewerChip',
}

const data = {
	Base: {
		firstname: name.firstName(),
		picture: {
			file: {
				url: image.avatar(),
			},
		},
	},
	WithoutPicture: {
		firstname: name.firstName(),
		picture: null,
	},
}

export const Base = () => <ViewerChip data={data.Base} />
export const Loading = () => <ViewerChip />
export const WithoutPicture = () => <ViewerChip data={data.WithoutPicture} />
