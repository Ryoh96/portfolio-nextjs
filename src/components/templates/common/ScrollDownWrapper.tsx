import styled from 'styled-components'

const ScrollDownWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
  z-index: 10;
  pointer-events: none;

  ${({ theme }) => theme.media.u_sp`
    font-size: 12px;
    bottom: 20px;
  `}
`

export default ScrollDownWrapper
