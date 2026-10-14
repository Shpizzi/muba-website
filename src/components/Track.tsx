import { useEffect, useRef, type ReactNode } from 'react'

export const DESIGN_H = 1024

// Punto di aggancio opzionale: `at` è una x di design che finisce a sinistra / al centro / a destra del viewport.
// `lock`: finché è true non si può scrollare oltre quel punto.
export type Stop = { at: number; align?: 'start' | 'center' | 'end'; lock?: boolean }

// Scroll verticale nativo (trackpad/rotella/tastiera) che muove una "striscia" orizzontale.
// Lo spostamento è 1:1 con lo scroll; la striscia è disegnata a 1024px di altezza e scalata all'altezza dello schermo.
// La scala è calcolata una volta (e al resize di larghezza): niente rescale al volo e niente overflow verticale.
export default function Track({ width, stops = [], children }: { width: number; stops?: Stop[]; children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const stopsRef = useRef(stops)
  stopsRef.current = stops
  const lockKey = stops.map(s => (s.lock ? 1 : 0)).join()

  useEffect(() => {
    let s = window.innerHeight / DESIGN_H
    let w = window.innerWidth
    let prev = window.scrollY
    let dir = 1
    let timer: number | undefined
    const pos = (st: Stop) => Math.max(0, st.at * s - (st.align === 'end' ? window.innerWidth : st.align === 'center' ? window.innerWidth / 2 : 0))
    // CSS scroll-driven animation (compositor): la striscia resta incollata allo scroll, senza scatti. Fallback JS sul scroll event.
    const driven = CSS.supports('animation-timeline: scroll()')
    const el = track.current!
    if (driven) el.classList.add('track-driven')
    const apply = () => { if (!driven) el.style.transform = `translate3d(${-window.scrollY}px,0,0) scale(${s})` }
    const layout = () => {
      let dist = Math.max(0, width * s - window.innerWidth)
      // lock: la pagina è alta solo fino al punto bloccato, il browser non lascia scrollare oltre
      for (const st of stopsRef.current) if (st.lock) dist = Math.min(dist, pos(st))
      outer.current!.style.height = `${dist + window.innerHeight}px`
      el.style.setProperty('--dist', String(dist)); el.style.setProperty('--s', String(s))
      apply()
    }
    const onResize = () => {
      // rescale solo se cambia la larghezza (le barre mobile cambiano innerHeight mentre si scrolla)
      if (window.innerWidth !== w) { w = window.innerWidth; s = window.innerHeight / DESIGN_H }
      layout()
    }
    // a fine scroll (avanti o indietro): se un punto è nella direzione di marcia entro mezzo viewport, ci si aggancia.
    // animazione di aggancio lenta e morbida (ease in-out), interrotta da qualsiasi input dell'utente
    let anim = 0
    const stopAnim = () => { cancelAnimationFrame(anim); anim = 0 }
    const glide = (to: number) => {
      stopAnim()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { window.scrollTo({ top: to, behavior: 'instant' }); return }
      const from = window.scrollY, dur = Math.min(1400, 700 + Math.abs(to - from) * 0.8), t0 = performance.now()
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / dur)
        window.scrollTo({ top: from + (to - from) * (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2), behavior: 'instant' })
        anim = k < 1 ? requestAnimationFrame(step) : 0
      }
      anim = requestAnimationFrame(step)
    }
    const settle = () => {
      const y = window.scrollY
      const t = stopsRef.current.map(pos).filter(p => (dir > 0 ? p > y + 1 : p < y - 1) && Math.abs(p - y) < window.innerWidth / 2).sort((a, b) => (dir > 0 ? a - b : b - a))[0]
      if (t !== undefined) glide(t)
    }
    const onScroll = () => { apply(); const y = window.scrollY; if (y !== prev) { dir = y > prev ? 1 : -1; prev = y }; window.clearTimeout(timer); timer = window.setTimeout(settle, 180) }
    layout()
    window.addEventListener('resize', onResize)
    const inputs = ['touchstart', 'keydown', 'pointerdown'] as const
    inputs.forEach(n => window.addEventListener(n, stopAnim, { passive: true }))
    // rotella: interrompe solo uno scatto netto o un cambio di direzione, non la coda d'inerzia del trackpad
    const onWheel = (e: WheelEvent) => { if (anim && (Math.abs(e.deltaY) >= 50 || Math.sign(e.deltaY) !== dir)) stopAnim() }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('resize', onResize); window.removeEventListener('scroll', onScroll); window.clearTimeout(timer); stopAnim(); window.removeEventListener('wheel', onWheel); el.classList.remove('track-driven'); inputs.forEach(n => window.removeEventListener(n, stopAnim)) }
  }, [width, lockKey])

  return (
    <div ref={outer} data-track>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={track} className="absolute top-0 left-0 origin-top-left will-change-transform overflow-hidden" style={{ width, height: DESIGN_H }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// Un blocco della striscia, posizionato alle coordinate di Figma (x, larghezza). Niente overflow verticale.
export function Slide({ x, w = 1440, className = '', children }: { x: number; w?: number; className?: string; children: ReactNode }) {
  return <section className={`absolute top-0 overflow-y-clip ${className}`} style={{ left: x, width: w, height: DESIGN_H }}>{children}</section>
}
