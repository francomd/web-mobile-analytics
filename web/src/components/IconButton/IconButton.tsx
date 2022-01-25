import React, { forwardRef } from 'react'
import { IconButton as ThemeUIIconButton, IconButtonProps } from 'theme-ui'
import { iconButtonStyle } from './styles'

export type IconButtonSize = 'sm' | 'md'

export interface IIconButton extends IconButtonProps {
    icon: JSX.Element
    onClick?: React.MouseEventHandler<any>
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: IconButtonSize
}

export const IconButton = forwardRef<HTMLButtonElement, IIconButton>(
    ({ icon, onClick, size = 'md', variant, ...restProps }: IIconButton, ref) => {
        return (
            <ThemeUIIconButton
                variant={variant}
                ref={ref}
                onClick={onClick}
                sx={iconButtonStyle({ size })}
                {...restProps}
            >
                {icon}
            </ThemeUIIconButton>
        )
    }
)
