import styled from 'styled-components'

import _CountUpDoughnut from '../atoms/CountUpDoughnuts'
import _PopUpImage from '../atoms/PopUpImage'

const PopUpImage = styled(_PopUpImage)`
  width: 45%;
  height: auto;
  grid-row: 1/ -1;
  grid-column: 1/ -1;
  z-index: 2;
  place-self: center;
`

const CountUpDoughnut = styled(_CountUpDoughnut)`
  grid-row: 1/ -1;
  grid-column: 1/ -1;
  z-index: 1;
`

const ImageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
`

type ImageDoughnutsPercentProps = {
  url: string
  percentage: number
}

const ImageDoughnuts = ({
  url,
  percentage
}: ImageDoughnutsPercentProps) => {
  return (
    <ImageWrapper>
      <PopUpImage url={url} appear={true} />
      <CountUpDoughnut percentage={percentage} />
    </ImageWrapper>
  )
}

export default ImageDoughnuts