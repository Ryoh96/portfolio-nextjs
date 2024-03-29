import type { NextPage } from 'next'
import Head from 'next/head'
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
import Meta from '@/components/utils/Meta'
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
      <Meta
        title="Works"
        desc="これまで作成してきたものについて記載"
        url="works"
      />
      <Header type="back" />
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
      <Particle />
    </>
  )
}

export default Works
