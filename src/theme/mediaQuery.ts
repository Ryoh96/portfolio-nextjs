// @ts-nocheck
import { css } from 'styled-components'

const breakpoints = new Map([
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
  ['4xl', 1900],
])

export const media = {
  u_xxs: (...args: string) => css`
    @media (max-width: ${breakpoints.get('xxs')}px) {
      ${css(...args)}
    }
  `,
  u_xs: (...args: string) => css`
    @media (max-width: ${breakpoints.get('xs')}px) {
      ${css(...args)}
    }
  `,
  u_sm: (...args: string) => css`
    @media (max-width: ${breakpoints.get('sm')}px) {
      ${css(...args)}
    }
  `,
  u_md: (...args: string) => css`
    @media (max-width: ${breakpoints.get('md')}px) {
      ${css(...args)}
    }
  `,
  u_pc: (...args: string) => css`
    @media (max-width: ${breakpoints.get('pc')}px) {
      ${css(...args)}
    }
  `,
  u_lg: (...args: string) => css`
    @media (max-width: ${breakpoints.get('lg')}px) {
      ${css(...args)}
    }
  `,
  u_xl: (...args: string) => css`
    @media (max-width: ${breakpoints.get('xl')}px) {
      ${css(...args)}
    }
  `,
  u_xxl: (...args: string) => css`
    @media (max-width: ${breakpoints.get('xxl')}px) {
      ${css(...args)}
    }
  `,
  u_3xl: (...args: string) => css`
    @media (max-width: ${breakpoints.get('3xl')}px) {
      ${css(...args)}
    }
  `,
  u_4xl: (...args: string) => css`
    @media (max-width: ${breakpoints.get('4xl')}px) {
      ${css(...args)}
    }
  `,
  o_xxs: (...args: string) => css`
    @media (min-width: ${breakpoints.get('xxs') + 1}px) {
      ${css(...args)}
    }
  `,
  o_xs: (...args: string) => css`
    @media (min-width: ${breakpoints.get('xs') + 1}px) {
      ${css(...args)}
    }
  `,
  o_sm: (...args: string) => css`
    @media (min-width: ${breakpoints.get('sm') + 1}px) {
      ${css(...args)}
    }
  `,
  o_md: (...args: string) => css`
    @media (min-width: ${breakpoints.get('md') + 1}px) {
      ${css(...args)}
    }
  `,
  o_pc: (...args: string) => css`
    @media (min-width: ${breakpoints.get('pc') + 1}px) {
      ${css(...args)}
    }
  `,
  o_lg: (...args: string) => css`
    @media (min-width: ${breakpoints.get('lg') + 1}px) {
      ${css(...args)}
    }
  `,
  o_xl: (...args: string) => css`
    @media (min-width: ${breakpoints.get('xl') + 1}px) {
      ${css(...args)}
    }
  `,
  o_xxl: (...args: string) => css`
    @media (min-width: ${breakpoints.get('xxl') + 1}px) {
      ${css(...args)}
    }
  `,
  o_3xl: (...args: string) => css`
    @media (min-width: ${breakpoints.get('3xl') + 1}px) {
      ${css(...args)}
    }
  `,
  o_4xl: (...args: string) => css`
    @media (min-width: ${breakpoints.get('4xl') + 1}px) {
      ${css(...args)}
    }
  `,
}
