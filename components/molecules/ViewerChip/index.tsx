import React, { Fragment } from 'react'
import Router from 'next/router'
import { Chip, Avatar, Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useCommonViewerQuery } from '@graphql'
import cookies from 'js-cookie'
import { useIntl } from 'react-intl'

const useController = () => {
	const { loading, data } = useCommonViewerQuery()
	const f = useIntl().formatMessage
	const redirect = () => {
		Router.push('/login')
	}
	if (!loading && !data?.viewer.user.id) {
		cookies.remove('token')
	}
	let firstname = data?.viewer.user.firstname
	if (firstname) {
		firstname =
			firstname.substring(0, 15) === firstname
				? firstname
				: `${firstname.substring(0, 12)}...`
	}
	return {
		f,
		redirect,
		firstname,
		picture: data?.viewer.user.picture,
		loading,
		data,
	}
}

const view = ({
	f,
	redirect,
	firstname,
	picture,
	loading,
	data,
}: ReturnType<typeof useController>) => {
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
	if (!data?.viewer.user.id) {
		return <Button onClick={redirect}>{f({ id: 'login' })}</Button>
	}
	return (
		<Fragment>
			{!picture && <Chip label={firstname} />}
			{picture && (
				<Chip avatar={<Avatar src={picture.url} />} label={firstname} />
			)}
		</Fragment>
	)
}

export const ViewerChip = () => view(useController())
