import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: min(${theme.contentWidth}, ${theme.maxContentWidth});
  `}
  margin-inline: auto;
`

export default Container
