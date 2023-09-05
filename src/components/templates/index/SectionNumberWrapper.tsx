import styled from 'styled-components'

export const SectionNumberWrapper = styled.div`
  width: fit-content;
  ${({ theme }) => theme.media.u_sm`
    display: none; 
`}
`