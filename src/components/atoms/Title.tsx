import styled from 'styled-components'

import { prata } from '@/font/prata'

const Title = styled.h1.attrs({
  className: prata.className,
})`
  font-size: clamp(71.7px, 9.33vw, 140px);
  text-align: center;

  ${({ theme }) => theme.media.u_xs`
    font-size: 60px;
  `}
`
export default Title
