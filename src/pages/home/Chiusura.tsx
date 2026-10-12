import { Slide } from '../../components/Track'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import { menu } from '../../data/sitemap'


export default function Chiusura() {
  return (
    <>
      <Slide x={9040} w={1840}>
        {/* righe fino al bordo destro: si uniscono al bordo sinistro del footer */}
        <ul className="absolute right-0 top-[214px] w-[760px] border-t-[1.5px] border-black">
          {menu.map(v => (
            <li key={v.to} className="border-b-[1.5px] border-black py-6 pl-10">
              <Link to={v.to} className="block font-mostra font-bold uppercase text-[76px] leading-[1.03] tracking-[-0.02em]">{v.label}</Link>
            </li>
          ))}
        </ul>
      </Slide>
      <Slide x={10880} w={1483} className="flex items-end border-l-[1.5px] border-black">
        <div className="w-full"><Footer /></div>
      </Slide>
    </>
  )
}
