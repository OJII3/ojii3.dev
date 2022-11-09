import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fadeIn.css'
import '../styles/homepage.css'
import type { AppProps } from 'next/app'
import { GoogleTagManager } from '../google-analytics/google-tag-manager'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}
