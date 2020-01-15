import React, { Fragment } from 'react'
import { useCommonViewerQuery } from '@graphql'
import Router from 'next/router'
import { Fade, Grid, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { ChangePassword } from '../../molecules/ChangePassword'
import { PersonalInformations } from '../../molecules/PersonalInformations'
import { LogOutButton } from '../../atoms/LogOutButton'

export const Welcome = () => {
	const { loading, data } = useCommonViewerQuery()
	const f = useIntl().formatMessage
	if (loading) {
		return null
	}
	if (!data?.viewer.user.id) {
		Router.push('/login')
		return null
	}

	return (
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
	)
}
