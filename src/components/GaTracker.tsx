import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 경로를 화면 이름으로 변환
const getScreenName = (pathname: string): string => {
  const screenNames: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/contact': 'Contact',
  }
  return screenNames[pathname] || pathname
}

// 경로를 컴포넌트 클래스명으로 변환
const getScreenClass = (pathname: string): string => {
  const screenClasses: Record<string, string> = {
    '/': 'HomePage',
    '/about': 'AboutPage',
    '/services': 'ServicesPage',
    '/contact': 'ContactPage',
  }
  return screenClasses[pathname] || 'UnknownPage'
}

export default function GaTracker() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') {
      console.warn('[GA] gtag not loaded')
      return
    }

    const pagePath = location.pathname + location.search

    // page_view 이벤트 전송 (쿼리 파라미터 포함)
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    })

    // screen_view 이벤트 전송 (화면 이름 기반)
    window.gtag('event', 'screen_view', {
      screen_name: getScreenName(location.pathname),
      screen_class: getScreenClass(location.pathname),
    })

    console.log('[GA] Tracked:', {
      page_path: pagePath,
      screen_name: getScreenName(location.pathname),
    })
  }, [location.pathname, location.search])

  return null
}
