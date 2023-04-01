import styled from 'styled-components'

import { prata } from '@/font/prata'

const Description = styled.p.attrs({
  className: prata.className,
})`
  padding-bottom: 0;
  font-size: clamp(23px, 3vw, 45px);
  min-height: 0vw;
  text-align: center;

  ${({ theme }) => theme.media.u_xs`
    font-size: 18px;
  `}
`
export default Description
