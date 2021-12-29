import React from 'react'
import {  ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { Button } from './components/Button'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
          {/*Add Project main content*/}
          <Button variant='primary' sx={{ size: 'buttons.size.sm'}}>Primary</Button>
          <Button variant='secondary' sx={{ size: 'buttons.size.md' }}>Secondary</Button>
          <Button variant='ghost' sx={{ size: 'buttons.size.md' }}>Ghost</Button>
        </ThemeProvider>
    )
}

export default App
