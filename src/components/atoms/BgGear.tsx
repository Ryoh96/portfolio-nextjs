import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import { hueRotation } from '@/animations/hueRotation'
import { SATURATE, SEPIA } from '@/constants/animations'

const Gear = styled.div<{
  index: number
  layer: number
}>`
  transition: transform 0.5s;
  position: absolute;
  background-repeat: no-repeat;

  ${({ index }) =>
    index === 0
      ? css`
          background-image: url(/gear10.svg);
          width: 600px;
          height: 600px;
          left: calc(50% - 560px);
          top: calc(50% - 250px);
        `
      : index === 1
      ? css`
          background-image: url(gear02.svg);
          width: 400px;
          height: 400px;
          position: fixed;
          left: calc(50% - 70px);
          top: calc(50% - 433px);
        `
      : index === 2
      ? css`
          background-image: url(/gear22.svg);
          width: 300px;
          height: 300px;
          left: calc(50% + 221px);
          top: calc(50% - 152px);
        `
      : index === 3
      ? css`
          background-image: url(/gear01.svg);
          width: 500px;
          height: 500px;
          left: calc(50% - 100px);
          top: calc(50% - 190px);
        `
      : index === 4
      ? css`
          background-image: url(/gear24.svg);
          width: 550px;
          height: 550px;
          left: calc(50% - 480px);
          top: calc(50% - 440px);
        `
      : null}

  ${({ layer }) =>
    layer === 1
      ? css`
          z-index: -100;
        `
      : layer === 2
      ? css`
          z-index: -200;
          opacity: 0.6;
        `
      : layer === 3
      ? css`
          z-index: -300;
          opacity: 0.5;
        `
      : null} 
    // transform: translateZ(0);
  will-change: filter;
  filter: sepia(${SEPIA}) saturate(${SATURATE}) brightness(0.24);
  animation: ${hueRotation()} 30s infinite;
`

type BgGearProps = {
  index: number
  layer: number
  speed: number
  current: number
}

const BgGear = ({ index, layer, speed, current }: BgGearProps) => {
  const gearRef = useRef<HTMLDivElement | null>(null)
  const rot = useRef(0)
  const coef = useRef(0.8)
  useEffect(() => {
    gsap.set(gearRef.current, {
      rotation: 0,
    })
  }, [])
  useLayoutEffect(() => {
    rot.current += speed * coef.current
    gsap.to(gearRef.current, {
      rotation: `${rot.current}`,
      ease: 'none',
      duration: 0.1,
    })
  }, [current, speed])

  return <Gear ref={gearRef} index={index} layer={layer} />
}

export default BgGear
