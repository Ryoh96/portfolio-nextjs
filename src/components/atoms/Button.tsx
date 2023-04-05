import styled from 'styled-components'

import { prata } from '@/font/prata'

import { getRandomColor } from '../utils/randomColor'

const ButtonWrapper = styled.button<{
  current: boolean
}>`
  background-image: linear-gradient(to right, #555 50%, #fff 50%);
  background-size: 200% 100%;
  font-size: 20px;
  font-family: $en;
  font-weight: bold;
  background-position-x: 100%;
  transition: 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  border: 5px solid white;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-position-x: 0;
  }

  ${({ theme }) => theme.media.u_xxl`
    transform: scale(0.95);
  `}
  ${({ theme }) => theme.media.u_xl`
    transform: scale(0.9);
  `}
  ${({ theme }) => theme.media.u_lg`
    transform: scale(0.85);
  `}
  ${({ theme }) => theme.media.u_md`
    transform: scale(0.8);
  `}
  ${({ theme }) => theme.media.u_sp`
    transform: scale(0.75);
  `}
  ${({ theme }) => theme.media.u_sm`
    transform: scale(0.7);
  `}
  ${({ theme }) => theme.media.u_xs`
    transform: scale(0.65);
  `}

    position: relative;
  /* &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    transition: all .5s;
    background-color: ${({ current }) =>
      current ? 'transparent' : getRandomColor()};
  } */
`

const ButtonInner = styled.div.attrs({
  className: prata.className,
})`
  font-weight: bold;
  padding: 16px 30px;

  display: inline-block;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #fff 50%, #000 50%);
  background-clip: text;
  padding-inline: 30px;
  -webkit-background-clip: text;
  background-size: inherit;
  color: transparent;
  background-position-x: 100%;
  transition: inherit;

  &:hover {
    background-position-x: 0;
  }
`

type ButtonProps = {
  children: string
  current?: boolean
}

const Button = ({ children, current = false }: ButtonProps) => {
  return (
    <ButtonWrapper current={current}>
      <ButtonInner>{children}</ButtonInner>
    </ButtonWrapper>
  )
}

export default Button
