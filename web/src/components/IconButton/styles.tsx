import { ThemeUIStyleObject } from 'theme-ui'
import { rem } from 'polished'
import { IconButtonSize } from './IconButton'

export const iconButtonStyle = ({ size }: { size: IconButtonSize }): ThemeUIStyleObject => ({
    borderRadius: 'md',
    cursor: 'pointer',
    width: `iconButtons.${size}`,
    height: `iconButtons.${size}`,
    '& svg': {
        width: rem('15px'),
        height: rem('15px'),
    },
})
