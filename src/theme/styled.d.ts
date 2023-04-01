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
  }
}
