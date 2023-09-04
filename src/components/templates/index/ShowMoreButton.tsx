import Link from 'next/link'
import styled, { css } from 'styled-components'

const ShowMoreButton = styled(Link)`
  padding-bottom: 8svw;
  ${({ theme }) => theme.media.u_sp`
    padding-bottom: 0;
  `}
`

export default ShowMoreButton
