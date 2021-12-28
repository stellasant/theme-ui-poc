import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
          {/*Add Project main content*/}
        </ThemeProvider>
    )
}

export default App
