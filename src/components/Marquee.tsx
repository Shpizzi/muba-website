import { Link } from 'react-router-dom'

// `to`: destinazione del marquee (default: biglietti). Il testo deve rimandare alla pagina relativa.
export default function Marquee({ text = 'Prenota i tuoi biglietti', to = '/la-visita/biglietti' }: { text?: string; to?: string }) {
  const item = <span className="font-mostra font-bold uppercase text-[min(136px,10vw)] leading-[100px] px-4 whitespace-nowrap">{text}</span>
  return (
    <Link to={to} aria-label={text} className="group relative block h-[180px] hover:text-beige transition-colors">
      {/* linee e hover a tutta larghezza dello schermo */}
      <span aria-hidden className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 border-y-[1.5px] border-black group-hover:bg-black transition-colors" />
      <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 flex items-center overflow-hidden" aria-hidden>
        <div className="marquee-track flex w-max">
          {[0, 1, 2, 3].map(i => <span key={i} className="flex">{item}{item}</span>)}
        </div>
      </div>
    </Link>
  )
}
