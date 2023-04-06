import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import MouseStalker from '@/components/atoms/MouseStalker'
import { IsMenuOpenContextProvider } from '@/contexts/IsMenuOpenContext'
import GlobalStyle from '@/styles/GlobalStyle'
import { theme } from '@/theme'
import { GA_GA4_ID, pageview } from '@/utils/gtag'

import { CurrentSectionContextProvider } from '../contexts/CurrentSectionContext'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id${GA_GA4_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_GA4_ID}');
          `,
        }}
      />
      <IsMenuOpenContextProvider>
        <CurrentSectionContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MouseStalker />
            <AnimatePresence mode="wait">
              <motion.div
                key={router.route}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: { duration: 0.3 },
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </ThemeProvider>
        </CurrentSectionContextProvider>
      </IsMenuOpenContextProvider>
    </>
  )
}
