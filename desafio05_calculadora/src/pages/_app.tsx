import { CalculatorContextProvider } from '@/contexts/calculatorContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=''>
      <CalculatorContextProvider>
        <Component {...pageProps} />
      </CalculatorContextProvider>
    </div>
  )
}
