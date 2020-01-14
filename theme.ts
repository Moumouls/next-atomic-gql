// @ts-nocheck
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { brown, blueGrey } from '@material-ui/core/colors'

export const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			primary: brown,
			secondary: blueGrey,
		},
		spacing: 10,
		shape: {
			borderRadius: 10,
		},
		typography: {
			fontFamily: "'NextAtomic', sans-serif",
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					body: {
						backgroundColor: '#fff',
					},
				},
			},
		},
	}),
)
