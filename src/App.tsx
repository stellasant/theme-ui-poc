import React from 'react'
import {  ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { Button } from './components/Button'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
          {/*Add Project main content*/}
          <Button variant='buttons.variant.primary' sx={{ size: 'buttons.size.sm'}}>Primary</Button>
          <Button variant='buttons.variant.secondary' sx={{ size: 'buttons.size.md' }}>Secondary</Button>
        </ThemeProvider>
    )
}

export default App
