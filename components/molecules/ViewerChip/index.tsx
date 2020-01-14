import React, { Fragment } from 'react'
import { Chip, Avatar } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { ViewerChipFragment } from '@graphql'

interface Props {
	data?: ViewerChipFragment
}

export const ViewerChip = ({ data }: Props) => {
	let firstname = ''
	if (data?.firstname) {
		firstname =
			data.firstname.substring(0, 15) === data.firstname
				? data.firstname
				: `${data.firstname.substring(0, 12)}...`
	} else {
		return (
			<Skeleton
				width={100}
				height={32}
				variant='rect'
				style={{ borderRadius: 32 }}
			/>
		)
	}
	return (
		<Fragment>
			{data?.firstname && !data.picture && <Chip label={firstname} />}
			{data?.firstname && data.picture && (
				<Chip
					avatar={<Avatar src={data.picture.url} />}
					label={firstname}
				/>
			)}
		</Fragment>
	)
}
