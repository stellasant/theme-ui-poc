import React, { forwardRef } from 'react'
import { Box, Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps } from 'theme-ui'
import { buttonStyle } from './styles'

interface ButtonProps extends ThemeUIButtonProps {
  isLoading?: boolean
  children: React.ReactNode
}

/* Example of customized Theme-ui ready-made component by adding props and theme styles */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, children, ...restProps }, ref) => {
    return (
      <ThemeUIButton ref={ref} {...restProps} sx={buttonStyle}>
        {isLoading && (
          /* wip */
          <Box
          />
        )}
        {children}
      </ThemeUIButton>
    )
  }
);