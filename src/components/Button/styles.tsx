import { ThemeUIStyleObject } from 'theme-ui'
import { ButtonSize } from './Button'

export const buttonStyle = ({ size }: { size: ButtonSize }): ThemeUIStyleObject => ({
    borderRadius: 'md',
    cursor: 'pointer',
    width: `buttons.${size}`,
})
