import type { DispatchWithoutAction, ReactNode } from 'react'
import { createContext, useContext, useReducer } from 'react'

// Context
type IsMenuOpenContextType = {
  isMenuOpen: boolean
  toggleIsMenuOpen: DispatchWithoutAction
}

const init: IsMenuOpenContextType = {
  isMenuOpen: false,
  toggleIsMenuOpen: () => void 0,
}

const IsMenuOpenContext = createContext<IsMenuOpenContextType>(init)

export const useIsMenuOpenContext = () =>
  useContext<IsMenuOpenContextType>(IsMenuOpenContext)

// Provider
type IsMenuOpenContextProviderType = {
  children: ReactNode
}

export const IsMenuOpenContextProvider = ({
  children,
}: IsMenuOpenContextProviderType) => {
  const [isMenuOpen, toggleIsMenuOpen] = useReducer((isOpen) => !isOpen, false)

  return (
    <IsMenuOpenContext.Provider
      value={{
        isMenuOpen,
        toggleIsMenuOpen,
      }}
    >
      {children}
    </IsMenuOpenContext.Provider>
  )
}
