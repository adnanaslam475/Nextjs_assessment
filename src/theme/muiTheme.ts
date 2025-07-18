// theme/muiTheme.ts
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// You can extend this theme as needed
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: `'Roboto', sans-serif`,
    },
})
