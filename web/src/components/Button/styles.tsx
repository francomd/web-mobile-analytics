import { ThemeUIStyleObject } from 'theme-ui'
import { ButtonSize } from './Button'
import { rem } from 'polished'

export const buttonStyle = ({ size }: { size: ButtonSize }): ThemeUIStyleObject => ({
  borderRadius: 'md',
  cursor: 'pointer',
  minWidth: `buttons.${size}`,
  position: 'relative',
  '& svg': {
    width: rem('15px'),
    height: rem('15px'),
    position: 'absolute',
    top: rem('12px'),
    right: rem('20px'),
  },
})
