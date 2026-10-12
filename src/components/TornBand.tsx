import type { ReactNode } from 'react'

// Banda rossa con bordi di carta strappata (immagini ruotate di 90° rispetto all'export)
function Edge({ src, h }: { src: string; h: number }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: h }}>
      <img src={`/assets/deco/${src}`} alt="" aria-hidden className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 object-fill"
        style={{ width: h, height: '120vw' }} />
    </div>
  )
}

export default function TornBand({ children, className = '', pad = 'py-12' }: { children: ReactNode; className?: string; pad?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="-mb-[44px]"><Edge src="carta-su.webp" h={174} /></div>
      <div className={`relative no-bleed bg-red text-beige px-gutter ${pad} min-h-[370px] flex flex-col justify-center gap-[42px]`}>{children}</div>
      <div className="-mt-[1px]"><Edge src="carta-giu.webp" h={202} /></div>
    </div>
  )
}
