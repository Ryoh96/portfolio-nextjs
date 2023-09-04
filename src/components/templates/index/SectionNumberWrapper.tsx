import styled, { css } from 'styled-components'

const SectionNumberWrapper = styled.div`
  width: fit-content;
  ${({ theme }) => theme.media.u_sm`
    display: none; 
`}
`
export default SectionNumberWrapper
