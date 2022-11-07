export const GA_ID = process.env.GOOGLE_ANALYTICS_ID

declare global {
  interface Window {
    gtag: any
  }
}

export const pageview = (path: string) => {
  window.gtag = window.gtag || {}
  window.gtag('config', GA_ID, { page_path: path })
}

export const event = ({ action, category, label, value = '' }: any) => {
  if (!GA_ID) return
  window.gtag = window.gtag || {}
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value
  })
}