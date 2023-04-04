import { useReducer } from "react"
import styled from "styled-components"

const GnavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  gap: 40px;

  ${({theme}) => theme.media.u_sp`
    
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    display: grid;
    place-content: center;
    text-align: center;
    position: fixed;
    inset: 0 -100% 0 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.8);
    transition: transform 0.4s;
    font-size: 32px;

    ${({ isOpen }) => (isOpen ? "transform: translateX(-100%)" : "revert")};
  }
`

const Gnav = () => {
  const [isOpen, toggleIsOpen] = useReducer(isOpen => !isOpen, false)

  return (
    <>
      <GnavList isOpen={isOpen} >

      </GnavList>
    </>
  )
}