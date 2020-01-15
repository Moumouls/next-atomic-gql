import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { Welcome as WelcomeOrganism } from '../../organisms/Welcome'
import { TopBar } from '../../organisms/TopBar'

export const Welcome = () => (
	<Fragment>
		<TopBar />
		<Grid container justify='center'>
			<Grid item xs={10}>
				<WelcomeOrganism />
			</Grid>
		</Grid>
	</Fragment>
)
