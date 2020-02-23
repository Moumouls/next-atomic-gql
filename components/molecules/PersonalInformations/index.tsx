import React, { useEffect, Fragment } from 'react'
import { useDebounce } from '@react-hook/debounce'
import {
	useUpdateUserPersonalInformationsMutation,
	useCommonViewerQuery,
} from '@graphql'
import { Fade, Grid, TextField, Typography } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'

const useController = () => {
	const { loading, data } = useCommonViewerQuery()
	const [updateUser] = useUpdateUserPersonalInformationsMutation()
	const f = useIntl().formatMessage
	const { enqueueSnackbar } = useSnackbar()
	const [debounce, setDebounce] = useDebounce(true, 700)
	const form = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
		},
		onSubmit: async (values) => {
			if (data?.viewer.user.id) {
				try {
					await updateUser({
						variables: {
							id: data.viewer.user.id,
							...values,
						},
					})
					enqueueSnackbar(f({ id: 'data.saved' }), {
						variant: 'success',
					})
				} catch (e) {
					enqueueSnackbar(f({ id: 'default.error' }), {
						variant: 'error',
					})
				}
			}
		},
		validationSchema: Yup.object().shape({
			firstname: Yup.string().required(f({ id: 'field.required' })),
			lastname: Yup.string().required(f({ id: 'field.required' })),
		}),
	})
	const onChangeCapture = () => {
		setDebounce(!debounce)
	}
	useEffect(() => {
		if (data) {
			form.handleSubmit()
		}
	}, [debounce])
	useEffect(() => {
		form.setValues({
			...form.values,
			firstname: data?.viewer.user.firstname || '',
			lastname: data?.viewer.user.lastname || '',
		})
	}, [data])
	return { form, onChangeCapture, loading, data, f }
}

const view = ({
	form,
	onChangeCapture,
	loading,
	data,
	f,
}: ReturnType<typeof useController>) =>
	!loading && data?.viewer.user.id ? (
		<Fade in>
			<Fragment>
				<Typography variant='h5' color='textSecondary' gutterBottom>
					{f({ id: 'personal.informations' })}
				</Typography>
				<Grid container spacing={3} justify='center'>
					<Grid item xs={12} sm={6}>
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
							onChangeCapture={onChangeCapture}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							type='text'
							name='lastname'
							helperText={form.errors.lastname}
							error={!!form.errors.lastname}
							value={form.values.lastname}
							label={f({ id: 'lastname' })}
							variant='filled'
							onChangeCapture={onChangeCapture}
							onChange={form.handleChange}
							fullWidth
						/>
					</Grid>
				</Grid>
			</Fragment>
		</Fade>
	) : null

export const PersonalInformations = () => view(useController())
