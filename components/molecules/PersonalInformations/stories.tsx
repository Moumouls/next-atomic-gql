import React from 'react'
import { GQLProvider } from '@graphql-mock'
import { PersonalInformations } from './index'

export default {
	component: PersonalInformations,
	title: 'Molecules/PersonalInformations',
}

const customResolvers = {
	Mutation: () => ({
		updateUser: () => {
			// eslint-disable-next-line
			throw 'error'
		},
	}),
}

export const Base = () => <PersonalInformations />
export const Error = () => (
	<GQLProvider customResolvers={customResolvers}>
		<PersonalInformations />
	</GQLProvider>
)
