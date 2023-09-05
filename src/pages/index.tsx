import type { NextPage } from 'next'
import { useLayoutEffect } from 'react'

import ScrollDown from '@/components/atoms/ScrollDown'
import Container from '@/components/layout/Container'
import SnapContainer from '@/components/layout/SnapContainer'
import SnapItem from '@/components/layout/SnapItem'
import Gears from '@/components/molecules/Gears'
import Header from '@/components/organisms/Header'
import Particle from '@/components/organisms/Particle'
import ScrollDownWrapper from '@/components/templates/common/ScrollDownWrapper'
import { Bottom, GridContainer,GridItem, Section } from '@/components/templates/index'
import Meta from '@/components/utils/Meta'
import { topSectionTexts } from '@/constants/topSectionTexts'
import useSectionRefs from '@/hooks/useSectionRefs'

import { useCurrentSectionContext } from '../contexts/CurrentSectionContext'
import { useInterSection } from '../hooks/useInterSection'

const Index: NextPage = () => {
  const { currentSection, setCurrentSection, setIsIntersecting } =
    useCurrentSectionContext()

  const { snapContainerRef, snapItemRefs, sectionLength } = useSectionRefs()

  useInterSection(
    snapContainerRef,
    snapItemRefs,
    setCurrentSection,
    setIsIntersecting
  )

  useLayoutEffect(() => {
    document.getElementById(`${currentSection}`)?.scrollIntoView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Meta desc="トップページ" />
      <Header />
      <SnapContainer ref={snapContainerRef}>
        {topSectionTexts.map((section, index) => (
          <SnapItem
            key={index}
            id={`${index}`}
            ref={snapItemRefs.current[index]}
          >
            <Section isCurrent={currentSection === index}>
              <GridContainer isTop={currentSection === 0}>
                <GridItem
                  section={section}
                  index={index}
                  current={currentSection}
                  sectionLength={sectionLength}
                />
              </GridContainer>
            </Section>
          </SnapItem>
        ))}
      </SnapContainer>
      <Container>
        <Bottom currentSection={currentSection} sectionLength={sectionLength} />
      </Container>

      <ScrollDownWrapper>
        <ScrollDown
          isLast={currentSection === sectionLength - 1 ? true : false}
        />
      </ScrollDownWrapper>
      <Gears />
      <Particle />
    </>
  )
}

export default Index
