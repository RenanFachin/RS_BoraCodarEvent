import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Rubik } from '@next/font/google'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import { CalculatorContextProvider } from '@/contexts/calculatorContext'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${rubik.variable} font-sans`}>
      <ThemeContextProvider>
        <CalculatorContextProvider>
          <Component {...pageProps} />
        </CalculatorContextProvider>
      </ThemeContextProvider>
    </div>
  )
}
