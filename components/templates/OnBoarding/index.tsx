import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { OnBoarding as OnBoardingOrganism } from '../../organisms/OnBoarding'
import { TopBar } from '../../organisms/TopBar'

export const OnBoarding = () => (
	<Fragment>
		<TopBar />
		<Grid
			container
			justify='center'
			alignItems='center'
			style={{ height: '100vh' }}
		>
			<Grid item xs={12} sm={8}>
				<OnBoardingOrganism />
			</Grid>
		</Grid>
	</Fragment>
)
