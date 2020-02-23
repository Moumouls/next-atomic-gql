import React from 'react'
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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSignUpMutation } from '@graphql'
import cookies from 'js-cookie'
import Router from 'next/router'
import { useSnackbar } from 'notistack'

const useController = () => {
	const { formatMessage: f } = useIntl()
	const [signUp, { loading, data }] = useSignUpMutation()
	const form = useFormik({
		initialValues: {
			email: '',
			password: '',
			passwordConfirmation: '',
		},
		onSubmit: async ({ email, password }) => {
			cookies.remove('token')
			try {
				await signUp({ variables: { email, password } })
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
			passwordConfirmation: Yup.string()
				.oneOf(
					[Yup.ref('password'), null],
					f({ id: 'password.notmatch' }),
				)
				.required(f({ id: 'field.required' })),
		}),
	})
	const { enqueueSnackbar } = useSnackbar()
	if (data && data.signUp && data.signUp.viewer.sessionToken) {
		cookies.set('token', data.signUp.viewer.sessionToken, {
			expires: 7,
		})
		Router.push('/onboarding')
	}
	return { form, f, loading }
}

const view = ({ form, loading, f }: ReturnType<typeof useController>) => (
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
						value={form.values.email}
						label={f({ id: 'email' })}
						variant='filled'
						onChange={form.handleChange}
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
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<VpnKey />
								</InputAdornment>
							),
						}}
						required
						type='password'
						helperText={form.errors.passwordConfirmation}
						error={!!form.errors.passwordConfirmation}
						value={form.values.passwordConfirmation}
						name='passwordConfirmation'
						label={f({ id: 'confirm.password' })}
						variant='filled'
						onChange={form.handleChange}
						onKeyPress={(ev) => {
							if (ev.key === 'Enter') {
								form.handleSubmit()
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

export const SignUp = () => view(useController())
