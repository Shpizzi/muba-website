import { useEffect, type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

// Pagine a scroll verticale: il footer fa snap (proximity, non blocca la lettura).
export default function Layout({ children, footer = 'dark' }: { children: ReactNode; footer?: 'dark' | 'light' }) {
  useEffect(() => {
    const el = document.documentElement
    el.style.scrollSnapType = 'y proximity'
    return () => { el.style.scrollSnapType = '' }
  }, [])
  // Contenuto boxato a 1600px centrato (navbar e menu restano full screen); sfondi e linee delle sezioni restano a tutta larghezza (.page-box in index.css).
  return <><Header /><div className="page-box mx-auto max-w-[1600px] relative">{children}<Footer light={footer === 'light'} /></div></>
}
