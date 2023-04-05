import type { NextPage } from 'next'
import type { RefObject } from 'react'
import { createRef, useEffect, useMemo, useRef, useState } from 'react'
import { InView } from 'react-intersection-observer'
import styled from 'styled-components'

import _Description from '@/components/atoms/Description'
import ScrollDown from '@/components/atoms/ScrollDown'
import _Title from '@/components/atoms/Title'
import Container from '@/components/layout/Container'
import Header from '@/components/organisms/Header'
import ImageDoughnutsPercent from '@/components/organisms/ImageDoughnutPercent'
import Particle from '@/components/organisms/Particle'
import { skills } from '@/constants/skills'

const PageTitle = styled(_Title)`
  padding-top: 1em;
  margin-bottom: 0.5em;
`

const PageDescription = styled(_Description)`
  margin-bottom: 2.5em;
`

const SkillsInner = styled.div`
  max-width: 1360px;
  width: 92%;
  position: relative;
  z-index: 2;
  margin-inline: auto;
  margin-bottom: 180px;
`
const ImageDoughnutsPercentWrapper = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 10vw;
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

const Skills: NextPage = () => {
  const chartRefs = useRef<RefObject<HTMLDivElement>[]>([])
  const isEnd = useRef(false)
  const skillLength = useMemo(() => skills.length, [])

  ;[...Array(skillLength)].forEach((_, index) => {
    chartRefs.current[index] = createRef<HTMLDivElement>()
  })

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [count, setCount] = useState(0)
  return (
    <>
      <Header type="back" />
      <Container>
        <SkillsInner>
          <PageTitle>Skills</PageTitle>
          <PageDescription>得意な言語・フレームワーク等</PageDescription>
          <ImageDoughnutsPercentWrapper ref={wrapperRef}>
            {skills.map((skill, i) => (
              <div key={i} ref={chartRefs.current[i]} id={`${i}`}>
                <ImageDoughnutsPercent
                  title={skill.title}
                  url={skill.url}
                  percentage={skill.percentage}
                />
              </div>
            ))}
          </ImageDoughnutsPercentWrapper>
          <InView as="div" onChange={() => setCount(count + 1)} />
        </SkillsInner>
      </Container>
      <ScrollDownWrapper>
        <ScrollDown isLast={count >= 2 ? true : false} />
      </ScrollDownWrapper>
    </>
  )
}

export default Skills
