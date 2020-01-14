import React from 'react'
import { Typography, IconButton, Grid } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { ViewerChip } from '../../molecules/ViewerChip'

export const TopBar = () => (
	<Grid
		container
		alignItems='center'
		justify='space-between'
		style={{ background: '#fff', zIndex: 9999 }}
	>
		<Grid container item xs={7} alignItems='center'>
			<Grid item xs='auto'>
				<IconButton
					style={{ marginLeft: 10 }}
					edge='start'
					color='inherit'
					aria-label='menu'
				>
					<Menu />
				</IconButton>
			</Grid>
			<Grid item xs='auto'>
				<Typography variant='h6'>Next Atomic</Typography>
			</Grid>
		</Grid>
		<Grid item xs='auto'>
			<div style={{ marginRight: 10 }}>
				<ViewerChip />
			</div>
		</Grid>
	</Grid>
)
