import styled from 'styled-components'

import ImageDoughnutsPercent from './ImageDoughnutPercent'

const ImageDoughnutsPercentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10vw;
`

type AppearWithScroll = {
  components: JSX.Element[]
}

const AppearWithScroll = ({ components }: AppearWithScroll) => {
  const len = 20
  return (
    <ImageDoughnutsPercentWrapper>
      {components.map((component, i) => compoent)}
    </ImageDoughnutsPercentWrapper>
  )
}

export default AppearWithScroll
