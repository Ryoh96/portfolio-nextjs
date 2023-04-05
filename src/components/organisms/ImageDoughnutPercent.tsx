import type { RefObject } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

import _CountUpDoughnut from '../atoms/CountUpDoughnuts'
import CountUpPercentage from '../atoms/CountUpPercentage'
import _PopUpImage from '../atoms/PopUpImage'
import ImageDoughnuts from '../molecules/ImageDoughnuts'

const Title = styled.p`
  font-size: 50px;
  margin-top: 20px;

  ${({ theme }) => theme.media.u_sp`
    font-size: 26px;
  `}
  ${({ theme }) => theme.media.u_sm`
    font-size: 20px;
  `}
  ${({ theme }) => theme.media.u_xs`
    font-size: 18px;
  `}
`

const ImageDoughnutsPercentInner = styled.div`
  display: grid;
  justify-items: center;
  gap: 1em;
  min-height: 432px;
`

type ImageDoughnutsPercentProps = {
  title: string
  url: string
  percentage: number
  isAppear?: boolean
}

const ImageDoughnutsPercentWrapper = styled.div`
  height: 432px;
`

const ImageDoughnutsPercent = ({
  title,
  url,
  percentage,
  isAppear = false,
}: ImageDoughnutsPercentProps) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
    delay: 1500,
  })
  return (
    <>
      <ImageDoughnutsPercentWrapper ref={ref} id={title}>
        {inView && (
          <ImageDoughnutsPercentInner>
            <CountUpPercentage percentage={percentage} />
            <ImageDoughnuts url={url} percentage={percentage} />
            <Title>{title}</Title>
          </ImageDoughnutsPercentInner>
        )}
      </ImageDoughnutsPercentWrapper>
    </>
  )
}

export default ImageDoughnutsPercent
