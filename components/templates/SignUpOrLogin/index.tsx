import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { Login } from '../../organisms/Login'
import { SignUp } from '../../organisms/SignUp'
import { TopBar } from '../../organisms/TopBar'

export const SignUpOrLogin = () => (
	<Fragment>
		<TopBar />
		<Grid
			container
			justify='center'
			alignItems='center'
			style={{
				height: '100vh',
				backgroundImage: 'url(/login_background.jpg)',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Grid container item xs={12} md={8} justify='center' spacing={4}>
				<Grid item xs={12} sm={11} md={6}>
					<Login />
				</Grid>
				<Grid item xs={12} sm={11} md={6}>
					<SignUp />
				</Grid>
			</Grid>
		</Grid>
	</Fragment>
)
