import 'styled-components'

import type { FlattenSimpleInterpolation } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    media: Record<
      | 'u_xxs'
      | 'u_xs'
      | 'u_sm'
      | 'u_sp'
      | 'u_md'
      | 'u_pc'
      | 'u_lg'
      | 'u_xl'
      | 'u_xxl'
      | 'u_3xl'
      | 'u_4xl'
      | 'u_xxs'
      | 'o_xs'
      | 'o_sm'
      | 'o_sp'
      | 'o_md'
      | 'o_pc'
      | 'o_lg'
      | 'o_xl'
      | 'o_xxl'
      | 'o_3xl'
      | 'o_4xl',
      (...args: [TemplateStringsArray]) => FlattenSimpleInterpolation
    >
    contentWidth: string
    maxContentWidth: string
    breakpoints: [
      ['xxs', 400],
      ['xs', 480],
      ['sm', 580],
      ['sp', 835],
      ['md', 900],
      ['pc', 1024],
      ['lg', 1100],
      ['xl', 1300],
      ['xxl', 1400],
      ['3xl', 1600],
      ['4xl', 1900]
    ]
  }
}
