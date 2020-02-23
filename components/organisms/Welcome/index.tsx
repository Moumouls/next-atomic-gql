import React, { Fragment } from 'react'
import { useCommonViewerQuery } from '@graphql'
import Router from 'next/router'
import { Fade, Grid, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { ChangePassword } from '../../molecules/ChangePassword'
import { PersonalInformations } from '../../molecules/PersonalInformations'
import { LogOutButton } from '../../atoms/LogOutButton'

const useController = () => {
	const { loading, data } = useCommonViewerQuery()
	const f = useIntl().formatMessage
	if (!data?.viewer.user.id) {
		Router.push('/login')
	}
	return { loading, data, f }
}

const view = ({ loading, data, f }: ReturnType<typeof useController>) =>
	!loading && data?.viewer.user.id ? (
		<Fade in>
			<Fragment>
				<Grid container spacing={3} justify='center'>
					<Grid item xs={12} />
					<Grid item xs={12} />
					<Grid item xs={12}>
						<img
							src='welcome.svg'
							style={{
								width: '40vh',
								height: 'auto',
								display: 'block',
								margin: '0 auto',
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h3' align='center'>
							{f(
								{ id: 'welcome' },
								{ firstname: data.viewer.user.firstname },
							)}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={10}>
						<PersonalInformations />
					</Grid>
					<Grid item xs={12} sm={10}>
						<ChangePassword />
					</Grid>
					<Grid item xs={12} />
					<Grid item xs={12} />
					<Grid item xs={12}>
						<LogOutButton
							style={{ display: 'block', margin: '0 auto' }}
						/>
					</Grid>
				</Grid>
			</Fragment>
		</Fade>
	) : null

export const Welcome = () => {
	const controller = useController()
	return view(controller)
}
