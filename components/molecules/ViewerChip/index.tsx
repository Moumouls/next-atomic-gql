import React, { Fragment } from 'react'
import Router from 'next/router'
import { Chip, Avatar, Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useCommonViewerQuery } from '@graphql'
import cookies from 'js-cookie'
import { useIntl } from 'react-intl'

export const ViewerChip = () => {
	const { loading, data } = useCommonViewerQuery()
	const f = useIntl().formatMessage
	if (loading) {
		return (
			<Skeleton
				width={100}
				height={32}
				variant='rect'
				style={{ borderRadius: 32 }}
			/>
		)
	}
	const redirect = () => {
		Router.push('/login')
	}

	if (!data?.viewer) {
		cookies.remove('token')
		return <Button onClick={redirect}>{f({ id: 'login' })}</Button>
	}
	if (!data.viewer.user.firstname) return null
	const { firstname, picture } = data.viewer.user
	const computedFirstname =
		firstname.substring(0, 15) === firstname
			? firstname
			: `${firstname.substring(0, 12)}...`
	return (
		<Fragment>
			{!picture && <Chip label={computedFirstname} />}
			{picture && (
				<Chip
					avatar={<Avatar src={picture.url} />}
					label={computedFirstname}
				/>
			)}
		</Fragment>
	)
}
