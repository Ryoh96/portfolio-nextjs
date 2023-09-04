import { keyframes } from 'styled-components'

import { SATURATE, SEPIA } from '@/constants/animations'

export const hueRotation = (startDeg = 0, brightness = 0.24) => keyframes`
    0% {
      filter: sepia(${SEPIA}) saturate(${SATURATE}) brightness(${brightness})
        hue-rotate(${startDeg}deg);
    }

    50% {
      filter: sepia(${SEPIA}) saturate(${SATURATE}) brightness(${brightness})
        hue-rotate(${startDeg + 180}deg);
    }

    100% {
      filter: sepia(${SEPIA}) saturate(${SATURATE}) brightness(${brightness})
        hue-rotate(${startDeg + 360}deg);
    }
`
