import { useEffect } from "react"
import { useRouter } from "next/router"

import * as gtag from '../lib/gtag'

const usePageView = () => {
  const router = useRouter()

  useEffect(() => {
    if (!gtag.GA_ID) return
    const routeChangeHandler = (path: string, { shallow }: any) => {
      if (!shallow) {
        gtag.pageview(path)
      }
    }

    router.events.on('routeChangeComplete', routeChangeHandler)
    return () => { router.events.off('routeChangeComplete', routeChangeHandler) }
  }, [router.events])
}

export default usePageView