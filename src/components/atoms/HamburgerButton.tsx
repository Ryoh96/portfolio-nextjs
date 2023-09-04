//@ts-nocheck
import styled, { css } from 'styled-components'

const HamburgerButtonWrapper = styled.button<{
  isOpen: boolean
}>`
  background-color: transparent;

  all: unset;
  outline: revert;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.2) rotate(360deg);
    z-index: 10000;

    ${({ isOpen }) => isOpen && 'transform: revert;'}
  }

  width: 80px;
  height: 80px;
  ${({ theme }) => theme.media.u_xl`
    width: 70px;
    height: 70px;
  `}
  ${({ theme }) => theme.media.u_lg`
    width: 66px;
    height: 66px;
  `}
  ${({ theme }) => theme.media.u_sp`
    width: 58px;
    height: 58px;
  `}
  ${({ theme }) => theme.media.u_sm`
    width: 50px;
    height: 50px;
  `}
`

const BackgroundButton = styled.div<{
  type: 'fw' | 'bg'
  isOpen: boolean
}>`
  z-index: 9000;
  background-image: url(/gear-menu.svg);
  /* background-color: rgba(0, 0, 0.4); */
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;

  ${({ type }) =>
    type === 'fw'
      ? css`
          transition: transform 0s ease-out;
          ${({ isOpen }) =>
            isOpen &&
            css`
              transform: rotate(100deg) scale(90);
              opacity: 0;
            `}
        `
      : css`
          /* position: absolute; */
          transform: rotate(0) scale(0);
          transition: transform 0.8s ease-out;
          z-index: 100;
          ${({ isOpen }) =>
            isOpen &&
            css`
              transform: rotate(200deg) scale(90);
              opacity: 1;
            `}
        `}
`

const ClickableArea = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999999;
  background-color: transparent;
  cursor: pointer;
  width: 80px;
  height: 80px;
  ${({ theme }) => theme.media.u_xl`
    width: 70px;
    height: 70px;
  `}
  ${({ theme }) => theme.media.u_lg`
    width: 66px;
    height: 66px;
  `}
  ${({ theme }) => theme.media.u_sp`
    width: 58px;
    height: 58px;
  `}
  ${({ theme }) => theme.media.u_sm`
    width: 50px;
    height: 50px;
  `}
`

const buttonBarStyle = css`
  cursor: pointer;

  width: 40px;
  height: 3px;
  background-color: #000;
  z-index: 20000;
  display: block;
  grid-area: 1 / -1;
  ${({ theme }) => theme.media.u_xl`
    width: 36px;
  `}

  ${({ theme }) => theme.media.u_lg`
    width: 34px;
  `}

  ${({ theme }) => theme.media.u_sp`
    width: 30px;
  `}
`

const ButtonBarWrapper = styled.div<{ isOpen: boolean }>`
  cursor: pointer;

  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    ${buttonBarStyle}
    transition: 0.3s ease;
    ${({ isOpen }) =>
      isOpen &&
      css`
        transition: none;
        z-index: 2000000;
      `}
  }

  &::before {
    ${({ isOpen }) =>
      isOpen ? 'transform: rotate(-135deg)' : 'transform: translateY(-10px)'}
  }

  &::after {
    ${({ isOpen }) =>
      isOpen ? 'transform: rotate(135deg)' : 'transform: translateY(10px)'}
  }
`

const HamburgerButtonContainer = styled.div<{ isOpen: boolean }>`
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.2) rotate(360deg);
    ${({ isOpen }) => isOpen && 'transform: revert;'}
  }

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  > * {
    grid-area: 1 / -1;
  }
`

const ButtonBar = styled.span<{ isOpen: boolean }>`
  ${buttonBarStyle}

  transition: 0.5s;
  position: relative;

  ${({ isOpen }) => isOpen && `background-color: transparent`};
`

type HamburgerButtonProps = {
  onClick: () => void
  isOpen: boolean
}

const HamburgerButton = ({ onClick, isOpen }: HamburgerButtonProps) => {
  return (
    <HamburgerButtonContainer isOpen={isOpen}>
      <HamburgerButtonWrapper isOpen={isOpen}>
        <BackgroundButton isOpen={isOpen} type="fw" />
        <BackgroundButton isOpen={isOpen} type="bg" />
        <ButtonBarWrapper isOpen={isOpen}>
          <ButtonBar isOpen={isOpen} />
        </ButtonBarWrapper>
      </HamburgerButtonWrapper>
      <ClickableArea onClick={onClick} />
    </HamburgerButtonContainer>
  )
}

export default HamburgerButton
