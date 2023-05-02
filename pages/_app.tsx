import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/index.css'
import ColorContextProvider from '@/context/ColorContext'
import { ErrorBoundary } from 'react-error-boundary'

import { useErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }) {
  const { resetBoundary } = useErrorBoundary()

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  )
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<ErrorFallback error={undefined} />}>
      <ColorContextProvider>
        <Component {...pageProps} />
      </ColorContextProvider>
    </ErrorBoundary>
  )
}
