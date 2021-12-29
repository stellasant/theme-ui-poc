import React, { forwardRef } from 'react'
import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps } from 'theme-ui'
import { ButtonSize } from '../../types/ui'
import { buttonStyle } from './styles'

interface ButtonProps extends ThemeUIButtonProps, React.FC {
    size?: ButtonSize
}

/* Example of customized Theme-ui built-in component by adding props and theme styles */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ size = 'md', children, ...restProps }: ButtonProps, ref) => {
        return (
            <ThemeUIButton ref={ref} sx={buttonStyle({ size })} {...restProps}>
                {children}
            </ThemeUIButton>
        )
    }
)
