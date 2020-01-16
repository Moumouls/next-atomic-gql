/* eslint-disable */
// @ts-nocheck
import React from 'react'
import App from 'next/app'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { createUploadLink } from 'apollo-upload-client'
import getConfig from 'next/config'
import fetch from 'node-fetch'
import nextCookie from 'next-cookies'
import cookies from 'js-cookie'
import { IntlProvider } from 'react-intl'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import intl from '../intl'
import { theme } from '../theme'
import { SnackbarProvider } from 'notistack'

class MyApp extends App {
	static async getInitialProps(appContext) {
		const appProps = await App.getInitialProps(appContext)
		const { token } = nextCookie(appContext.ctx)
		const {
			publicRuntimeConfig: { appId, graphQLUrl },
		} = getConfig()
		const headers = {
			'X-Parse-Application-Id': getConfig().publicRuntimeConfig.appId,
		}
		return {
			...appProps,
			headers,
			token,
			graphQLUrl,
		}
	}
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}
	render() {
		const { Component, pageProps, headers, token, graphQLUrl } = this.props
		const client = new ApolloClient({
			cache: new InMemoryCache(),
			link: createUploadLink({
				uri: graphQLUrl,
				fetch: (...args) => {
					try {
						let t = cookies.get('token')
						if (t) args[1].headers['X-Parse-Session-Token'] = t
					} catch (e) {
						if (token) {
							args[1].headers['X-Parse-Session-Token'] =
								headers.token
						}
					}
					args[1].headers = {
						...args[1].headers,
						...headers,
					}
					return fetch(...args)
				},
			}),
		})

		return (
			<SnackbarProvider preventDuplicate>
				<ApolloProvider client={client}>
					<IntlProvider locale='fr' messages={intl.fr}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<Component {...pageProps} />
						</ThemeProvider>
					</IntlProvider>
				</ApolloProvider>
			</SnackbarProvider>
		)
	}
}

export default MyApp
