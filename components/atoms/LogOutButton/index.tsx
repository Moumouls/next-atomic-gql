import React from 'react'
import Router from 'next/router'
import { useLogOutButtonMutation } from '@graphql'
import { Button } from '@material-ui/core'
import { useIntl } from 'react-intl'

const useController = () => {
	const [logOut, { client, data }] = useLogOutButtonMutation()
	const f = useIntl().formatMessage
	if (data?.logOut?.clientMutationId) {
		if (client) client.resetStore()
		Router.push('/login')
	}
	return { f, logOut }
}

const view = ({ f, logOut }: ReturnType<typeof useController>, style: any) => (
	<Button
		style={style}
		variant='contained'
		color='primary'
		onClick={() => logOut()}
	>
		{f({ id: 'logout' })}
	</Button>
)
export const LogOutButton = ({ style }: any) => view(useController(), style)
