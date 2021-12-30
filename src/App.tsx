import React from 'react'
import { Flex, ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { Button } from './components'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            {/*Add Project main content*/}
            <Flex p="20px" sx={{ gap: '20px' }}>
                <Button variant="primary" size="lg">
                    Primary
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost" size="sm">
                    Ghost
                </Button>
            </Flex>
        </ThemeProvider>
    )
}

export default App
