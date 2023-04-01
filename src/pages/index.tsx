import type { NextPage } from 'next'
import styled from 'styled-components'

import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import { topSectionTexts } from '@/constants/top-sections'

const Section = styled.section`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  box-sizing: border-box !important;
  display: grid;
  transition: opacity 1s ease-in-out;
  mix-blend-mode: difference;

  align-content: center;
  justify-items: center;
  gap: 11svh;
`

const Title = styled.h1`
  font-size: clamp(76.8px, 10vw, 150px);
  min-height: 0vw;
  margin-bottom: 2vh;
  transition: 0.6s;
  /* transform: rotate(-10deg); */
  transform-origin: 'cecnter center';
  line-height: 1;

`

const Description = styled.p`
  min-height: 0vw;
  margin-bottom: 5vh;
  transition: 0.8s;
  /* transform: rotate(-30deg); */
  transform-origin: 'cecnter center';
  font-size: clamp(24px, 2.67vw, 40px);
`

const Index: NextPage = () => {
  return (
    <SnapContainer>
      {topSectionTexts.map((section, index) => (
        <SnapItem key={index} id={`${index}`}>
          <Section>
            <Title>{section.title}</Title>
            <Description>{section.description}</Description>
            <button>Show more</button>
          </Section>
        </SnapItem>
      ))}
    </SnapContainer>
  )
}

export default Index
