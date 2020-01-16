import React, { Fragment } from 'react'
import { useCommonViewerQuery, useChangePasswordMutation } from '@graphql'
import { Fade, Grid, TextField, Typography, Button } from '@material-ui/core'
import { useIntl } from 'react-intl'
import Router from 'next/router'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'

export const ChangePassword = () => {
	const { loading, data, client } = useCommonViewerQuery()
	const f = useIntl().formatMessage
	const [changePassword] = useChangePasswordMutation()
	const { enqueueSnackbar } = useSnackbar()
	const form = useFormik({
		initialValues: {
			password: '',
			passwordConfirmation: '',
		},
		onSubmit: async ({ password }) => {
			if (data?.viewer.user.id) {
				try {
					await changePassword({
						variables: {
							id: data.viewer.user.id,
							password,
						},
					})
					enqueueSnackbar(f({ id: 'password.changed' }), {
						variant: 'success',
					})
					client.resetStore()
					Router.push('/login')
				} catch (e) {
					enqueueSnackbar(f({ id: 'default.error' }), {
						variant: 'error',
					})
				}
			}
		},
		validationSchema: Yup.object().shape({
			password: Yup.string().min(
				8,
				f({
					id: 'password.min.char',
				}),
			),
			passwordConfirmation: Yup.string().oneOf(
				[Yup.ref('password'), null],
				f({ id: 'password.notmatch' }),
			),
		}),
	})

	if (loading) {
		return null
	}

	return (
		<Fade in>
			<Fragment>
				<Typography variant='h5' color='textSecondary' gutterBottom>
					{f({ id: 'change.password' })}
				</Typography>
				<Typography variant='subtitle1' color='error' gutterBottom>
					{f({ id: 'change.password.info' })}
				</Typography>
				<Grid container spacing={3} justify='center'>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							helperText={form.errors.password}
							error={!!form.errors.password}
							name='password'
							type='password'
							onChange={form.handleChange}
							value={form.values.password}
							label={f({ id: 'password' })}
							variant='filled'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							type='password'
							helperText={form.errors.passwordConfirmation}
							error={!!form.errors.passwordConfirmation}
							value={form.values.passwordConfirmation}
							name='passwordConfirmation'
							label={f({ id: 'confirm.password' })}
							variant='filled'
							onKeyPress={(ev) => {
								if (ev.key === 'Enter') {
									form.handleSubmit()
								}
							}}
							onChange={form.handleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant='contained'
							color='secondary'
							onClick={() => form.handleSubmit()}
							style={{ display: 'block', margin: '0 auto' }}
						>
							{f({ id: 'change' })}
						</Button>
					</Grid>
				</Grid>
			</Fragment>
		</Fade>
	)
}
