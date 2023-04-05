import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

// Context
type CurrentSectionContextType = {
  currentSection: number
  isIntersecting: boolean
  setCurrentSection: Dispatch<SetStateAction<number>>
  setIsIntersecting: Dispatch<SetStateAction<boolean>>
}

const init: CurrentSectionContextType = {
  currentSection: 0,
  isIntersecting: false,
  setCurrentSection: () => void 0,
  setIsIntersecting: () => void 0,
}

const CurrentSectionContext = createContext<CurrentSectionContextType>(init)

export const useCurrentSectionContext = () =>
  useContext<CurrentSectionContextType>(CurrentSectionContext)

// Provider
type CurrentSectionContextProviderType = {
  children: ReactNode
}

export const CurrentSectionContextProvider = ({
  children,
}: CurrentSectionContextProviderType) => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        isIntersecting,
        setCurrentSection,
        setIsIntersecting,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  )
}
