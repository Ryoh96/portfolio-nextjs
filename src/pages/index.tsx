import type { NextPage } from 'next'
import Link from 'next/link'
import type { RefObject } from 'react'
import { createRef, useCallback, useMemo, useRef } from 'react'
import styled from 'styled-components'

import Button from '@/components/atoms/Button'
import ScrollDown from '@/components/atoms/ScrollDown'
import SectionNumber from '@/components/atoms/SectionNumber'
import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import FootPrints from '@/components/molecules/FootPrints'
import Header from '@/components/organisms/Header'
import { topSectionTexts } from '@/constants/top-sections'
import { prata } from '@/font/prata'

import { useCurrentSectionContext } from './contexts/CurrentSectionContext'
import { useInterSection } from './hooks/useInterSection'

const Section = styled.section.attrs({
  className: prata.className,
})`
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

const SecSectionNumberWrapper = styled.div`
  position: fixed;
  right: 3%;
  bottom: 50px;
`

const FootPrintsWrapper = styled.div`
  position: fixed;
  left: 4%;
  bottom: 50px;
  z-index: 2;
`
const ScrollDownWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;

  ${({ theme }) => theme.media.u_sp`
    font-size: 12px;
    bottom: 20px;
  `}
`

const Index: NextPage = () => {
  const { currentSection, setCurrentSection, setIsIntersecting } =
    useCurrentSectionContext()

  const snapContainerRef = useRef<HTMLDivElement | null>(null)
  const snapItemRefs = useRef<RefObject<HTMLDivElement>[]>([])

  const sectionLength = useMemo(() => topSectionTexts.length, [])

  ;[...Array(sectionLength)].forEach((_, index) => {
    snapItemRefs.current[index] = createRef<HTMLDivElement>()
  })

  useInterSection(
    snapContainerRef,
    snapItemRefs,
    setCurrentSection,
    setIsIntersecting
  )

  const handleClick = useCallback((index: number) => {
    document.getElementById(`${index}`)?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      <Header />
      <SnapContainer ref={snapContainerRef}>
        {topSectionTexts.map((section, index) => (
          <SnapItem
            key={index}
            id={`${index}`}
            ref={snapItemRefs.current[index]}
          >
            <Section>
              <Title>{section.title}</Title>
              <Description>{section.description}</Description>
              {section.link && (
                <Link href={section.link}>
                  <Button>Show more...</Button>
                </Link>
              )}
            </Section>
          </SnapItem>
        ))}
      </SnapContainer>
      <SecSectionNumberWrapper>
        <SectionNumber
          currentSection={currentSection}
          sectionLength={sectionLength}
        />
      </SecSectionNumberWrapper>
      <FootPrintsWrapper>
        <FootPrints
          current={currentSection}
          length={sectionLength}
          onClick={handleClick}
        />
      </FootPrintsWrapper>
      <ScrollDownWrapper>
        <ScrollDown isLast={currentSection === sectionLength - 1 ? true : false} />
      </ScrollDownWrapper>
    </>
  )
}

export default Index
