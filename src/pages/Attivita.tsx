import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Marquee from '../components/Marquee'
import TornBand from '../components/TornBand'

type Card = { img: string; title: string; text?: string; list?: string[] }
const img = (p: string) => `/assets/attivita/${p}.webp`

const tutti: Card[] = [
  { img: 'tutti-1', title: 'Bambini e famiglie', list: ['0-1 anno, 2-5 anni, 6-11 anni', 'Camp al Museo', 'Compleanno al museo', 'Prime scoperte', 'Giocare con la storia'] },
  { img: 'tutti-2', title: 'Adolescenti', list: ['Laboratori', 'Ingegneri al MUBA', 'Officina delle idee', 'Museo laboratorio', 'Raccontare il territorio', 'Storia e futuro'] },
  { img: 'tutti-3', title: 'Adulti', list: ['Visite tematiche', 'Laboratori', 'Speciale mostra', 'Territorio e Benessere', 'Esperienze partecipate', 'Storie di lavoro e comunità'] },
  { img: 'tutti-4', title: 'Museo Accessibile', list: ['Accessibilità e inclusione', 'Esperienze multisensoriali', 'Museo senza barriere', 'Progettare insieme', 'Linguaggi accessibili', 'Esperienze guidate inclusive'] },
]
const scuole: Card[] = [
  { img: 'scuole-1', title: 'Infanzia', text: 'In Museo si inizia a costruire il legame con il patrimonio storico attraverso attività che spaziano dalla descrizione del sè alla conoscenza di storie, stimolando le potenzialità di relazione, autonomi, creatività, apprendimento.' },
  { img: 'scuole-2', title: 'Primaria', text: 'Il Museo permette di approcciarsi al concetto di tempo e di linea temporale, dialogare con il mondo attraverso l’esperienza dell’Intercultura, sviluppare le potenzialità espressive e descrittive promuovendo lo sviluppo della personalità.' },
  { img: 'scuole-3', title: 'Secondaria 1°', text: 'In Museo è possibile approfondire i diversi periodi storici da leggersi in relazione alla tradizione culturale e all’evoluzione sociale e scientifica della realtà contemporanea. Il periodo diventa fonte di analisi storico artistica e sociale.' },
  { img: 'scuole-4', title: 'Secondaria 2°', text: 'Il Museo fornisce allo studente alcuni strumenti culturali e metodologici per una comprensione approfondita della realtà presente attraverso la storia e le sue testimonianze, stimolando un atteggiamento creativo, progettuale e critico.' },
]
const visite: Card[] = [
  { img: 'visite-1', title: 'Visita MUBA', text: 'Un percorso introduttivo per conoscere il museo, la bonifica e la nascita di Arborea, attraversando gli spazi e i contenuti principali della mostra permanente.' },
  { img: 'visite-2', title: 'Visita tematica', text: 'Una visita di approfondimento dedicata a un tema specifico: il territorio, il lavoro, le architetture, le persone.' },
  { img: 'visite-3', title: 'Visita industriale', text: 'Un itinerario focalizzato sugli edifici e sulle strutture dell’area industriale, per comprendere il funzionamento del sistema produttivo legato alla bonifica.' },
  { img: 'visite-4', title: 'Archivio di memorie', text: 'Un percorso che affianca alla visita del museo materiali d’archivio e testimonianze, per entrare in contatto diretto con le fonti e le voci della memoria.' },
]
const progetti: (Card & { link?: [string, string] })[] = [
  { img: 'progetti-1', title: 'Il latte storico che unisce le radici', text: 'Un percorso speciale in collaborazione con Latte Arborea per raccontare come la cooperazione abbia trasformato il lavoro agricolo in identità collettiva. Dalla stalla alla comunità, la storia di un modello che ancora oggi sostiene il territorio.', link: ['Latte Arborea', 'https://www.arborea1956.com/'] },
  { img: 'progetti-2', title: 'Custodire il futuro, raccontando il passato', text: 'Un progetto dedicato alle scuole e alle nuove generazioni, per avvicinare studenti e docenti alla storia della bonifica attraverso documenti, testimonianze e laboratori partecipativi. Un dialogo tra memoria e consapevolezza.' },
  { img: 'progetti-3', title: 'Radici agricole che diventano impresa', text: 'Un ciclo di incontri con aziende e realtà locali per esplorare come la bonifica abbia generato un sistema di collaborazione ancora vivo. Tradizione agricola, innovazione e comunità si incontrano in un umano racconto condiviso.' },
]

