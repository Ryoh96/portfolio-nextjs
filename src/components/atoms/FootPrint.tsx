import Image from 'next/image'
import styled, { css } from 'styled-components'

type FootPrintProps = {
  type?: 'left' | 'right'
  isActive: boolean
  onClick: () => void
}

const TRANSLATE_LEFT = '-10px'
const TRANSLATE_RIGHT = '10px'
const ROTATE_LEFT = '200deg'
const ROTATE_RIGHT = '-200deg'
const ACTIVE_SCALE = 1.25
const FOOTPRINT_SIZE = 36

const FootPrintWrapper = styled.figure<Required<FootPrintProps>>`
  height: auto;
  width: fit-content;
  transition: all 0.3s;
  cursor: pointer;
  opacity: 0.5;

  ${({ type, isActive }: FootPrintProps) =>
    type === 'left'
      ? css`
          transform: translateX(${TRANSLATE_LEFT}) rotate(${ROTATE_LEFT});
          &:hover {
            transform: scale(${ACTIVE_SCALE}) translateX(${TRANSLATE_LEFT})
              rotate(${ROTATE_LEFT});
            opacity: 1;
          }
          ${isActive &&
          css`
            transform: scale(${ACTIVE_SCALE}) translateX(${TRANSLATE_LEFT})
              rotate(${ROTATE_LEFT});
            opacity: 1;
          `}
        `
      : css`
          transform: translateX(${TRANSLATE_RIGHT}) rotate(${ROTATE_RIGHT});
          &:hover {
            transform: scale(${ACTIVE_SCALE}) translateX(${TRANSLATE_RIGHT})
              rotate(${ROTATE_RIGHT});
            opacity: 1;
          }
          ${isActive &&
          css`
            transform: scale(${ACTIVE_SCALE}) translateX(${TRANSLATE_RIGHT})
              rotate(${ROTATE_RIGHT});
            opacity: 1;
          `}
        `};

  &:hover {
  }

  img {
    position: static;
    object-fit: contain;
  }
`
const FootPrint = ({
  type = 'left',
  isActive = false,
  onClick,
}: FootPrintProps) => {
  return (
    <FootPrintWrapper type={type} isActive={isActive} onClick={onClick}>
      <Image
        alt=""
        src="/footprint.png"
        width={FOOTPRINT_SIZE}
        height={FOOTPRINT_SIZE}
      />
    </FootPrintWrapper>
  )
}

export default FootPrint
