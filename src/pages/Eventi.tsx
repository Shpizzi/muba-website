import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Track, { Slide } from '../components/Track'
import FooterSlide from '../components/FooterSlide'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import { EVENTO_ROUTE } from '../components/EventCard'

const img = (p: string) => `/assets/eventi/${p}.webp`

const prossimi = [
  { img: 'ev1', titolo: 'L’arrivo dei pionieri', data: 'Il 15 Febbraio 2026', testo: 'Un incontro dedicato alle storie delle prime famiglie giunte ad Arborea. Attraverso testimonianze, immagini d’epoca e documenti d’archivio, l’evento ricostruisce l’inizio della trasformazione del territorio.' },
  { img: 'ev2', titolo: 'Conversazioni di bonifica', data: '22 Marzo 2026', testo: 'Un dialogo pubblico tra storici, agronomi e discendenti dei pionieri per approfondire il modello cooperativo nato con la bonifica. Un confronto tra memoria storica e sviluppo contemporaneo del territorio.' },
  { img: 'ev3', titolo: 'Giornata della Familiare', data: '15 Aprile 2025', testo: 'Una giornata dedicata alla raccolta di fotografie, lettere e racconti delle famiglie di Arborea. I materiali verranno digitalizzati e restituiti ai partecipanti.' },
]

const speciali = [
  { img: 'ps1', titolo: 'Il latte storico che unisce\nle radici', testo: 'Un percorso speciale in collaborazione con ', link: ['Latte Arborea', 'https://www.arborea1956.com/'], coda: ' per raccontare come la cooperazione abbia trasformato il lavoro agricolo in identità collettiva. Dalla stalla alla comunità, la storia di un modello che ancora oggi sostiene il territorio.' },
  { img: 'ps2', titolo: 'Custodire il futuro, raccontando il passato', testo: 'Un progetto dedicato alle scuole e alle nuove generazioni, per avvicinare studenti e docenti alla storia della bonifica attraverso documenti, testimonianze e laboratori partecipativi. Un dialogo tra memoria e consapevolezza.' },
  { img: 'ps3', titolo: 'Radici agricole che\ndiventano impresa', testo: 'Un ciclo di incontri con aziende e realtà locali per esplorare come la bonifica abbia generato un sistema di collaborazione ancora vivo. Tradizione agricola, innovazione e comunità si incontrano in un umano racconto condiviso.' },
]

// Link testuale con freccia (Button Text del Figma); in hover diventa rosso
export function TextLink({ to, children, beige = false, className = '' }: { to: string; children: string; beige?: boolean; className?: string }) {
  return (
    <Link to={to} className={`t-md border-b-[1.5px] pb-1 inline-flex items-center justify-between gap-1 transition-colors hover:text-red hover:border-red ${beige ? 'border-beige hover:text-red-tint-40 hover:border-red-tint-40' : 'border-black'} ${className}`}>
      <span>{children}</span><span aria-hidden>↗</span>
    </Link>
  )
}

const kf = '@keyframes vmarq{to{transform:translateY(-50%)}} @media (prefers-reduced-motion:reduce){.vmarq{animation:none!important}}'

// Striscia verticale (Figma Marquee, 180px) che porta alla pagina relativa al testo
export function VMarquee({ x, text, to }: { x: number; text: string; to: string }) {
  return (
    <Slide x={x} w={180} className="z-10 bg-beige border-x-[1.5px] border-black overflow-hidden hover:bg-black hover:text-beige transition-colors">
      <style>{kf}</style>
      <Link to={to} aria-label={text} className="absolute inset-0 block">
        <div aria-hidden className="vmarq flex flex-col items-center" style={{ animation: 'vmarq 40s linear infinite' }}>
          {[0, 1, 2, 3].map(i => (
            <span key={i} className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-mostra font-bold uppercase text-[136px] leading-[100px] py-4">{text}</span>
          ))}
        </div>
      </Link>
    </Slide>
  )
}

