import React from 'react'
import { Flex, ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { Button } from './components/Button'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
          {/*Add Project main content*/}
          <Flex p='20px' sx={{ gap: '20px'}}>
            <Button variant='primary' sx={{ size: 'buttons.size.sm'}}>Primary</Button>
            <Button variant='secondary' sx={{ size: 'buttons.size.md' }}>Secondary</Button>
            <Button variant='ghost' sx={{ size: 'buttons.size.md' }}>Ghost</Button>
          </Flex>

        </ThemeProvider>
    )
}

export default App
