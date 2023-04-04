import styled from 'styled-components'

import { prata } from '@/font/prata'

const ButtonWrapper = styled.button`
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
`

const ButtonInner = styled.div.attrs({
  className: prata.className,
})`
  font-weight: bold;
  padding: 20px 30px;

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
}

const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <ButtonInner>{children}</ButtonInner>
    </ButtonWrapper>
  )
}

export default Button
