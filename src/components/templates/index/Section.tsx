import styled, { css } from 'styled-components'

import { prata } from '@/font/prata'

export const Section = styled.section.attrs({
  className: prata.className,
})<{ isCurrent: boolean }>`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  box-sizing: border-box !important;
  display: grid;
  mix-blend-mode: difference;
  opacity: 0;
  transition-delay: 0.5s;

  align-content: center;
  justify-items: center;
  gap: 7svh;
  transition: opacity 1s ease-in;

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      opacity: 1;
    `}
`