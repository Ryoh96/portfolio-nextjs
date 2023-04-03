import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import MouseStalker from '@/components/atoms/MouseStalker'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'

import { CurrentSectionContextProvider } from './contexts/CurrentSectionContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentSectionContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MouseStalker />
        <Component {...pageProps} />
      </ThemeProvider>
    </CurrentSectionContextProvider>
  )
}
