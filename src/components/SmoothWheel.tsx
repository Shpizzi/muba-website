import { useEffect } from 'react'

// Rotella del mouse "a scatti" -> scroll interpolato, simile al trackpad Mac.
// Il trackpad (delta piccoli/frazionari) e le liste scrollabili interne restano nativi.
export default function SmoothWheel() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let target = window.scrollY, cur = target, raf = 0
    const max = () => document.documentElement.scrollHeight - innerHeight
    const tick = () => {
      cur += (target - cur) * 0.12
      if (Math.abs(target - cur) < 0.5) { cur = target; raf = 0 } else raf = requestAnimationFrame(tick)
      window.scrollTo({ top: cur, behavior: 'instant' })
    }
    const inner = (el: EventTarget | null, dy: number) => {
      for (let n = el as HTMLElement | null; n && n !== document.body; n = n.parentElement) {
        const o = getComputedStyle(n).overflowY
        if ((o === 'auto' || o === 'scroll') && n.scrollHeight > n.clientHeight && (dy > 0 ? n.scrollTop + n.clientHeight < n.scrollHeight - 1 : n.scrollTop > 0)) return true
      }
      return false
    }
    const onWheel = (e: WheelEvent) => {
      const mouse = e.deltaMode === 1 || (Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 50 && e.deltaX === 0)
      if (!mouse || e.ctrlKey || max() <= 0 || inner(e.target, e.deltaY)) return
      e.preventDefault()
      if (!raf) { cur = window.scrollY; target = cur }
      target = Math.min(max(), Math.max(0, target + (e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY)))
      if (!raf) raf = requestAnimationFrame(tick)
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => { window.removeEventListener('wheel', onWheel); cancelAnimationFrame(raf) }
  }, [])
  return null
}
