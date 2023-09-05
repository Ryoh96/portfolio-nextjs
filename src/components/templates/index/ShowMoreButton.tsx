import Link from 'next/link'
import styled from 'styled-components'

export const ShowMoreButton = styled(Link)`
  padding-bottom: 8svw;
  ${({ theme }) => theme.media.u_sp`
    padding-bottom: 0;
  `}
`