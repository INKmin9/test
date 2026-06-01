import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 경로를 화면 이름으로 변환 (쿼리 파라미터 포함)
const getScreenName = (pathname: string, search: string): string => {
  const baseNames: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/contact': 'Contact',
    '/search': 'Search',
    '/product': 'Product',
  }

  const baseName = baseNames[pathname] || pathname

  // 쿼리 파라미터가 있으면 주요 파라미터를 이름에 포함
  if (search) {
    const params = new URLSearchParams(search)
    const details: string[] = []

    // 검색 페이지: 카테고리 표시
    if (pathname === '/search') {
      const category = params.get('category')
      const q = params.get('q')
      if (category && category !== 'all') details.push(category)
      if (q) details.push(`q:${q}`)
    }

    // 상품 페이지: 상품 ID와 색상 표시
    if (pathname === '/product') {
      const id = params.get('id')
      const color = params.get('color')
      if (id) details.push(`id:${id}`)
      if (color && color !== 'default') details.push(color)
    }

    if (details.length > 0) {
      return `${baseName} (${details.join(', ')})`
    }
  }

  return baseName
}

// 경로를 컴포넌트 클래스명으로 변환
const getScreenClass = (pathname: string): string => {
  const screenClasses: Record<string, string> = {
    '/': 'HomePage',
    '/about': 'AboutPage',
    '/services': 'ServicesPage',
    '/contact': 'ContactPage',
    '/search': 'SearchPage',
    '/product': 'ProductPage',
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
    const screenName = getScreenName(location.pathname, location.search)
    window.gtag('event', 'screen_view', {
      screen_name: screenName,
      screen_class: getScreenClass(location.pathname),
    })

    console.log('[GA] Tracked:', {
      page_path: pagePath,
      screen_name: screenName,
    })
  }, [location.pathname, location.search])

  return null
}
