import { createContext, useContext, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menu, secondari } from '../data/sitemap'

const Ctx = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({ open: false, setOpen: () => {} })
export const useMenu = () => useContext(Ctx)

const socials = ['youtube', 'instagram', 'facebook']
const partner = [
  { src: 'partner-1.webp', cls: 'w-[170px] h-[76px] object-cover' },
  { src: 'partner-2.webp', cls: 'w-[170px] h-[76px] object-contain' },
  { src: 'partner-3.webp', cls: 'w-[174px] h-[21px] object-cover' },
  { src: 'partner-4.webp', cls: 'w-[178px] h-[58px] object-cover' },
]

// Cella della navbar: identica in Header e nell'overlay del menu, così si sovrappongono al pixel
export const cell = 'h-full flex items-center gap-[9.55px] px-6 border-l-[1.5px] border-black font-mostra font-bold uppercase text-[22.9px] hover:bg-black/5 active:bg-black/10'

function Overlay({ close }: { close: () => void }) {
  const [attivo, setAttivo] = useState(0)
  const { pathname } = useLocation()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [close])
  const iniziale = useRef(pathname)
  useEffect(() => { if (pathname !== iniziale.current) close() }, [pathname, close])

  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 bg-beige text-black flex flex-col">
      <header className="h-[100px] shrink-0 px-gutter border-b-[1.5px] border-black flex items-center justify-between">
        <Link to="/" aria-label="MUBA home"><img src="/assets/logo-short.svg" alt="MUBA" width={128} height={27} /></Link>
        <nav className="h-full flex">
          <a href="#" className={cell}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
            Login
          </a>
          <button onClick={close} className={`${cell} w-[155px] border-r-[1.5px]`}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><path d="M4 3l17 18M21 3L4 21" /></svg>
            Chiudi
          </button>
        </nav>
      </header>

      <div className="flex-1 min-h-0 grid grid-cols-[664px_1fr]">
        <ul className="border-r-[1.5px] border-black pl-gutter py-[125px] flex flex-col justify-between">
          {menu.map((s, i) => (
            <li key={s.to} className="relative h-[76px] w-fit whitespace-nowrap">
              {i === attivo && <img src="/assets/menu/scarabocchio.svg" alt="" aria-hidden className="absolute left-0 top-[24px] w-full h-[40px]" preserveAspectRatio="none" />}
              <Link to={s.to} onMouseEnter={() => setAttivo(i)} onFocus={() => setAttivo(i)}
                className="relative inline-block font-mostra font-bold uppercase text-[76px] leading-none tracking-[-0.02em]">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col min-h-0">
          <ul className="flex-1 min-h-0 overflow-auto pl-[71px] pr-gutter pt-[129px] flex flex-col gap-6">
            {menu[attivo].children.map(c => (
              <li key={c.to}><Link to={c.to} className="font-semplicita text-[75px] leading-[1.2] hover:underline decoration-red decoration-2 underline-offset-8">{c.label}</Link></li>
            ))}
          </ul>
          <div className="h-[125px] shrink-0 border-t-[1.5px] border-black pl-[70px] pr-gutter pt-[52px] flex justify-between items-start t-lg">
            {secondari.map(p => <Link key={p.to} to={p.to} className="hover:underline">{p.label}</Link>)}
          </div>
        </div>
      </div>

      <div className="h-[177px] shrink-0 border-t-[1.5px] border-black grid grid-cols-[417px_1fr]">
        <div className="border-r-[1.5px] border-black px-gutter flex items-center gap-[25px]">
          {socials.map(n => <a key={n} href="#" aria-label={n} className="size-[60px] shrink-0 rounded-full bg-black grid place-items-center"><span aria-hidden className="size-[26px] bg-beige" style={{ mask: `url(/assets/icon-${n}.svg) center / contain no-repeat`, WebkitMask: `url(/assets/icon-${n}.svg) center / contain no-repeat` }} /></a>)}
        </div>
        <div className="pl-[106px] pr-gutter flex items-center gap-[37px]">
          {partner.map(p => <img key={p.src} src={`/assets/menu/${p.src}`} alt="" className={p.cls} />)}
        </div>
      </div>
    </div>
  )
}

export default function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  return <Ctx.Provider value={{ open, setOpen }}>{children}{open && <Overlay close={close} />}</Ctx.Provider>
}
