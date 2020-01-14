import React, { Fragment } from 'react'
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	InputAdornment,
	Grid,
	CircularProgress,
} from '@material-ui/core'
import { VpnKey, Email } from '@material-ui/icons'
import { useIntl } from 'react-intl'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useLogInMutation } from '@graphql'
import cookies from 'js-cookie'

export const Login = () => {
	const { formatMessage: f } = useIntl()
	const [login, { loading, error, data }] = useLogInMutation()

	if (data && data.logIn && data.logIn.viewer.sessionToken) {
		cookies.set('token', data.logIn.viewer.sessionToken, {
			expires: 7,
		})
		// eslint-disable-next-line
		window.location.reload()
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
					label={f({ id: 'email' })}
					variant='filled'
					onChange={handleChange}
					value={values.email}
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
					name='password'
					helperText={errors.password}
					error={!!errors.password}
					label={f({ id: 'password' })}
					variant='filled'
					onChange={handleChange}
					onKeyPress={(ev) => {
						if (ev.key === 'Enter') {
							handleSubmit()
							ev.preventDefault()
						}
					}}
					value={values.password}
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
			}}
			onSubmit={({ email, password }) =>
				login({ variables: { email, password } })
			}
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
							{f({ id: 'login' })}
						</Typography>
					</Grid>
					<Grid item xs={12} />
					{form}
					{error && (
						<Grid item xs={7}>
							<Typography color='error' align='center'>
								{f({ id: 'login.fail' })}
							</Typography>
						</Grid>
					)}
				</Grid>
			</CardContent>
		</Card>
	)
}
