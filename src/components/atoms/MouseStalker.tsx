import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const width = 76

const MyCursor = styled.div`
  pointer-events: none;
  width: ${width}px;
  height: ${width}px;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  /* background-color: #fff; */
  mix-blend-mode: difference;
  z-index: 100000;
  filter: blur(2px);
  transition: 0.2s transform;
  transform: translateZ(0);
  &.hover {
    transform: scale(1.5);
  }

  animation: rotate 3s linear infinite;

  background-image: url("/gear-menu.svg");

  ${({ theme }) => theme.media.u_pc`
    display: none;
  `}

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(359deg);
    }
  }
`

const delay = 30

const MouseStalker = () => {
  const MyCursorRef = useRef<HTMLDivElement | null>(null)
  let mouseX = useRef(0)
  let mouseY = useRef(0)
  let posX = useRef(0)
  let posY = useRef(0)

  useEffect(() => {
    gsap.to({}, 0.01, {
      repeat: -1,
      onRepeat() {
        posX.current += (mouseX.current - posX.current) / delay
        posY.current += (mouseY.current - posY.current) / delay
        gsap.set(MyCursorRef.current, {
          css: {
            left: posX.current - width / 2,
            top: posY.current - width / 2,
          },
        })
      },
    })
  }, [])

  useEffect(() => {
    document.body.addEventListener('mousemove', (e: MouseEvent) => {
      mouseX.current = e.pageX
      mouseY.current = e.pageY
    })
  }, [])
  return <MyCursor ref={MyCursorRef} />
}

export default MouseStalker
