import React from 'react'
import Router from 'next/router'
import { useLogOutButtonMutation } from '@graphql'
import { Button } from '@material-ui/core'
import { useIntl } from 'react-intl'

export const LogOutButton = () => {
	const [logOut, { client, data }] = useLogOutButtonMutation()
	const f = useIntl().formatMessage
	if (data?.logOut?.clientMutationId) {
		if (client) client.resetStore()
		Router.push('/login')
	}
	return (
		<Button variant='contained' color='primary' onClick={() => logOut()}>
			{f({ id: 'logout' })}
		</Button>
	)
}
