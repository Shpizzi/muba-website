import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Track, { Slide } from '../components/Track'
import FooterSlide from '../components/FooterSlide'
import Deco from '../components/Deco'
import { VMarquee } from './Eventi'

// Contenuti del template: sostituire questo oggetto (o passare `evento` come prop) per un altro evento.
export type Evento = {
  data: string // "15 Febbraio 2026 | ORE 18.00"
  titolo: string // \n per andare a capo
  sottotitolo: string
  immagine: string // pannello a destra della hero
  luogo: { prefisso: string; nome: string; href?: string }
  ingresso: string
  descrizione: string[]
  foto: [string, string, string, string, string] // collage slide 2
  sezioni: [
    { titolo: string; testo: ReactNode; img: string; img2: string },
    { titolo: string; testo: ReactNode; img: string; img2: string },
  ]
  chiusura: string
  marquee: { text: string; to: string }
}

const a = (p: string) => `/assets/eventi/${p}`

export const esempio: Evento = {
  data: '15 Febbraio 2026 | ORE 18.00',
  titolo: 'L’ arrivo \ndei pionieri',
  sottotitolo: 'Storie reali di uomini e donne che trasformarono una terra \ndifficile in una comunità viva e prospera.',
  immagine: a('tpl-hero.webp'),
  luogo: { prefisso: 'Presso: ', nome: 'Teatro Piazza Maria ausiliatrice', href: '/la-visita/come-arrivare' },
  ingresso: 'Evento gratuito',
  descrizione: ['Durante l’incontro, i pionieri saranno in dialogo con gli storici Mario Rossi e Samuele Viganò, intrecciando testimonianze e approfondimenti in un confronto aperto tra memoria e ricerca.', 'Prenotazione obbligatoria. I posti sono limitati.'],
  foto: [a('tpl-f1.webp'), a('tpl-f2.webp'), a('tpl-f3.webp'), a('tpl-f4.webp'), a('tpl-f5.webp')],
  sezioni: [
    { titolo: 'Memorie che diventano storia', testo: 'Testimonianze dirette, immagini d’epoca e racconti familiari restituiscono il momento dell’arrivo e la trasformazione di una terra in comunità. Un incontro che intreccia voce privata e memoria collettiva.', img: a('tpl-s2a.webp'), img2: a('tpl-s2b.webp') },
    { titolo: 'Una conversazione \ntra radici e lingua', testo: <>Sarà presente anche l’<span className="underline">associazione Veneti nel Mondo</span>, con un intervento dedicato ai ricordi dei pionieri di Arborea e al legame ancora vivo con la lingua e la cultura veneta. Un dialogo che attraversa generazioni e restituisce il senso profondo dell’identità.</>, img: a('tpl-s3a.webp'), img2: a('tpl-s3b.webp') },
  ],
  chiusura: a('tpl-s4.webp'),
  marquee: { text: 'biglietti ancora disponibili', to: '/la-visita/biglietti' },
}

const h3 = 'font-mostra font-bold uppercase text-[44px] leading-none tracking-[-0.02em] whitespace-pre-line'
const h5 = 'font-mostra font-bold text-[28px] tracking-[-0.02em]'
const pic = (src: string, cls: string) => <img src={src} alt="" className={`absolute object-cover ${cls}`} />

