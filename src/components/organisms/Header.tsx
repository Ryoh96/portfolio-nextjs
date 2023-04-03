import { useState } from 'react'
import styled from 'styled-components'

import HamburgerButton from '../atoms/HamburgerButton'
import Logo from '../atoms/Logo'
import Container from '../layout/Container'

const HeaderWrapper = styled.header`
  margin-top: 30px;
  position: fixed;
  width: 100%;
  z-index: 10;
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type HeaderProps = {
  type?: "back" | "normal"
}

const Header = ({
  type = "normal"
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo type={type} />
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
