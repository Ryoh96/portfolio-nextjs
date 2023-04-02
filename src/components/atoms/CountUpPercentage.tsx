import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Count = styled.span`
  font-size: 60px;
  font-weight: bold;
  margin-top: 20px;

  ${({ theme }) => theme.media.u_sm`
    margin-top: 16px;
    font-size: 50px;
  `}

  ${({ theme }) => theme.media.u_xs`
    margin-top: 6px;
    font-size: 36px;
  `}
`

const Percentage = styled.span`
  font-weight: normal;
  font-size: 40px;
  transition: opacity 0.4s;
  ${({ theme }) => theme.media.u_sm`
    font-size: 30px;
  `}

  ${({ theme }) => theme.media.u_xs`
    font-size: 20px;
  `}
`

type CountUpPercentageProps = {
  percentage: number
  countUpSpeed?: number
}

const CountUpPercentage = ({
  percentage,
  countUpSpeed = 1,
}: CountUpPercentageProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      count <= percentage && setCount((prev) => prev + 1)
    }, countUpSpeed)
    return () => clearInterval(id)
  }, [count, countUpSpeed, percentage])

  return (
    <div>
      <Count>{count}</Count>
      <Percentage>%</Percentage>
    </div>
  )
}

export default CountUpPercentage
