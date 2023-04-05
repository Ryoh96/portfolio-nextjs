import Link from 'next/link'
import { useEffect, useReducer, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { useIsMenuOpenContext } from '@/contexts/IsMenuOpenContext'
import { prata } from '@/font/prata'

import HamburgerButton from '../atoms/HamburgerButton'

const gnavItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Works', href: '/works' },
  { title: 'Contact', href: '/contact' },
]

const GnavList = styled.ul.attrs({
  className: prata.className,
})<{ isMenuOpen: boolean }>`
  place-content: center;
  display: grid;
  gap: 0.9em;
  text-align: center;
  position: fixed;
  inset: 0;
  background-color: #aaa;
  transition: opacity 0.5s ease-out;
  font-size: 42px;
  opacity: 0;
  color: #fff;
  pointer-events: none;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          z-index: 99999;
          opacity: 1;
          pointer-events: visible;
        `
      : 'revert'};
`

const GnavItem = styled.li<{ isShow: boolean }>`
  transition: transform 0.2s;
  position: relative;
  color: #000;
  text-align: start;

  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-areas: auto;

  > * {
    grid-area: 1/ -1;
  }

  > span {
    width: 100%;
    display: block;
    justify-self: start;
    /* opacity: 0; */
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out, opacity 1s ease-out;
    transition-delay: 0.5s;

    ${({ isShow }) =>
      isShow &&
      css`
        transform: translateX(0);
        opacity: 1;
      `};
    &::before {
      content: '';
      display: block;
      background-color: #000;
      width: 0;
      height: 15%;
      bottom: 0;
      position: absolute;
      transition: 0.2s ease-in-out;
    }
    &:hover {
      opacity: 0.6;
      &::before {
        width: 100%;
      }
      // text-decoration: underline;
    }
  }
`

const BlackBox = styled.div<{ isShow: boolean }>`
  background-color: #000;
  width: 100%;
  height: 100%;
  transform: translate(101%);
  animation-timing-function: cubic-bezier(0.94, 0, 0.15, 1);
  ${({ isShow }) => isShow && `animation: fade 1s forwards`};

  @keyframes fade {
    0% {
      width: 100%;
      transform: translate(101%);
    }
    50% {
      transform: translate(0);
    }

    100% {
      width: 100%;
      transform: translate(-101%);
    }
  }
`

const Gnav = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useIsMenuOpenContext()
  const [isShowList, setIsShowList] = useState<boolean[]>([])
  let timerIds = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isMenuOpen) {
        setIsShowList((prevState) => {
          const newState = [...prevState]
          newState.push(true)
          return newState
        })
      } else {
        setIsShowList([])
      }
    }, 300)
    return () => clearInterval(intervalId)
  }, [isMenuOpen])

  return (
    <>
      <GnavList isMenuOpen={isMenuOpen}>
        {gnavItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <GnavItem isShow={isShowList[index]}>
              <span>{item.title}</span>
              <BlackBox isShow={isShowList[index]} />
            </GnavItem>
          </Link>
        ))}
      </GnavList>
      <HamburgerButton onClick={toggleIsMenuOpen} isOpen={isMenuOpen} />
      {isMenuOpen && (
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
