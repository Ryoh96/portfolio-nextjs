import type { NextPage } from 'next'
import Link from 'next/link'
import type { RefObject } from 'react'
import { createRef, useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import AroundGear from '@/components/atoms/AroundGear'
import BgGear from '@/components/atoms/BgGear'
import Button from '@/components/atoms/Button'
import ScrollDown from '@/components/atoms/ScrollDown'
import SectionNumber from '@/components/atoms/SectionNumber'
import Container from '@/components/layout/Container'
import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import AroundGears from '@/components/molecules/AroundGears'
import FootPrints from '@/components/molecules/FootPrints'
import Gears from '@/components/molecules/Gears'
import Header from '@/components/organisms/Header'
import Particle from '@/components/organisms/Particle'
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
  gap: 7svh;
`

const Title = styled.h1`
  font-size: clamp(60px, 8vw, 150px);
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
  font-size: clamp(18px, 2vw, 40px);
`

const ScrollDownWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
  z-index: 10;

  ${({ theme }) => theme.media.u_sp`
    font-size: 12px;
    bottom: 20px;
  `}
`
const BottomWrapper = styled.div`
  position: fixed;
  ${({ theme }) => css`
    width: min(${theme.contentWidth}, ${theme.maxContentWidth});
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 80px;

  align-items: flex-end;
`
const FootPrintWrapper = styled.div`
  margin-left: 30px;
`

const SectionNumberWrapper = styled.div``

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

  useLayoutEffect(() => {
    document.getElementById(`${currentSection}`)?.scrollIntoView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Particle />
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
      <Container>
        <BottomWrapper>
          <FootPrintWrapper>
            <FootPrints
              current={currentSection}
              length={sectionLength}
              onClick={handleClick}
            />
          </FootPrintWrapper>
          <SectionNumberWrapper>
            <SectionNumber
              currentSection={currentSection}
              sectionLength={sectionLength}
            />
          </SectionNumberWrapper>
        </BottomWrapper>
      </Container>

      <ScrollDownWrapper>
        <ScrollDown
          isLast={currentSection === sectionLength - 1 ? true : false}
        />
      </ScrollDownWrapper>
      <Gears />
      {/* <AroundGears /> */}
    </>
  )
}

export default Index
