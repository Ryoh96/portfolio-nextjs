import Link from 'next/link'
import { useEffect, useReducer, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import FootPrintsAnimation from '@/components/organisms/FootPrintAnimation'
import { useCurrentSectionContext } from '@/contexts/CurrentSectionContext'
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
    opacity: 0;
    transition: opacity 0.3s ease-in;
    transition-delay: 0.5s;

    ${({ isShow }) =>
      isShow &&
      css`
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

const FootPrintAnimationContainer = styled.div`
  position: fixed;
  display: grid;
  inset: 0;
  z-index: 1000000;
  grid-template-areas: auto;
  mix-blend-mode: soft-light;
  pointer-events: none;

  > * {
    grid-area: 1/ -1;
  }
`

const FootPrintAnimationInner = styled.div<{
  dir?: 'rev'
}>`
  ${({ dir }) =>
    dir === 'rev'
      ? css`
          justify-self: end;
          margin-right: 20%;
          margin-bottom: 3%;
          /* bottom: 0; */
          /* transform: translateY(100%) rotate(80deg); */
          transform: rotate(180deg);
        `
      : css`
          margin-left: 20%;
          margin-top: ;
        `}
`

const Gnav = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useIsMenuOpenContext()
  const [isShowList, setIsShowList] = useState<boolean[]>([])
  let timerIds = useRef<NodeJS.Timeout[]>([])
  const { setCurrentSection } = useCurrentSectionContext()

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

  const handleClick = (index: number) => {
    setCurrentSection(index)
    toggleIsMenuOpen()
  }

  return (
    <>
      <GnavList isMenuOpen={isMenuOpen}>
        {gnavItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            onClick={() => handleClick(index)}
          >
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
      {isMenuOpen && (
        <FootPrintAnimationContainer>
          <FootPrintAnimationInner>
            <FootPrintsAnimation />
          </FootPrintAnimationInner>
          <FootPrintAnimationInner dir="rev">
            <FootPrintsAnimation />
          </FootPrintAnimationInner>
        </FootPrintAnimationContainer>
      )}
    </>
  )
}

export default Gnav
