import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { Dialogs } from './components/Dialog'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            {/* <Tooltip /> */}
            {/* <Drawer /> */}
            <Dialogs />
            // Add Project main content
        </ThemeProvider>
    )
}

export default App
