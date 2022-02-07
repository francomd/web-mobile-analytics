import React, { forwardRef } from 'react'
import { Button as ThemeUIButton, ButtonProps } from 'theme-ui'
import { buttonStyle } from './styles'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface IButtonProps extends ButtonProps, React.FC {
  size?: ButtonSize
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<any>
}

/* Example of customized Theme-ui built-in component by adding props and theme styles */

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ size = 'md', icon, children, onClick, ...restProps }: IButtonProps, ref) => {
    return (
      <ThemeUIButton ref={ref} onClick={onClick} sx={buttonStyle({ size })} {...restProps}>
        {children}
        {icon}
      </ThemeUIButton>
    )
  }
)
