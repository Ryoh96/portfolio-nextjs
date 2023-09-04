import styled, { css } from 'styled-components'

const Description = styled.p`
  min-height: 0vw;
  margin-bottom: 5vh;
  transition: 0.8s;
  transform-origin: 'center center';
  font-size: clamp(18px, 2vw, 40px);
  font-family: 'Noto Serif JP', '游明朝体', 'Yu Mincho', 'YuMincho', serif;
  grid-area: desc;
  ${({ theme }) => theme.media.u_sp`
      margin-bottom: 0;
      align-self: center;
  `}
`

export default Description
