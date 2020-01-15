import React from 'react'
import { GQLProvider } from '@graphql-mock'
import { name } from 'faker'
import { Welcome } from './index'

export default {
	component: Welcome,
	title: 'Templates/Welcome',
}

const memoUser = {
	lastname: name.lastName(),
	firstname: name.firstName(),
}

const customResolvers = {
	Mutation: () => ({
		updateUser: (
			p,
			{
				input: {
					fields: { firstname, lastname },
				},
			},
		) => {
			if (firstname) memoUser.firstname = firstname
			if (lastname) memoUser.lastname = lastname
			return { user: customResolvers.User() }
		},
	}),
	User: () => ({
		id: 'xxxx',
		firstname: memoUser.firstname,
		lastname: memoUser.lastname,
	}),
}

export const Base = () => (
	<GQLProvider customResolvers={customResolvers}>
		<Welcome />
	</GQLProvider>
)