// Link di servizio (Button Text SX del Figma); in hover compare la linea rossa
function Indietro() {
  return (
    <Link to="/gli-eventi" className="group absolute left-[100.5px] top-[230px] t-md inline-flex items-center gap-3 hover:text-red transition-colors">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M19.5 12h-15M12.5 4.2 4.5 12l8 7.8" /></svg>
      Torna indietro
      <span className="absolute left-1 top-[19px] h-0.5 w-[87px] bg-red opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}

// Template evento orizzontale. Figma "MUBA / Desktop / La visita / Eventi-template" (3191:22256), navbar inclusa nel frame.
export default function EventoSingolo({ evento = esempio }: { evento?: Evento }) {
  const e = evento
  const [s2, s3] = e.sezioni
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={8690}>
        {/* hero, x 0 */}
        <Slide x={0} className="bg-beige overflow-hidden">
          <Deco src="../eventi/tpl-gif1.webp" className="left-[69px] top-[146.3px] size-[474.5px]" />
          <Deco src="../eventi/tpl-freccia05.webp" className="left-[217.1px] top-[99.3px] size-[265px]" />
          {pic(e.immagine, 'left-[840px] top-0 w-[600px] h-[1024px]')}
          <Indietro />
          <div className="absolute left-[100px] top-[293px] w-[712px] flex flex-col gap-[13px]">
            <p className="t-md">{e.data}</p>
            <h1 className="font-mostra font-bold uppercase text-[105px] leading-[94px] whitespace-pre-line">{e.titolo}</h1>
            <p className="t-lg whitespace-pre-line">{e.sottotitolo}</p>
          </div>
          <Deco src="freccia07.webp" className="left-[30.4px] top-[498.3px] size-[181px]" />
          <Deco src="freccia08.webp" className="left-[281.5px] top-[610.7px] size-[180px]" />
          <Button variant="primary" href="/la-visita/biglietti" className="absolute left-[99.9px] top-[623.7px] border-2">Prenota il tuo posto</Button>
        </Slide>

        {/* dettagli + collage, x 1440 */}
        <Slide x={1440} className="bg-beige overflow-hidden">
          <Deco src="../eventi/tpl-gif2.webp" className="left-[331.7px] top-[495.7px] size-[249.7px]" />
          {pic(e.foto[0], 'left-[93.3px] top-[93.6px] w-[281.5px] h-[267px]')}
          {pic(e.foto[1], 'left-[101.6px] top-[715px] w-[478px] h-[381px]')}
          {pic(e.foto[2], 'left-[429.5px] top-[81px] w-[374.8px] h-[306.4px]')}
          {pic(e.foto[3], 'left-[1157px] top-[706px] w-[351px] h-[273px]')}
          {pic(e.foto[4], 'left-[889.3px] top-[112.7px] w-[550.7px] h-[445.6px]')}
          <img src={a('tpl-freccia-rossa.svg')} alt="" aria-hidden className="absolute left-[726.6px] top-[256.7px] w-10" />
          <Deco src="vecia-stupita.webp" className="left-[647.5px] top-[554px] size-[480.5px]" />
          <div className="absolute left-[100px] top-[435px] w-[713px] flex flex-col gap-2">
            <p className={h5}>{e.luogo.prefisso}{e.luogo.href ? <Link to={e.luogo.href} className="underline hover:text-red">{e.luogo.nome}</Link> : <span className="underline">{e.luogo.nome}</span>}</p>
            <p className={h5}>{e.ingresso}</p>
            <div className="flex flex-col gap-5 pt-3">{e.descrizione.map(t => <p key={t} className="t-lg">{t}</p>)}</div>
          </div>
        </Slide>

        <VMarquee x={2880} text={e.marquee.text} to={e.marquee.to} />

        {/* sezione 1, x 3049 */}
        <Slide x={3049} className="bg-beige overflow-hidden">
          {pic(s2.img, 'left-0 top-0 w-[600px] h-[1035px]')}
          {pic(s2.img2, 'left-[945.5px] top-[391.2px] w-[394.5px] h-[501px]')}
          <Deco src="../eventi/tpl-penna04.webp" className="left-[777px] top-[685px] size-[274px]" />
          <div className="absolute left-[734px] top-[196px] w-[606px] flex flex-col gap-2">
            <h2 className={h3}>{s2.titolo}</h2>
            <p className="t-lg pt-5">{s2.testo}</p>
          </div>
        </Slide>

        {/* sezione 2, x 4478 */}
        <Slide x={4478} className="bg-beige overflow-hidden">
          {pic(s3.img, 'left-[945.5px] top-[102.9px] w-[494.5px] h-[741.7px]')}
          {pic(s3.img2, 'left-0 top-[566.3px] w-[740px] h-[493.6px]')}
          <Deco src="../eventi/tpl-grano.webp" className="left-[628.5px] top-[438px] size-[240px]" />
          <div className="absolute left-[100.5px] top-[196px] w-[606px] flex flex-col gap-2">
            <h2 className={h3}>{s3.titolo}</h2>
            <p className="t-lg pt-5">{s3.testo}</p>
          </div>
        </Slide>

        {/* collegamenti utili, x 5918 (il footer parte a 7206.5, quindi la slide è larga 1288.5) */}
        <Slide x={5918} w={1288.5} className="bg-beige overflow-hidden">
          <span className="absolute left-[734px] top-[124px] h-[900px] w-0 border-l-[1.5px] border-black" />
          {pic(e.chiusura, 'left-[-150.5px] top-[172px] w-[673px] h-[584.6px]')}
          <Deco src="libro.webp" className="left-[446.5px] top-[756.6px] size-[240px]" />
          <Deco src="vecia-nera.webp" className="left-[839.5px] top-[621px] size-[368px]" />
          <nav className="absolute left-[746px] top-[191.5px] w-[594px] flex flex-col">
            {[['Audioguida', '/la-visita/museo-digitale'], ['Documenti', '/il-muba/archivio-e-ricerca'], ['Biglietti', '/la-visita/biglietti']].map(([t, to]) => (
              <Link key={t} to={to} className="group relative flex items-center gap-8 px-5 py-10 border-b-[1.5px] border-black text-[36px] hover:bg-black hover:text-beige transition-colors">
                <span className="grow">{t}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden className="transition-transform group-hover:translate-x-1"><path d="M4.5 12h15M11.5 4.2l8 7.8-8 7.8" /></svg>
                <span className="absolute left-5 top-[75px] h-0.5 w-[11.5px] bg-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>
        </Slide>

        <FooterSlide x={7206.5} light />
      </Track>
    </>
  )
}
