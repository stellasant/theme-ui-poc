import React from 'react'
import { Flex, ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { Button, IconButton, PlusIcon } from './components'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            {/*Add Project main content*/}
            <Flex p="20px" sx={{ gap: '20px' }}>
                <Button icon={<PlusIcon />} variant="primary" size="md">
                    Primary
                </Button>
                <Button variant="secondary" size="lg">
                    Secondary
                </Button>
                <Button variant="ghost" size="sm" icon={<PlusIcon />}>
                    Ghost
                </Button>
                <IconButton variant="primary" icon={<PlusIcon />} />
                <IconButton variant="secondary" size="sm" icon={<PlusIcon />} />
                <IconButton variant="ghost" icon={<PlusIcon />} />
            </Flex>
        </ThemeProvider>
    )
}

export default App
