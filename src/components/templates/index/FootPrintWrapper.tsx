import styled from 'styled-components'

export const FootPrintWrapper = styled.div`
  margin-left: 30px;
  z-index: 30;
  ${({ theme }) => theme.media.u_sm`
    display: none; 
`}
`
