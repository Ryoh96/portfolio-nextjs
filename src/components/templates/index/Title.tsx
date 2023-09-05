import styled from 'styled-components'

export const Title = styled.h2`
  font-size: clamp(40px, 8vw, 150px);
  min-height: 0vw;
  padding-top: 7svw;
  transition: 0.6s;
  transform-origin: 'center center';
  line-height: 1;
  text-align: center;
  grid-area: title;

  ${({ theme }) => theme.media.u_sp`
    padding-top: 0;

  `}
`