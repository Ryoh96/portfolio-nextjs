import styled from 'styled-components'

import FootPrint from '../atoms/FootPrint'

type FootPrintsProps = {
  length?: number
  current?: number
  onClick: (index: number) => void
}

const FootPrintsWrapper = styled.div`
  display: grid;
  gap: 20px;
`

const FootPrints = ({ length = 5, current = 0, onClick }: FootPrintsProps) => {
  return (
    <FootPrintsWrapper>
      {[...Array(length)].map((_, i) => (
        <FootPrint
          key={i}
          type={i % 2 === 0 ? 'left' : 'right'}
          isActive={current === i ? true : false}
          onClick={() => onClick(i)}
        />
      ))}
    </FootPrintsWrapper>
  )
}

export default FootPrints
