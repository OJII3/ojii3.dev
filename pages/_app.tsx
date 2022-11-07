import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/animations.css'
import '../styles/homepage.css'
import type { AppProps } from 'next/app'
import PageView from '../hook/pageview'
import GoogleAnalytics from '../components/GoogleAnallytics'

export default function App({ Component, pageProps }: AppProps) {
  PageView()
  return (
    <>
    <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}
