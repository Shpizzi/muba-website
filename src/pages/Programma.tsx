import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import EventCard, { type Ev } from '../components/EventCard'
import TornBand from '../components/TornBand'
import { Link } from 'react-router-dom'

const inCorso: Ev[] = [
  { img: 'stampa-mostre.webp', prefix: 'Fino al', data: '03 Febbraio 2026 - 05 Marzo 2026', cat: 'Mostra temporane', title: 'Le donne nella bonifica' },
  { img: 'prog-1-5bb1ce.webp', prefix: 'Fino al', data: '15 Febbraio 2026', cat: 'Presentazione pubblica', title: 'L’ arrivo dei pionieri' },
  { img: '../home/evento-1-12df4f.webp', prefix: 'Fino al', data: '18 febbraio 2026', cat: 'Programma pubblico', title: 'Il futuro in campo' },
  { img: 'prog-2.webp', prefix: 'Fino al', data: '03 Marzo 2026', cat: 'Mostra Temporanea', title: 'La terra prima della bonifica' },
]
const future: Ev[] = [
  { img: 'fut-1-673d75.webp', prefix: 'A partire dal', data: '28 Marzo 2026', cat: 'Programma pubblico', title: 'Terra e Acqua' },
  { img: 'fut-2-3c07c9.webp', prefix: 'A partire dal', data: '17 Aprile 2026', cat: 'Mostra temporanea immersiva', title: 'Il giorno dell’arrivo' },
  { img: 'fut-3.webp', prefix: 'A partire dal', data: '31 Aprile 2026', cat: 'Attività partecipativa', title: 'Archivio Vivente' },
  { img: 'fut-4.webp', prefix: 'A partire dal', data: '05 Maggio 2026', cat: 'Mostra temporanea', title: 'La terra oggi' },
]
const programma = [
  ['evento-2-museo.webp', 'Mostra permanente', 'Il percorso espositivo che racconta la bonifica di Arborea e la trasformazione del territorio, attraverso oggetti, documenti, architetture e testimonianze.', 'Visita la mostra permanente', '/il-programma/mostra-permanente', true],
  ['deco/stampa-mostre.webp', 'Mostre temporanee', 'Un programma espositivo dedicato a progetti temporanei che nascono dall’incontro tra ricerca, memoria e sguardi contemporanei.', 'Visita le mostre temporanee', '/il-programma/mostre-temporanee'],
  ['deco/pg-3-66b5f7.webp', 'Attività', 'Laboratori, incontri, visite e proposte pensate per pubblici diversi, per vivere il museo in modo attivo e partecipato.', 'Scopri le attività', '/il-programma/attivita'],
] as const

function Lista({ id, titolo, eventi, border }: { id: string; titolo: string; eventi: Ev[]; border?: boolean }) {
  return (
    <section id={id} className={`px-gutter py-[90px] flex flex-col gap-[63px] border-black ${border ? 'border-y-[1.5px]' : ''}`}>
      <div className="flex justify-between items-end gap-6">
        <h2 className="h2 max-w-[670px]">{titolo}</h2>
        <a href="#" className="t-md border-b-[1.5px] border-black pb-0.5">Vedi tutte ↗</a>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-7 justify-between">{eventi.map(e => <EventCard key={e.title} e={e} />)}</div>
    </section>
  )
}

export default function Programma() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[176px] pb-[123px]">
          <div className="hidden lg:block">
            <Deco src="cerchi.webp" className="left-[598px] -top-[38.5px] size-[749px]" />
            <Deco src="freccia-a.webp" className="left-[350px] top-[425px] size-[180px] z-10" />
            <Deco src="freccia-b.webp" className="left-[71px] top-[428px] size-[181px] z-10" />
          </div>
          <div className="relative flex flex-col">
            <ApertoLine />
            <h1 className="font-mostra font-bold uppercase text-[min(186px,12.9vw)] leading-[0.97] mb-[18px]">Il programma</h1>
            <p className="t-lg">Scopri le mostre e le attività in corso e quelle future al Museo della Bonifica di Arborea.</p>
          </div>
        </section>
        <nav className="relative px-gutter pb-[73px] flex flex-wrap gap-7">
          <Button href="#in-corso">In corso</Button>
          <Button href="#future">Future</Button>
          <Button href="#programma">Il programma del muba</Button>
        </nav>

        <Lista id="in-corso" titolo="Mostre e attività in corso" eventi={inCorso} border />
        <div className="relative"><Deco src="freccia-d.webp" className="left-[600px] -top-[39px] size-[240px] hidden lg:block z-10" /></div>
        <Lista id="future" titolo="Mostre e attività future" eventi={future} />

        <TornBand className="my-10">
          <div className="flex flex-col gap-4 max-w-[824px]">
            <h2 className="font-semplicita font-bold uppercase text-[44px] tracking-[-0.02em]">Come vivere il MUBA</h2>
            <p className="t-lg">Scopri l’intero calendario delle attività per esplorare la storia. Incontri, laboratori, iniziative culturali e molto altro ti aspettano</p>
          </div>
          <Button href="/il-programma/attivita" className="self-start">Scopri tutte le attività</Button>
          <Deco src="../home/gotto.webp" className="right-[32px] top-0 size-[414px] hidden lg:block z-10" />
        </TornBand>

        <section id="programma" className="relative px-gutter pt-[90px] pb-[110px] flex flex-col gap-10">
          <Deco src="schizzo-b.webp" className="left-[107px] -top-[43px] size-[362px] hidden lg:block" />
          <h2 className="h2 relative">Il programma del MUBA</h2>
          <div className="flex flex-wrap lg:flex-nowrap gap-7">
            {programma.map(([img, t, d, link, to]) => (
              <article key={t} className="relative w-[395px] max-w-full h-[537px] border-[1.5px] border-black p-[30px] flex flex-col justify-end gap-10 text-beige">
                <img src={img.startsWith('deco/') ? `/assets/${img}` : `/assets/${img}`} alt="" className="absolute inset-0 size-full object-cover" />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_72%)]" />
                <div className="relative flex flex-col gap-2"><h3 className="t-lg">{t}</h3><p className="t-md">{d}</p></div>
                <Link to={to} className="relative t-md border-b-[1.5px] border-beige self-stretch pb-1">{link}</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
