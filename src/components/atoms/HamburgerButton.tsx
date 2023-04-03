import styled, { css } from 'styled-components'

const HamburgerButtonWrapper = styled.button`
  all: unset;
  outline: revert;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .open & {
    transition: none;
    &:hover {
      transform: none;
    }
  }

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
`

const BackgroundButton = styled.div<{
  type: 'fw' | 'bg'
}>`
  z-index: 8000;
  background-image: url(/gear-menu.svg);
  background-color: rgba(0, 0, 0.4);
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;

  ${({ type }) =>
    type === 'fw'
      ? css`
          transition: 0.8s ease-out;
          .open & {
            transform: rotate(100deg) scale(90);
            opacity: 0;
          }
        `
      : css`
          position: absolute;
          transform: rotate(0) scale(0);
          transition: 0.8s ease-out;
          .open & {
            transform: rotate(200deg) scale(90);
            opacity: 0;
          }
        `}
`

const ClickableArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20000;
  background-color: transparent;
  cursor: pointer;
`

const buttonBarStyle = css`
  width: 40px;
  height: 3px;
  background-color: #000;
  z-index: 10000;
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
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    ${buttonBarStyle}
    transition: 0.3s ease;
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

const HamburgerButton = ({
  onClick,
  isOpen
}: HamburgerButtonProps) => {
  return (
    <HamburgerButtonWrapper onClick={onClick}>
      <ClickableArea />
      <BackgroundButton type="fw" />
      <BackgroundButton type="bg" />
      <ButtonBarWrapper isOpen={isOpen}>
        <ButtonBar isOpen={isOpen} />
      </ButtonBarWrapper>
    </HamburgerButtonWrapper>
  )
}

export default HamburgerButton
