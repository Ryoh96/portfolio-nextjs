import Image from 'next/image'
import styled, { css } from 'styled-components'

import { hueRotation } from '@/animations/hueRotation'
import { rotateAnimation } from '@/animations/rotateAnimation'
import { SATURATE, SEPIA } from '@/constants/animations'

const sepia = '120%'
const saturate = '800%'

const StyledImage = styled(Image)<{
  direction: 'default' | 'reverse'
  top?: number
  left?: number
  bottom?: number
  right?: number
  opacity: number
}>`
  opacity: ${({ opacity }) => opacity};

  animation: ${rotateAnimation} 20s infinite linear
    ${({ direction }) => (direction === 'default' ? 'normal' : 'reverse')};

  z-index: -1;
  position: absolute;
  ${({ top, right, left, bottom }) => css`
    ${top && 'top:' + top + 'px'};
    ${left && 'left:' + left + 'px'};
    ${right && 'right:' + right + 'px'};
    ${bottom && 'bottom:' + bottom + 'px'};
  `}
`

const StyledImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  position: fixed;

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

type Props = {
  src: string
  top?: number
  left?: number
  right?: number
  bottom?: number
  width: number
  height: number
  direction: 'default' | 'reverse'
  opacity: number
}

const AroundGear = (props: Props) => {
  return <StyledImage alt="" {...props} loading="eager" />
}

export default AroundGear
