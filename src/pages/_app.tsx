import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import MouseStalker from '@/components/atoms/MouseStalker'
import { IsMenuOpenContextProvider } from '@/contexts/IsMenuOpenContext'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'

import { CurrentSectionContextProvider } from '../contexts/CurrentSectionContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IsMenuOpenContextProvider>
      <CurrentSectionContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MouseStalker />
          <Component {...pageProps} />
        </ThemeProvider>
      </CurrentSectionContextProvider>
    </IsMenuOpenContextProvider>
  )
}
