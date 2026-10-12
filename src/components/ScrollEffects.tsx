import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Ad ogni cambio pagina: torna in cima (o all'ancora) e fa comparire le sezioni on scroll.
export default function ScrollEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => { history.scrollRestoration = 'manual' }, [])
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('main > *, footer').forEach(el => {
        if (el.closest('[data-track]')) return
        el.classList.add('reveal'); io.observe(el)
      })
    })
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [pathname, hash])
  return null
}
