import styled from 'styled-components'
import css from 'styled-jsx/css'

import AroundGear from '../atoms/AroundGear'

const GearAnimationContainer = styled.div<{ z: number }>`
  position: fixed;
  display: grid;
  inset: 0;
  grid-template-areas: auto;
  pointer-events: none;
  width: 100%;
  opacity: 0.2;
  transform-origin: center center;
  z-index: ${({ z }) => z};
  background-color: black;

  > * {
    grid-area: 1/ -1;
  }
`

const GearAnimationInner = styled.div`
  position: relative;
  > * {
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
  }
`

const LeftTopWrapper = styled.div`
  transform-origin: left top;
`
const RightTopWrapper = styled.div`
  transform-origin: right top;
`
const LeftBottomWrapper = styled.div`
  height: 100%;
  transform-origin: left bottom;
`
const RightBottomWrapper = styled.div`
  transform-origin: right bottom;
`

const AroundGears = ({ z }: { z: number }) => {
  return (
    <GearAnimationContainer z={z}>
      <GearAnimationInner>
        {/* 左上 */}
        <LeftTopWrapper>
          <AroundGear
            src="/gear25.svg"
            width={300}
            height={300}
            top={220}
            left={-100}
            opacity={0.6}
            direction="reverse"
          />
          <AroundGear
            src="/gear23.svg"
            width={400}
            height={400}
            top={-250}
            left={240}
            opacity={0.7}
            direction="reverse"
          />
          <AroundGear
            src="/gear28.svg"
            width={600}
            height={600}
            top={-250}
            left={-250}
            opacity={0.8}
            direction="default"
          />
        </LeftTopWrapper>
        {/* 右上 */}
        <RightTopWrapper>
          <AroundGear
            src="/gear27.svg"
            width={700}
            height={700}
            top={-400}
            right={-250}
            opacity={0.6}
            direction="reverse"
          />
          <AroundGear
            src="/gear27.svg"
            width={460}
            height={600}
            top={-350}
            right={-125}
            opacity={0.6}
            direction="default"
          />
        </RightTopWrapper>
        {/* 左下 */}
        <LeftBottomWrapper>
          <AroundGear
            src="/gear26.svg"
            width={800}
            height={800}
            bottom={-400}
            left={-250}
            opacity={0.6}
            direction="reverse"
          />
        </LeftBottomWrapper>
        {/* 右下 */}
        <RightBottomWrapper>
          <AroundGear
            src="/gear03.svg"
            width={300}
            height={300}
            bottom={300}
            right={-150}
            opacity={0.6}
            direction="reverse"
          />
          <AroundGear
            src="/gear30.svg"
            width={300}
            height={300}
            bottom={-120}
            right={450}
            opacity={0.6}
            direction="default"
          />
          <AroundGear
            src="/gear24.svg"
            width={500}
            height={500}
            bottom={-200}
            right={100}
            opacity={0.8}
            direction="reverse"
          />
          <AroundGear
            src="/gear29.svg"
            width={600}
            height={600}
            bottom={-220}
            right={-250}
            opacity={0.8}
            direction="default"
          />
        </RightBottomWrapper>
      </GearAnimationInner>
    </GearAnimationContainer>
  )
}

export default AroundGears
