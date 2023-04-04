import type { DefaultTheme } from 'styled-components'

import { breakpoints, media } from './mediaQuery'

const contentWidth = '94%'
const maxContentWidth = '1900px'

export const theme: DefaultTheme = {
  breakpoints,
  media,
  contentWidth,
  maxContentWidth,
}
