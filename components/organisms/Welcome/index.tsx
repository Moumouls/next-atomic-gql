import React, { Fragment } from 'react'
import { useUpdateUserWelcomeMutation, useCommonViewerQuery } from '@graphql'
import Router from 'next/router'
import { Fade, Grid, TextField, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Welcome = () => {
	const { loading, data } = useCommonViewerQuery()
	const f = useIntl().formatMessage
	const [updateUser] = useUpdateUserWelcomeMutation()
	const form = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			password: '',
			passwordConfirmation: '',
		},
		onSubmit: ({ firstname, lastname, password }) => {
			if (data?.viewer.user.id) {
				updateUser({
					variables: {
						id: data.viewer.user.id,
						firstname,
						lastname,
						password,
					},
				})
			}
		},
		validationSchema: Yup.object().shape({
			firstname: Yup.string().required(f({ id: 'field.required' })),
			lastname: Yup.string().required(f({ id: 'field.required' })),
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
	if (!data?.viewer.user.id) {
		Router.push('/login')
		return null
	}
	const formRender = (
		<Fragment>
			<Grid item xs={10}>
				<TextField
					required
					type='text'
					name='firstname'
					helperText={form.errors.firstname}
					error={!!form.errors.firstname}
					value={form.values.firstname}
					label={f({ id: 'firstname' })}
					variant='filled'
					onChange={form.handleChange}
					fullWidth
				/>
			</Grid>
			<Grid item xs={10}>
				<TextField
					required
					type='text'
					name='lastname'
					helperText={form.errors.lastname}
					error={!!form.errors.lastname}
					value={form.values.lastname}
					label={f({ id: 'lastname' })}
					variant='filled'
					onChange={form.handleChange}
					fullWidth
				/>
			</Grid>
			<Grid item xs={10}>
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
			<Grid item xs={10}>
				<TextField
					required
					type='password'
					helperText={form.errors.passwordConfirmation}
					error={!!form.errors.passwordConfirmation}
					value={form.values.passwordConfirmation}
					name='passwordConfirmation'
					label={f({ id: 'confirm.password' })}
					variant='filled'
					onChange={form.handleChange}
					fullWidth
				/>
			</Grid>
		</Fragment>
	)
	return (
		<Fade in>
			<Grid container spacing={3} justify='center'>
				<Grid item xs={12} />
				<Grid item xs={12}>
					<Typography variant='h3' align='center'>
						{f(
							{ id: 'welcome' },
							{ firstname: data.viewer.user.firstname },
						)}
					</Typography>
				</Grid>
				<Grid item xs={12} />
				{formRender}
			</Grid>
		</Fade>
	)
}
