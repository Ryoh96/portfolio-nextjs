import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import MouseStalker from '@/components/atoms/MouseStalker'
import { IsMenuOpenContextProvider } from '@/contexts/IsMenuOpenContext'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'

import { CurrentSectionContextProvider } from '../contexts/CurrentSectionContext'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <IsMenuOpenContextProvider>
      <CurrentSectionContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MouseStalker />
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </CurrentSectionContextProvider>
    </IsMenuOpenContextProvider>
  )
}
