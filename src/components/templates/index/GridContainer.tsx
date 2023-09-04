import styled, { css } from 'styled-components'

import { breakpoints } from '@/theme/mediaQuery'

const GridContainer = styled.div<{ isTop: boolean }>`
  text-align: center;
  white-space: nowrap;
  display: grid;
  place-content: center;
  grid-template-areas:
    'title pic'
    'desc pic'
    'button pic';

  @media (max-width: ${breakpoints.get('sp')}px) {
    height: 75svh;
    grid-template-rows: 1fr 60svw 1fr 1fr;
    grid-template-areas:
      'title'
      'pic'
      'desc'
      'button';
    ${({ isTop }) =>
      isTop &&
      `
      grid-template-areas: "title" "desc";
      grid-template-rows: 100px 100px;
      grid-row-gap: 20px;
      margin-left: 0 !important;

    `}
  }

  grid-column-gap: 5%;

  ${({ isTop }) =>
    isTop &&
    css`
      height: 100%;
      gap: 10svh;
      margin-left: 4%;
    `}
`

export default GridContainer
