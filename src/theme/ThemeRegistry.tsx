'use client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import { theme } from './muiTheme' // This is your MUI theme file

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
