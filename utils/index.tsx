import React, { createContext } from 'react'
import { SnackbarProvider as OriginalSnackbarProvider } from 'notistack'

export const selectLang = (o) => o.fr || o.en

export const MainQueryContext = createContext({ refetch: () => true })

// eslint-disable-next-line
export const MainQueryProvider = ({ refetch, children }) => (
	<MainQueryContext.Provider value={{ refetch }}>
		{children}
	</MainQueryContext.Provider>
)

// eslint-disable-next-line
export const SnackbarProvider = ({ children }) => (
	<OriginalSnackbarProvider>{children}</OriginalSnackbarProvider>
)
export const snackbarDecorator = (storyFn) => (
	<OriginalSnackbarProvider>{storyFn()}</OriginalSnackbarProvider>
)
