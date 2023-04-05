import { MutableRefObject, useRef } from 'react'
import styled from 'styled-components'

import { useParticle } from '@/hooks/useParticle'

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
`

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  canvas {
    width: 100%;
    height: 100%;
    background-color: tomato;
  }
`

const Particle = () => {
  const container = useRef<HTMLDivElement | null>(null)
  useParticle(container)

  return (
    <ParticleContainer>
      <Canvas ref={container} />
    </ParticleContainer>
  )
}

export default Particle
