import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

const sepia = '120%'
const saturate = '800%'

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
          background-image: url(/gear06.svg);
          width: 600px;
          height: 600px;
          left: -100px;
          top: -100px;
        `
      // : index === 1
      // ? css`
      //     background-image: url(gear02.svg);
      //     width: 400px;
      //     height: 400px;
      //     position: fixed;
      //     left: calc(50% - 70px);
      //     top: calc(50% - 433px);
      //   `
      // : index === 2
      // ? css`
      //     background-image: url(/gear03.svg);
      //     width: 300px;
      //     height: 300px;
      //     left: calc(50% + 221px);
      //     top: calc(50% - 152px);
      //   `
      // : index === 3
      // ? css`
      //     background-image: url(/gear04.png);
      //     width: 500px;
      //     height: 500px;
      //     left: calc(50% - 100px);
      //     top: calc(50% - 190px);
      //   `
      // : index === 4
      // ? css`
      //     background-image: url(/gear05.svg);
      //     width: 550px;
      //     height: 550px;
      //     left: calc(50% - 480px);
      //     top: calc(50% - 440px);
      //   `
      : null}

  ${({ layer }) =>
    layer === 1
      ? css`
          z-index: -1;
        `
      : layer === 2
      ? css`
          z-index: -2;
          opacity: 0.6;
        `
      : layer === 3
      ? css`
          z-index: -3;
          opacity: 0.5;
        `
      : null} 
    // transform: translateZ(0);
  will-change: filter;
  filter: sepia(${sepia}) saturate(${saturate}) brightness(0.24);

  animation: hue-rotate 30s infinite;
  @keyframes hue-rotate {
    0% {
      filter: sepia(${sepia}) saturate(${saturate}) brightness(0.24)
        hue-rotate(0deg);
    }

    50% {
      filter: sepia(${sepia}) saturate(${saturate}) brightness(0.24)
        hue-rotate(180deg);
    }

    100% {
      filter: sepia(${sepia}) saturate(${saturate}) brightness(0.24)
        hue-rotate(360deg);
    }
  }
`

type BgGearProps = {
  index: number
  layer: number
  speed: number
  current: number
}

const AroundGear = ({ index, layer, speed, current }: BgGearProps) => {
  console.log(index, speed)
  const gearRef = useRef<HTMLDivElement | null>(null)
  const rot = useRef(0)
  const coef = useRef(0.8)
  useEffect(() => {
    gsap.set(gearRef.current, {
      rotation: 0,
    })
  }, [])
  useLayoutEffect(() => {
    console.log(speed, rot.current)
    rot.current += speed * coef.current
    gsap.to(gearRef.current, {
      rotation: `${rot.current}`,
      ease: 'none',
      duration: 0.1,
    })
  }, [current, speed])

  return <Gear ref={gearRef} index={index} layer={layer} />
}

export default AroundGear
