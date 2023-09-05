import { useCallback } from 'react'
import styled, { css } from 'styled-components'

import SectionNumber from '@/components/atoms/SectionNumber'
import FootPrints from '@/components/molecules/FootPrints'
import {FootPrintWrapper} from '@/components/templates/index/FootPrintWrapper'
import {SectionNumberWrapper} from '@/components/templates/index/SectionNumberWrapper'

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

type Props = {
  currentSection: number
  sectionLength: number
}

export const Bottom = ({ currentSection, sectionLength }: Props) => {
  const handleClick = useCallback((index: number) => {
    document.getElementById(`${index}`)?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [])

  return (
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
  )
}

