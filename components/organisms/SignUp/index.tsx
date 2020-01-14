import React, { Fragment } from 'react'
import { useIntl } from 'react-intl'
import {
	Card,
	CardContent,
	Button,
	Grid,
	Typography,
	CircularProgress,
	TextField,
	InputAdornment,
} from '@material-ui/core'
import { Email, VpnKey } from '@material-ui/icons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useSignUpMutation } from '@graphql'
import cookies from 'js-cookie'
import Router from 'next/router'

export const SignUp = () => {
	const { formatMessage: f } = useIntl()
	const [signUp, { loading, data, error }] = useSignUpMutation()
	if (data && data.signUp && data.signUp.viewer.sessionToken) {
		cookies.set('token', data.signUp.viewer.sessionToken, {
			expires: 7,
		})
		Router.push('/onboarding')
	}

	const formFields = ({
		handleChange,
		values,
		errors,
		handleSubmit,
	}: any) => (
		<Fragment>
			<Grid item xs={10}>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<Email />
							</InputAdornment>
						),
					}}
					required
					type='email'
					name='email'
					helperText={errors.email}
					error={!!errors.email}
					value={values.email}
					label={f({ id: 'email' })}
					variant='filled'
					onChange={handleChange}
					fullWidth
				/>
			</Grid>
			<Grid item xs={10}>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<VpnKey />
							</InputAdornment>
						),
					}}
					required
					helperText={errors.password}
					error={!!errors.password}
					name='password'
					type='password'
					onChange={handleChange}
					value={values.password}
					label={f({ id: 'password' })}
					variant='filled'
					fullWidth
				/>
			</Grid>
			<Grid item xs={10}>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<VpnKey />
							</InputAdornment>
						),
					}}
					required
					type='password'
					helperText={errors.passwordConfirmation}
					error={!!errors.passwordConfirmation}
					value={values.passwordConfirmation}
					name='passwordConfirmation'
					label={f({ id: 'confirm.password' })}
					variant='filled'
					onChange={handleChange}
					onKeyPress={(ev) => {
						if (ev.key === 'Enter') {
							handleSubmit()
							ev.preventDefault()
						}
					}}
					fullWidth
				/>
			</Grid>
			<Grid item xs={7}>
				{!loading && (
					<Button
						variant='contained'
						color='primary'
						fullWidth
						onClick={handleSubmit}
					>
						{f({ id: 'enter' })}
					</Button>
				)}
				{loading && (
					<CircularProgress
						style={{
							display: 'block',
							margin: '0 auto',
						}}
					/>
				)}
			</Grid>
		</Fragment>
	)

	const form = (
		<Formik
			initialValues={{
				email: '',
				password: '',
				passwordConfirmation: '',
			}}
			onSubmit={({ email, password }) => {
				cookies.remove('token')
				signUp({ variables: { email, password } })
			}}
			validationSchema={Yup.object().shape({
				email: Yup.string()
					.email(f({ id: 'email.error' }))
					.required(f({ id: 'field.required' })),
				password: Yup.string()
					.required(f({ id: 'field.required' }))
					.min(
						8,
						f({
							id: 'password.min.char',
						}),
					),
				passwordConfirmation: Yup.string()
					.oneOf(
						[Yup.ref('password'), null],
						f({ id: 'password.notmatch' }),
					)
					.required(f({ id: 'field.required' })),
			})}
		>
			{formFields}
		</Formik>
	)

	return (
		<Card>
			<CardContent>
				<Grid container spacing={3} justify='center'>
					<Grid item xs={12} />
					<Grid item xs={12}>
						<Typography variant='h3' align='center'>
							{f({ id: 'signup' })}
						</Typography>
					</Grid>
					<Grid item xs={12} />
					{form}
					{error && (
						<Grid item xs={7}>
							<Typography color='error' align='center'>
								{f({ id: 'default.error' })}
							</Typography>
						</Grid>
					)}
				</Grid>
			</CardContent>
		</Card>
	)
}
