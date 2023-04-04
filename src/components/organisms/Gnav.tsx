import Link from 'next/link'
import { useReducer } from 'react'
import styled, { css } from 'styled-components'

import HamburgerButton from '../atoms/HamburgerButton'

const gnavItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Works', href: '/works' },
  { title: 'Contact', href: '/contact' },
]

const GnavList = styled.ul<{ isOpen: boolean }>`
  place-content: center;
  display: grid;
  text-align: center;
  position: fixed;
  inset: 0;
  background-color: #aaa;
  transition: opacity 0.5s ease-out;
  font-size: 32px;
  opacity: 0;
  color: #fff;
  pointer-events: none;
  ${({ isOpen }) =>
    isOpen
      ? css`
          z-index: 99999;
          opacity: 1;
          pointer-events: visible;
        `
      : 'revert'};
`

const GnavItem = styled.li`
  transition: transform 0.2s;
  position: relative;
  color: #000;
`

const Gnav = () => {
  const [isOpen, toggleIsOpen] = useReducer((isOpen) => !isOpen, false)

  return (
    <>
      <GnavList isOpen={isOpen}>
        {gnavItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <GnavItem>{item.title}</GnavItem>
          </Link>
        ))}
      </GnavList>
      <HamburgerButton onClick={toggleIsOpen} isOpen={isOpen} />
      {isOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        `}</style>
      )}
    </>
  )
}

export default Gnav
