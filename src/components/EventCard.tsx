import { Link } from 'react-router-dom'

export type Ev = { img: string; data: string; prefix?: string; cat: string; title: string; to?: string }

// Template pagina evento (src/pages/EventoSingolo.tsx)
export const EVENTO_ROUTE = '/gli-eventi/evento'

// Card evento con cornice bianca (usata in Home e Il programma); porta al template evento
export default function EventCard({ e }: { e: Ev }) {
  return (
    <Link to={e.to ?? EVENTO_ROUTE} className="group w-[396px] max-w-full flex flex-col gap-[21px]">
      <div className="bg-white p-[15px] h-[288px] overflow-hidden"><img src={`/assets/deco/${e.img}`} alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
      <div className="px-2.5 flex flex-col gap-2.5">
        <p className="t-sm">{e.prefix} {e.data}</p>
        <div><p className="t-md">{e.cat}</p><h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em] group-hover:underline">{e.title}</h3></div>
      </div>
    </Link>
  )
}