function Cards({ items, cols = 4 }: { items: (Card & { link?: [string, string] })[]; cols?: 3 | 4 }) {
  return (
    <div className={`w-full grid gap-7 sm:grid-cols-2 ${cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {items.map(c => (
        <article key={c.title} className="flex flex-col gap-3">
          <img src={img(c.img)} alt="" loading="lazy" className="w-full h-[300px] object-cover border-[1.5px] border-black" />
          <h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">{c.title}</h3>
          {c.list && <ul className="t-md flex flex-col">{c.list.map(l => <li key={l}>- {l}</li>)}</ul>}
          {c.text && (
            <p className="t-md">
              {c.link ? <>{c.text.split(c.link[0])[0]}<a href={c.link[1]} target="_blank" rel="noreferrer" className="underline">{c.link[0]}</a>{c.text.split(c.link[0])[1]}</> : c.text}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}

function Section({ id, titolo, testo, cta, to, border, children, deco }: { id: string; titolo: string; testo: string; cta: string; to: string; border?: boolean; children: ReactNode; deco?: ReactNode }) {
  const cls = 't-md border-b-[1.5px] border-black pb-0.5 group'
  const inner = <>{cta} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></>
  return (
    <section id={id} className={`relative px-gutter py-[90px] flex flex-col items-center gap-16 border-black scroll-mt-[100px] ${border ? 'border-y-[1.5px]' : ''}`}>
      {deco}
      <div className="w-full flex flex-wrap justify-between gap-10">
        <h2 className="h2 relative">{titolo}</h2>
        <div className="w-[713px] max-w-full flex flex-col items-start lg:items-end gap-5">
          <p className="t-lg">{testo}</p>
          {to.startsWith('/') ? <Link to={to} className={cls}>{inner}</Link> : <a href={to} className={cls}>{inner}</a>}
        </div>
      </div>
      {children}
    </section>
  )
}

export default function Attivita() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[193px] pb-[118px]">
          <Deco src="cerchio.webp" className="left-[76px] top-[170px] size-[287px] hidden lg:block" />
          <div className="relative flex flex-col gap-3">
            <ApertoLine />
            <h1 className="font-mostra font-bold uppercase text-[min(105px,7.3vw)] leading-[1.05]">Cosa si può fare al MUBA?</h1>
            <p className="t-lg max-w-[900px] mt-1.5">Conosci, emozionati, mettiti in gioco, incontraci: un museo su misura per tutti, dove le storie del territorio diventano esperienza condivisa.</p>
          </div>
        </section>
        <nav className="px-gutter pb-[77px] flex flex-wrap gap-7">
          <Button href="#per-tutti">Per tutti</Button>
          <Button href="#scuole">Per le scuole</Button>
          <Button href="#visite-guidate">Visite guidate</Button>
          <Button href="#ricercatori">Ricercatori e studiosi</Button>
        </nav>

        <Section id="per-tutti" border titolo="Per tutti" testo="Conosci, emozionati, mettiti in gioco, incontraci: un museo su misura per tutti, dove le storie del territorio diventano esperienza condivisa." cta="Vedi tutte" to="/gli-eventi"
          deco={<><Deco src="gruppo.webp" className="left-[305px] -top-[11px] size-[132px] hidden lg:block z-10" /><Deco src="schizzo-c.webp" className="left-[51px] top-[206px] size-[120px] hidden lg:block" /><Deco src="schizzo-c.webp" className="left-[963px] top-[206px] size-[120px] hidden lg:block" /></>}>
          <Cards items={tutti} />
        </Section>

        <Section id="scuole" titolo="Per le scuole" testo="Museo e Scuola è il programma che racchiude tutte le proposte educative, promosse dai Servizi educativi, dedicate alle scuole di ogni ordine e grado." cta="Approfondisci l’offerta educativa" to="#"
          deco={<Deco src="campanella.webp" className="left-[441px] top-[44px] size-[120px] hidden lg:block" />}>
          <Cards items={scuole} />
        </Section>

        <Marquee text="Scarica l'app del muba" to="/la-visita/da-dove-iniziare" />

        <Section id="visite-guidate" titolo="Visite guidate" testo="Ti accompagniamo alla scoperta del museo e della sua storia, attraverso percorsi condotti da operatori qualificati. Le visite offrono chiavi di lettura accessibili e approfondite, adattabili a pubblici diversi, per conoscere il MUBA, la bonifica e il territorio in modo diretto e condiviso." cta="Prenota una visita guidata" to="/la-visita/biglietti"
          deco={<Deco src="onde.webp" className="left-[47px] top-[284px] size-[84px] hidden lg:block" />}>
          <Cards items={visite} />
        </Section>

        <div id="ricercatori" className="scroll-mt-[100px]">
          <TornBand className="my-10">
            <div className="flex flex-col gap-4 max-w-[824px]">
              <h2 className="font-semplicita font-bold uppercase text-[44px] tracking-[-0.02em]">Per ricercatori e studiosi</h2>
              <p className="t-lg">Il museo offre supporto alla ricerca storica e documentaria sulla bonifica di Arborea. Contattaci per richiedere informazioni su accesso alle fonti, materiali e collaborazioni scientifiche.</p>
            </div>
            <Button href="/contatti" className="self-start">Richiedi informazioni</Button>
            <Deco src="libro.webp" className="left-[988px] top-[57px] size-[320px] hidden lg:block" />
          </TornBand>
        </div>

        <Section id="progetti-speciali" titolo="Progetti speciali" testo="Iniziative, eventi e attività sviluppate in collaborazione con enti, istituzioni, associazioni e partner culturali. Un insieme di proposte che nasce dall’incontro tra il museo e il territorio, per sperimentare nuovi linguaggi, creare occasioni di dialogo e ampliare il racconto del MUBA." cta="Esplora le collaborazioni" to="#"
          deco={<><Deco src="stella.webp" className="left-[30px] top-0 size-[160px] hidden lg:block" /><Deco src="cerchio.webp" className="left-[332px] top-[31px] size-[226px] hidden lg:block" /></>}>
          <Cards items={progetti} cols={3} />
        </Section>
      </main>
    </Layout>
  )
}
