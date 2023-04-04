// @ts-nocheck
import { css } from 'styled-components'

export const breakpoints = new Map([
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
  u_xxs: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('xxs')}px) {
      ${css(...args)}
    }
  `,
  u_xs: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('xs')}px) {
      ${css(...args)}
    }
  `,
  u_sm: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('sm')}px) {
      ${css(...args)}
    }
  `,
  u_sp: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('sp')}px) {
      ${css(...args)}
    }
  `,
  u_md: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('md')}px) {
      ${css(...args)}
    }
  `,
  u_pc: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('pc')}px) {
      ${css(...args)}
    }
  `,
  u_lg: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('lg')}px) {
      ${css(...args)}
    }
  `,
  u_xl: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('xl')}px) {
      ${css(...args)}
    }
  `,
  u_xxl: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('xxl')}px) {
      ${css(...args)}
    }
  `,
  u_3xl: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('3xl')}px) {
      ${css(...args)}
    }
  `,
  u_4xl: (...args: [TemplateStringsArray]) => css`
    @media (max-width: ${breakpoints.get('4xl')}px) {
      ${css(...args)}
    }
  `,
  o_xxs: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('xxs') + 1}px) {
      ${css(...args)}
    }
  `,
  o_xs: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('xs') + 1}px) {
      ${css(...args)}
    }
  `,
  o_sm: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('sm') + 1}px) {
      ${css(...args)}
    }
  `,
  o_sp: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('sp') + 1}px) {
      ${css(...args)}
    }
  `,
  o_md: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('md') + 1}px) {
      ${css(...args)}
    }
  `,
  o_pc: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('pc') + 1}px) {
      ${css(...args)}
    }
  `,
  o_lg: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('lg') + 1}px) {
      ${css(...args)}
    }
  `,
  o_xl: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('xl') + 1}px) {
      ${css(...args)}
    }
  `,
  o_xxl: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('xxl') + 1}px) {
      ${css(...args)}
    }
  `,
  o_3xl: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('3xl') + 1}px) {
      ${css(...args)}
    }
  `,
  o_4xl: (...args: [TemplateStringsArray]) => css`
    @media (min-width: ${breakpoints.get('4xl') + 1}px) {
      ${css(...args)}
    }
  `,
}
