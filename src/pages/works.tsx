import type { NextPage } from 'next'
import { useState } from 'react'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'

import ScrollDown from '@/components/atoms/ScrollDown'
import Container from '@/components/layout/Container'
import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import Header from '@/components/organisms/Header'
import Particle from '@/components/organisms/Particle'
import WorkSection from '@/components/organisms/WorkSection'
import { works } from '@/constants/works'

const WorksInner = styled.div`
  width: min(1360px, 84%);
  z-index: 2;
  margin-inline: auto;
  overflow-x: visible;
`

const ScrollDownWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;

  ${({ theme }) => theme.media.u_sp`
    font-size: 12px;
    bottom: 20px;
  `}
  z-index: 10;
`

const Works: NextPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header type="back" />
      <Particle />
      <Container>
        <WorksInner>
          <SnapContainer>
            {works.map((work, index) => (
              <SnapItem key={index}>
                <WorkSection work={work} />
              </SnapItem>
            ))}
            <InView as="div" onChange={() => setCount(count + 1)} />
          </SnapContainer>
        </WorksInner>
      </Container>

      <ScrollDownWrapper>
        <ScrollDown isLast={count >= 2 ? true : false} />
      </ScrollDownWrapper>
    </>
  )
}

export default Works
