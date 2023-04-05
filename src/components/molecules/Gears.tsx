import { memo, useMemo } from 'react'
import styled from 'styled-components'

import { useCurrentSectionContext } from '@/contexts/CurrentSectionContext'

import BgGear from '../atoms/BgGear'

const GearsWrapper = styled.div`
  position: fixed;
  inset: 0;
  transform-origin: center center;

  ${({ theme }) => theme.media.u_3xl`
    transform: scale(0.9);
  `}
  ${({ theme }) => theme.media.u_xxl`
    transform: scale(0.8);
  `}
  ${({ theme }) => theme.media.u_xl`
    transform: scale(0.7);
  `}
  ${({ theme }) => theme.media.u_lg`
    transform: scale(0.6);
  `}
  ${({ theme }) => theme.media.u_md`
    transform: scale(0.7);
  `}
  ${({ theme }) => theme.media.u_sp`
    transform: scale(0.45);
  `}
  ${({ theme }) => theme.media.u_sm`
    transform: scale(0.4);
  `}
  ${({ theme }) => theme.media.u_xs`
    transform: scale(0.3);
  `}
`

const layers = [1, 1, 1, 2, 3]
const speeds = [48, -72, 96, 40, -10]

const Gears = () => {
  const { isIntersecting, currentSection } = useCurrentSectionContext()
  const dir = useMemo(() => (isIntersecting ? 1 : -1), [isIntersecting])

  return (
    <GearsWrapper>
      {[...Array(5)].map((_, index) => (
        <BgGear
          key={index}
          index={index}
          layer={layers[index]}
          speed={dir * speeds[index]}
          current={currentSection}
        />
      ))}
    </GearsWrapper>
  )
}

export default Gears