// Coordinate = Figma "MUBA / Desktop / eventi" (3191:23476); la navbar da 100px è inclusa nel frame.
export default function Eventi() {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={5972}>
        {/* hero, x 0 */}
        <Slide x={0} className="bg-beige overflow-hidden">
          <Deco src="cerchi.webp" className="left-[192.5px] top-[163.7px] size-[456px]" />
          <Deco src="freccia08.webp" className="left-[290px] top-[524.7px] size-[180px]" />
          <Deco src="freccia07.webp" className="left-[-19.3px] top-[377.4px] size-[249px]" />
          <Deco src="ev-freccia11.webp" className="left-[767px] top-[121px] size-[328px]" />
          <Deco src="ev-schizzo04.webp" className="left-[884.3px] top-[288.7px] size-[120px]" />
          <Deco src="vecia-stupita.webp" className="left-[570px] top-[609px] size-[404px]" />
          <div className="absolute left-[100px] top-[293px] w-[712px] flex flex-col gap-[54px]">
            <div className="flex flex-col gap-[13px]">
              <ApertoLine />
              <div className="flex flex-col gap-1">
                <h1 className="font-mostra font-bold uppercase text-[105px] leading-[94px]">Gli eventi</h1>
                <p className="t-lg w-[744px]">17 Febbraio 2026<br />Ecco gli eventi in programma per la giornata odierna</p>
              </div>
            </div>
            <Button variant="primary" href="/la-visita/biglietti" className="self-start border-2">Prenota il tuo posto</Button>
          </div>
          <Link to={EVENTO_ROUTE} className="group absolute left-[945px] top-[349px] w-[401px] flex flex-col gap-5">
            <div className="bg-white p-[15px] h-[295px] overflow-hidden"><img src={img('hero')} alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
            <div className="px-2.5 w-[290px] flex flex-col gap-2.5">
              <p className="t-sm">Fino al 18 febbraio 2026</p>
              <div><p className="t-md">Presentazione pubblica</p><h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em] group-hover:underline">Il futuro in campo</h3></div>
            </div>
          </Link>
        </Slide>

        {/* I prossimi eventi, x 1440 */}
        <Slide x={1440} className="bg-beige">
          <div className="absolute left-[100px] top-[236px] w-[1240px] flex items-end justify-between">
            <div className="flex items-center gap-5"><h2 className="h2">I prossimi eventi</h2><img src="/assets/deco/mt-01.webp" alt="" aria-hidden className="size-14" /></div>
            <TextLink to="/il-programma">Vedi tutte</TextLink>
          </div>
          <div className="absolute left-[100px] top-[329px] w-[1240px] flex gap-7">
            {prossimi.map(m => (
              <article key={m.titolo} className="relative w-[395px] h-[439px] shrink-0 border-[1.5px] border-black p-[30px] flex flex-col justify-end gap-10 text-beige">
                <img src={img(m.img)} alt="" className="absolute inset-0 size-full object-cover" />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_72%)]" />
                <div className="relative flex flex-col gap-2"><h3 className="t-lg">{m.titolo}</h3><p className="t-md">{m.data}</p><p className="t-md">{m.testo}</p></div>
                <TextLink to={EVENTO_ROUTE} beige className="relative">Scopri tutto sull’evento</TextLink>
              </article>
            ))}
          </div>
        </Slide>

        <VMarquee x={2869} text="Mussolinia di Sardegna" to="/il-muba/storia" />

        {/* Progetti speciali, x 3049 */}
        <Slide x={3049} className="bg-beige overflow-hidden">
          <Deco src="stella.webp" className="left-[30px] top-[95.5px] size-[160px]" />
          <Deco src="cerchi.webp" className="left-[331.8px] top-[127px] size-[226px]" />
          <div className="absolute left-[100px] top-[186px] w-[1240px] flex flex-col gap-16">
            <div className="flex justify-between">
              <h2 className="h2">Progetti speciali</h2>
              <div className="w-[713px] flex flex-col items-end gap-5">
                <p className="t-lg">Iniziative, eventi e attività sviluppate in collaborazione con enti, istituzioni, associazioni e partner culturali. Un insieme di proposte che nasce dall’incontro tra il museo e il territorio, per sperimentare nuovi linguaggi, creare occasioni di dialogo e ampliare il racconto del MUBA.</p>
                <TextLink to="/il-programma/attivita">Esplora le collaborazioni</TextLink>
              </div>
            </div>
            <div className="flex gap-7">
              {speciali.map(s => (
                <article key={s.img} className="w-[394.67px] shrink-0 flex flex-col gap-3">
                  <img src={img(s.img)} alt="" className="w-full h-[300px] object-cover border-[1.5px] border-black" />
                  <h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em] whitespace-pre-line">{s.titolo}</h3>
                  <p className="t-md">{s.testo}{s.link && <a href={s.link[1]} target="_blank" rel="noreferrer" className="underline hover:text-red">{s.link[0]}</a>}{s.coda}</p>
                </article>
              ))}
            </div>
          </div>
        </Slide>

        <FooterSlide x={4489} light />
      </Track>
    </>
  )
}
