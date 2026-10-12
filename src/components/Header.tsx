import { Link } from 'react-router-dom'
import { useMenu, cell } from './MenuProvider'

export default function Header() {
  const { open, setOpen } = useMenu()
  return (
    <header className="bg-beige border-b-[1.5px] border-black h-[100px] px-gutter flex items-center justify-between">
      <Link to="/" aria-label="MUBA home"><img src="/assets/logo-short.svg" alt="MUBA" width={128} height={27} /></Link>
      <nav className="h-full flex">
        <Link to="/la-visita/da-dove-iniziare" className={cell}>Usa la MUBAPP</Link>
        <button className={`${cell} w-[155px] border-r-[1.5px]`} aria-expanded={open} onClick={() => setOpen(true)}>
          <span className="flex flex-col gap-[6px] w-[38px]">
            <i className="block h-[4px] w-5 bg-black" />
            <i className="block h-[4px] bg-black" />
          </span>
          Menu
        </button>
      </nav>
    </header>
  )
}
