import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/fadeIn.css'
import '../styles/homepage.css'
import type { AppProps } from 'next/app'
import usePageView from '../hooks/pageview'
import GoogleAnalytics from '../components/GoogleAnallytics'

export default function App({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}
