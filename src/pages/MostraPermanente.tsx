import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Track, { Slide } from '../components/Track'
import FooterSlide from '../components/FooterSlide'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Arrow from '../components/Arrow'

const sezioni = [
  { img: 'c1', title: 'Collezione archeologica', text: 'La collezione archeologica documenta le presenze umane nel territorio di Arborea prima della bonifica, offrendo un inquadramento storico delle trasformazioni successive.', cta: 'Esplora la collezione' },
  { img: 'c2', title: 'Archeologia industriale', text: 'Il percorso espositivo che racconta la bonifica di Arborea e la trasformazione del territorio, attraverso oggetti, documenti, architetture e testimonianze.', cta: 'Approfondisci i processi' },
  { img: 'c3', title: 'Nascita di Arborea', text: 'La sezione storica racconta la realizzazione della bonifica e la fondazione di Arborea attraverso pannelli, supporti multimediali e modelli interattivi.', cta: 'Ripercorri la storia' },
  { img: 'c4', title: 'Archivio della bonifica', text: 'La sezione conserva materiali documentari e fotografici che restituiscono le fasi e gli esiti della trasformazione del territorio.', cta: 'Consulta i documenti' },
  { img: 'c5', title: 'Architetture Industriali', text: 'La sezione analizza gli edifici produttivi del comprensorio, evidenziandone funzioni, caratteristiche architettoniche e ruolo nel sistema della bonifica.', cta: 'Esplora le architetture' },
]
const link = 'flex items-center justify-between gap-8 px-5 py-10 border-b-[1.5px] border-black text-[36px] leading-tight hover:bg-black hover:text-beige transition-colors'
const altri = [['Scopri le mostre temporanee', '/il-programma/mostre-temporanee'], ['Leggi le storie dei pionieri', '/il-muba/memoria'], ['Diventa un custode', '/i-custodi/membership']]

// Coordinate assolute dal frame Figma 3191:21303 (hero 0, card 1278, "scopri di più" 2880, footer 4752)
export default function MostraPermanente() {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={4752 + 1483}>
        <Slide x={0} w={4752}>
          <div className="absolute left-[100px] top-[293px] w-[744px] flex flex-col gap-[13px]">
            <ApertoLine />
            <div className="relative">
              <Deco src="cerchio.webp" className="-left-[10px] -top-[114px] size-[370px]" />
              <h1 className="relative font-mostra font-bold uppercase text-[105px] leading-[1.05]">Mostre permanenti</h1>
            </div>
            <p className="t-lg">La mostra permanente si sviluppa negli spazi dell’ex Mulino e si articola in sezioni tematiche che consentono una lettura storica, tecnica e sociale della bonifica, mettendo in relazione materiali d’archivio, apparati industriali e strumenti di interpretazione contemporanei.</p>
            <div className="flex gap-[30px] mt-2">
              <Button variant="primary" href="/la-visita/biglietti/prenota" className="border-2">Prenota il tuo posto</Button>
              <Button href="/i-custodi/membership">Supporta il museo</Button>
            </div>
          </div>
          <Deco src="freccia08.webp" className="left-[286px] top-[610px] size-[180px]" />
          <Deco src="freccia07.webp" className="left-[9px] top-[500px] size-[181px]" />
          <Deco src="vecia-nera.webp" className="left-[734px] top-[608px] size-[402px]" />

          <Deco src="stella.webp" className="left-[2428px] top-[116px] size-[156px]" />
          <Deco src="mt-01.webp" className="left-[2012px] top-[869px] size-[240px]" />
          {sezioni.map((s, i) => (
            <article key={s.title} className="absolute top-[239px] w-[395px] h-[537px] border-[1.5px] border-black overflow-hidden flex flex-col justify-end gap-10 p-[30px] text-beige" style={{ left: 1278 + i * 423 }}>
              <img src={`/assets/mostra-permanente/${s.img}.webp`} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(180deg, rgba(43,43,43,0) 0%, #2B2B2B 72%)' }} />
              <div className="relative flex flex-col gap-2">
                <h2 className="t-lg">{s.title}</h2>
                <p className="t-md">{s.text}</p>
              </div>
              <a href="#" className="relative t-md self-start inline-flex items-center gap-2 border-b-[1.5px] border-beige hover:opacity-70 transition-opacity">{s.cta} <Arrow className="size-4" /></a>
            </article>
          ))}

          <h2 className="absolute left-[3508px] top-[226px] w-[445px] font-mostra font-bold uppercase text-[76px] leading-none">Scopri di più sul MUBA</h2>
          <Deco src="vecia-nera.webp" className="left-[3560px] top-[454px] size-[458px]" />
          <span aria-hidden className="absolute left-[4095px] top-[101px] h-[900px] w-[1.5px] bg-black" />
          <div className="absolute left-[4112px] top-[214px] w-[594px] flex flex-col">
            {altri.map(([t, to]) => <Link key={t} to={to} className={link}><span>{t}</span><span aria-hidden>→</span></Link>)}
          </div>
        </Slide>
        <FooterSlide x={4752} light />
      </Track>
    </>
  )
}
