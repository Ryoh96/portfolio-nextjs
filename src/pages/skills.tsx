import type { NextPage } from 'next'
import Link from 'next/link'
import type { RefObject } from 'react'
import { createRef, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import _Description from '@/components/atoms/Description'
import _Title from '@/components/atoms/Title'
import Container from '@/components/layout/Container'
import Header from '@/components/organisms/Header'
import ImageDoughnutsPercent from '@/components/organisms/ImageDoughnutPercent'
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
  position: relative;
  z-index: 2;
  margin-inline: auto;
`
const ImageDoughnutsPercentWrapper = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10vw;
`

const Skills: NextPage = () => {
  const [appear, setAppear] = useState(false)
  const chartRefs = useRef<RefObject<HTMLDivElement>[]>([])
  const [isAppear, setIsAppear] = useState<boolean[]>([])
  const isEnd = useRef(false)
  const skillLength = useMemo(() => skills.length, [])

  ;[...Array(skillLength)].forEach((_, index) => {
    chartRefs.current[index] = createRef<HTMLDivElement>()
  })

  console.log(isAppear)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  // useInterSectionSkills(chartRefs)
  return (
    <>
      <Header type="back"/>
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
        </SkillsInner>
      </Container>
      <Link href="/">back</Link>
    </>
  )
}

export default Skills
