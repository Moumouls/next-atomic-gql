import React from 'react'
import { Formik } from 'formik'
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
import { useUpdateUserOnBoardingMutation, useCommonViewerQuery } from '@graphql'
import { theme } from '../../../theme'

export const OnBoarding = () => {
	const { formatMessage: f } = useIntl()
	const { data } = useCommonViewerQuery()
	const [mutate, { error, loading }] = useUpdateUserOnBoardingMutation()
	if (!data) return null
	const formFields = ({
		handleChange,
		values,
		errors,
		handleSubmit,
	}: any) => (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<TextField
					required
					helperText={errors.firstname || f({ id: 'public.info' })}
					error={!!errors.firstname}
					name='firstname'
					type='text'
					onChange={handleChange}
					value={values.firstname}
					label={f({ id: 'firstname' })}
					variant='filled'
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<TextField
					required
					helperText={errors.lastname || f({ id: 'public.info' })}
					error={!!errors.lastname}
					name='lastname'
					type='text'
					onChange={handleChange}
					value={values.lastname}
					label={f({ id: 'lastname' })}
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
						onClick={handleSubmit}
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
	)
	const form = (
		<Formik
			initialValues={{
				firstname: '',
				lastname: '',
			}}
			onSubmit={async ({ firstname, lastname }) => {
				await mutate({
					variables: {
						userId: data.viewer.user.id,
						firstname,
						lastname,
					},
				})
				Router.push('/dashboard')
			}}
			validationSchema={Yup.object().shape({
				firstname: Yup.string().required(f({ id: 'field.required' })),
				lastname: Yup.string().required(f({ id: 'field.required' })),
			})}
		>
			{formFields}
		</Formik>
	)

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
				{form}
				{error && (
					<Typography color='error' align='center'>
						{f({ id: 'default.error' })}
					</Typography>
				)}
			</div>
		</Fade>
	)
}
