import React from 'react'
import { useFormik } from 'formik'
import Router from 'next/router'
import * as Yup from 'yup'
import { useIntl } from 'react-intl'
import {
	Grid,
	TextField,
	Typography,
	CircularProgress,
	Button,
	Fade,
} from '@material-ui/core'
import { useSnackbar } from 'notistack'
import { useUpdateUserOnBoardingMutation, useCommonViewerQuery } from '@graphql'
import { theme } from '../../../theme'

export const OnBoarding = () => {
	const { formatMessage: f } = useIntl()
	const { data } = useCommonViewerQuery()
	const { enqueueSnackbar } = useSnackbar()
	const [mutate, { loading }] = useUpdateUserOnBoardingMutation()
	const form = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
		},
		validationSchema: Yup.object().shape({
			firstname: Yup.string().required(f({ id: 'field.required' })),
			lastname: Yup.string().required(f({ id: 'field.required' })),
		}),
		onSubmit: async ({ firstname, lastname }) => {
			if (!data?.viewer.user.id) {
				enqueueSnackbar(f({ id: 'default.error' }), {
					variant: 'error',
				})
				return
			}
			try {
				await mutate({
					variables: {
						userId: data.viewer.user.id,
						firstname,
						lastname,
					},
				})
				Router.push('/welcome')
			} catch (e) {
				enqueueSnackbar(f({ id: 'default.error' }), {
					variant: 'error',
				})
			}
		},
	})
	if (!data) return null

	return (
		<Fade in>
			<div>
				<Typography
					gutterBottom
					variant='h4'
					align='center'
					style={{ marginBottom: theme.spacing(5) }}
				>
					{f({ id: 'onboarding' })}
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							helperText={
								form.errors.firstname ||
								f({ id: 'public.info' })
							}
							error={!!form.errors.firstname}
							name='firstname'
							type='text'
							onChange={form.handleChange}
							value={form.values.firstname}
							label={f({ id: 'firstname' })}
							variant='filled'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							helperText={
								form.errors.lastname || f({ id: 'public.info' })
							}
							error={!!form.errors.lastname}
							name='lastname'
							type='text'
							onChange={form.handleChange}
							value={form.values.lastname}
							label={f({ id: 'lastname' })}
							onKeyPress={(ev) => {
								if (ev.key === 'Enter') {
									form.handleSubmit()
									ev.preventDefault()
								}
							}}
							variant='filled'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						{!loading && (
							<Button
								variant='contained'
								color='secondary'
								style={{ display: 'block', margin: '0 auto' }}
								onClick={() => form.handleSubmit()}
							>
								{f({ id: 'next' })}
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
			</div>
		</Fade>
	)
}
