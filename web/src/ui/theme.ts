/*
Theme based on theme-ui.
More info:
https://theme-ui.com/getting-started
https://theme-ui.com/theming
* */

import { Theme } from 'theme-ui'
import { darken } from 'polished'
import { ButtonSize, IconButtonSize } from '../components'
import { rem } from 'polished'

// Replace them with

const colors = {
    primary: '#0ECC7E',
    secondary: '#00C6D1',
    tertiary: '#102532',
    text: '#222222',
    background: '#FFFFFF',
    muted: '#A1A1A1',
} as const

const fonts = {
    body: '"Red Hat Text", sans-serif',
    heading: '"Red Hat Display", sans-serif',
    monospace: 'Menlo, monospace',
} as const

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

const fontWeights = {
    body: 400,
    heading: 700,
    bold: 700,
} as const

const lineHeights = {
    body: 1.5,
    heading: 1.125,
} as const

const radii = {
    sm: '12px',
    md: '24px',
}
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const shadows = {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
}

const buttons = {
    primary: {
        bg: 'primary',
        color: 'white',
        '&:hover, &:active': {
            bg: darken(0.05, colors.primary),
        },
    },
    secondary: {
        bg: 'secondary',
        color: 'white',
        '&:hover, &:active': {
            bg: darken(0.05, colors.secondary),
        },
    },
    ghost: {
        bg: 'transparent',
        color: 'primary',
        '&:hover, &:active': {
            color: darken(0.05, colors.primary),
        },
    },
    icon: {
        cursor: 'pointer',
        width: '25px',
        height: '25px',
        padding: '5px',
        '& svg': {
            width: rem('10px'),
            height: rem('10px'),
        },
    },
}

const sizes = {
    buttons: {
        sm: '150px',
        md: '200px',
        lg: '300px',
    } as { [key in ButtonSize]: string },
    iconButtons: {
        sm: '20px',
        md: '25px',
    } as { [key in IconButtonSize]: string },
    fullWidth: '100%',
}

// Global styles
const styles = {
    root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
    },
    h1: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 5,
    },
    h2: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 4,
    },
    h3: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 3,
    },
    h4: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2,
    },
    h5: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 1,
    },
    h6: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 0,
    },
    p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
    },
    a: {
        color: 'primary',
    },
    table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
    },
    th: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
    },
    td: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
    },
    img: {
        maxWidth: '100%',
    },
} as const

export const defaultTheme: Theme = {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    shadows,
    radii,
    styles,
    buttons,
    sizes,
    space,
}
