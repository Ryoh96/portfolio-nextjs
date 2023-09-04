import styled, { css } from 'styled-components'

const FootPrintWrapper = styled.div`
  margin-left: 30px;
  z-index: 30;
  ${({ theme }) => theme.media.u_sm`
    display: none; 
`}
`

export default FootPrintWrapper
