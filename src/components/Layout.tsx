import { useEffect, useRef, type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

// Navbar sticky: sparisce scendendo, ricompare appena si risale.
function StickyHeader() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let prev = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - prev) < 6) return
      ref.current?.classList.toggle('nav-hide', y > prev && y > 100)
      prev = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div ref={ref} className="sticky top-0 z-30 transition-transform duration-300"><Header /></div>
}

// Contenuto boxato a 1600px centrato (navbar e menu restano full screen); sfondi e linee delle sezioni restano a tutta larghezza (.page-box in index.css).
export default function Layout({ children, footer = 'dark' }: { children: ReactNode; footer?: 'dark' | 'light' }) {
  return <><StickyHeader /><div className="page-box mx-auto max-w-[1600px] relative">{children}<Footer light={footer === 'light'} /></div></>
}
