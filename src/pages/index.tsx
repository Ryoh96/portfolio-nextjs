import type { NextPage } from 'next'
import Link from 'next/link'
import type { RefObject } from 'react'
import {
  createRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import styled, { css } from 'styled-components'

import Button from '@/components/atoms/Button'
import ScrollDown from '@/components/atoms/ScrollDown'
import SectionNumber from '@/components/atoms/SectionNumber'
import Container from '@/components/layout/Container'
import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import FootPrints from '@/components/molecules/FootPrints'
import Gears from '@/components/molecules/Gears'
import Header from '@/components/organisms/Header'
import Particle from '@/components/organisms/Particle'
import { getRandomColor } from '@/components/utils/randomColor'
import { topSectionTexts } from '@/constants/top-sections'
import { prata } from '@/font/prata'

import { useCurrentSectionContext } from '../contexts/CurrentSectionContext'
import { useInterSection } from '../hooks/useInterSection'

const Section = styled.section.attrs({
  className: prata.className,
})<{ isCurrent: boolean }>`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  box-sizing: border-box !important;
  display: grid;
  mix-blend-mode: difference;
  opacity: 0;
  transition-delay: 0.5s;

  align-content: center;
  justify-items: center;
  gap: 7svh;
  transition: opacity 1s ease-in, color 0.5s;

  ${({ isCurrent }) =>
    isCurrent
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`

const Title = styled.h1`
  font-size: clamp(60px, 8vw, 150px);
  min-height: 0vw;
  margin-bottom: 2vh;
  transition: 0.6s;
  transform-origin: 'cecnter center';
  line-height: 1;
  text-align: center;
`

const Description = styled.p`
  min-height: 0vw;
  margin-bottom: 5vh;
  transition: 0.8s;
  transform-origin: 'cecnter center';
  font-size: clamp(18px, 2vw, 40px);
`

const ScrollDownWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
  z-index: 10;
  pointer-events: none;

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
  ${({ theme }) => theme.media.u_sp`
    justify-content: center;
  `}
`
const FootPrintWrapper = styled.div`
  margin-left: 30px;
  z-index: 30;
  ${({ theme }) => theme.media.u_sp`
    display: none; 
`}
`

const SectionNumberWrapper = styled.div`
  ${({ theme }) => theme.media.u_sp`
    display: none; 
`}
`

const MailTo = styled.a`
  min-height: 0vw;
  margin-bottom: 5vh;
  transition: 0.8s;
  /* transform: rotate(-30deg); */
  transform-origin: center center;
  font-size: clamp(18px, 2vw, 40px);
  color: inherit;
  display: block;
  text-decoration: underline;
  padding: 0.3em;
  padding-top: 1em;
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-areas: auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    mix-blend-mode: difference;
    width: 0%;
    transition: width 0.5s ease-in-out;
    color: red;
    z-index: 2;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
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
            <Section isCurrent={currentSection === index}>
              <Title>{section.title}</Title>
              {currentSection !== sectionLength - 1 ? (
                <Description>{section.description}</Description>
              ) : (
                <MailTo href="mailto:hello@kurokiryoh.com">
                  {section.description}
                </MailTo>
              )}
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
