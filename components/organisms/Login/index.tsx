import React from 'react'
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
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import Router from 'next/router'
import { useLogInMutation } from '@graphql'
import cookies from 'js-cookie'

const useController = () => {
	const { formatMessage: f } = useIntl()
	const [login, { loading, data }] = useLogInMutation()
	const { enqueueSnackbar } = useSnackbar()
	const form = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ email, password }) => {
			cookies.remove('token')
			try {
				await login({ variables: { email, password } })
			} catch (e) {
				enqueueSnackbar(f({ id: 'default.error' }), {
					variant: 'error',
				})
			}
		},
		validationSchema: Yup.object().shape({
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
		}),
	})
	if (data && data.logIn && data.logIn.viewer.sessionToken) {
		cookies.set('token', data.logIn.viewer.sessionToken, {
			expires: 7,
		})
		Router.push('/welcome')
	}
	return { form, f, loading }
}

const view = ({ form, f, loading }: ReturnType<typeof useController>) => (
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
						helperText={form.errors.email}
						error={!!form.errors.email}
						label={f({ id: 'email' })}
						variant='filled'
						onChange={form.handleChange}
						value={form.values.email}
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
						helperText={form.errors.password}
						error={!!form.errors.password}
						label={f({ id: 'password' })}
						variant='filled'
						onChange={form.handleChange}
						onKeyPress={(ev) => {
							if (ev.key === 'Enter') {
								form.handleSubmit()
								ev.preventDefault()
							}
						}}
						value={form.values.password}
						fullWidth
					/>
				</Grid>
				<Grid item xs={7}>
					{!loading && (
						<Button
							variant='contained'
							color='primary'
							fullWidth
							onClick={() => form.handleSubmit()}
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
			</Grid>
		</CardContent>
	</Card>
)

export const Login = () => view(useController())
