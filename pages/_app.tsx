/* eslint-disable */
// @ts-nocheck
import React from 'react'
import App from 'next/app'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloLink } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { createUploadLink } from 'apollo-upload-client'
import getConfig from 'next/config'
import fetch from 'node-fetch'
import cookies from 'js-cookie'
import { IntlProvider } from 'react-intl'
import { ThemeProvider, CssBaseline, NoSsr } from '@material-ui/core'
import intl from '../intl'
import { theme } from '../theme'
import { SnackbarProvider } from 'notistack'
import 'moment/locale/fr'

class MyApp extends App {
	client: any

	static async getInitialProps() {
		return {}
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.Component === nextProps.Component) {
			return false
		}
		return true
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}

	render() {
		const { Component, pageProps } = this.props

		const {
			publicRuntimeConfig: { appId, graphQLUrl },
		} = getConfig()

		const options = {
			uri: graphQLUrl,
			fetch: (...args) => {
				let t = cookies.get('token')
				if (t) args[1].headers['X-Parse-Session-Token'] = t
				args[1].headers['X-Parse-Application-Id'] = appId
				return fetch(...args)
			},
		}

		const httpLink = ApolloLink.split(
			(operation) => operation.getContext().hasUpload,
			createUploadLink(options),
			new BatchHttpLink(options),
		)

		const fetchPolicy = process.browser ? 'cache-first' : 'cache-only'

		if (!this.client) {
			this.client = new ApolloClient({
				cache: new InMemoryCache(),
				defaultOptions: {
					watchQuery: { fetchPolicy },
					query: {
						fetchPolicy,
					},
				},
				link: httpLink,
			})
		}

		return (
			<SnackbarProvider preventDuplicate>
				<ApolloProvider client={this.client}>
					<IntlProvider locale='fr' messages={intl.fr}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<NoSsr>
								<Component {...pageProps} />
							</NoSsr>
						</ThemeProvider>
					</IntlProvider>
				</ApolloProvider>
			</SnackbarProvider>
		)
	}
}

export default MyApp
