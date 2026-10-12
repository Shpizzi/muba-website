import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Track, { Slide } from '../components/Track'
import FooterSlide from '../components/FooterSlide'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'

type Sez = { img: string; titolo: string; testo: string; cta: string }
const REPERTO = '/la-visita/museo-digitale/reperto'
const d = (p: string) => `/assets/museo-digitale/${p}.webp`

const collezione: Sez[] = [
  { img: d('archeologica'), titolo: 'Collezione archeologica', testo: 'La collezione archeologica documenta le presenze umane nel territorio di Arborea prima della bonifica, offrendo un inquadramento storico delle trasformazioni successive.', cta: 'Esplora la collezione' },
  { img: d('industriale'), titolo: 'Archeologia industriale', testo: 'Il percorso espositivo che racconta la bonifica di Arborea e la trasformazione del territorio, attraverso oggetti, documenti, architetture e testimonianze.', cta: 'Approfondisci i processi' },
  { img: d('nascita'), titolo: 'Nascita di Arborea', testo: 'La sezione storica racconta la realizzazione della bonifica e la fondazione di Arborea attraverso pannelli, supporti multimediali e modelli interattivi.', cta: 'Ripercorri la storia' },
  { img: d('archivio'), titolo: 'Archivio della bonifica', testo: 'La sezione conserva materiali documentari e fotografici che restituiscono le fasi e gli esiti della trasformazione del territorio.', cta: 'Consulta i documenti' },
  { img: d('architetture'), titolo: 'Architetture Industriali', testo: 'La sezione analizza gli edifici produttivi del comprensorio, evidenziandone funzioni, caratteristiche architettoniche e ruolo nel sistema della bonifica.', cta: 'Esplora le architetture' },
]
const temporanee: Sez[] = [
  { img: '/assets/mostre-temporanee/donne.webp', titolo: 'Le donne della bonifica', testo: 'Attraverso fotografie, oggetti quotidiani e testimonianze, emerge il contributo femminile alla costruzione della comunità: dal lavoro nei poderi alla cura delle famiglie, fino alla vita sociale e cooperativa del territorio.', cta: 'Esplora la mostra' },
  { img: '/assets/mostre-temporanee/moda.webp', titolo: 'Moda dei coloni', testo: 'Un percorso che esplora l’abbigliamento e lo stile di vita dei coloni arrivati ad Arborea durante la bonifica.', cta: 'Approfondisci i processi' },
]
const link = 'flex items-center justify-between gap-8 px-5 py-10 border-b-[1.5px] border-black text-[36px] leading-tight hover:bg-black hover:text-beige transition-colors'
const altri = [['Scopri tutte le mostre temporanee', '/il-programma/mostre-temporanee'], ['Leggi le storie dei pionieri', '/il-muba/memoria'], ['Diventa un custode', '/i-custodi/membership']]

const tab = (on: boolean) =>
  `absolute top-[273px] inline-flex whitespace-nowrap items-center justify-center px-8 py-2.5 border-[1.5px] font-mostra font-bold uppercase text-2xl leading-[1.2] ${on ? 'bg-red border-red text-beige' : 'bg-beige border-black text-black'}`

function Card({ s, left }: { s: Sez; left: number }) {
  return (
    <Link to={REPERTO} className="absolute top-[345px] w-[395px] h-[537px] border-[1.5px] border-black p-[30px] flex flex-col justify-end gap-10 text-beige overflow-hidden group" style={{ left }}>
      <img src={s.img} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_72%)]" />
      <div className="relative flex flex-col gap-2">
        <h3 className="t-lg">{s.titolo}</h3>
        <p className="t-md">{s.testo}</p>
      </div>
      <span className="relative t-md border-b-[1.5px] border-beige pb-1 flex justify-between group-hover:opacity-70 transition-opacity"><span>{s.cta}</span><span aria-hidden>↗</span></span>
    </Link>
  )
}

// Coordinate dal frame Figma 3191:22323: hero 0, collezione 1055, temporanee 3461, "scopri" 4320, footer 5760 (chiaro)
export default function MuseoDigitale() {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={5760 + 1483}>
        <Slide x={0} w={5760}>
          <Deco src="cerchi.webp" className="left-[81px] top-[247px] size-[320px]" />
          <Deco src="freccia-b.webp" className="left-[284px] top-[558px] size-[180px]" />
          <Deco src="freccia07.webp" className="left-[-38px] top-[427px] size-[249px]" />
          <div className="absolute left-[100px] top-[291px] w-[744px] flex flex-col gap-[33px]">
            <div className="flex flex-col gap-3">
              <ApertoLine />
              <h1 className="font-mostra font-bold uppercase text-[105px] leading-[0.9]">Museo digitale</h1>
              <p className="t-lg">Esplora il MUBA in versione digitale attraverso un percorso orizzontale che raccoglie spazi, contenuti e materiali d’archivio. Un’esperienza pensata per scoprire il museo da nuove prospettive.</p>
            </div>
            {/* ponytail: link archivio ipotizzato */}
            <Button variant="primary" href="/il-muba/memoria" className="self-start">Entra in archivio</Button>
          </div>

          <span className={tab(true)} style={{ left: 1055 }}>Collezione muba</span>
          {collezione.map((s, i) => <Card key={s.titolo} s={s} left={1055 + i * 423} />)}

          <Deco src="vecia-nera.webp" className="left-[2939px] -top-[26px] size-[507px]" />
          <Deco src="stella.webp" className="left-[3149px] top-[727px] size-[312px]" />

          <span className={tab(false)} style={{ left: 3461 }}>Mostre temporanee</span>
          {temporanee.map((s, i) => <Card key={s.titolo} s={s} left={3461 + i * 423} />)}

          <h2 className="absolute left-[4488px] top-[227px] w-[445px] font-mostra font-bold uppercase text-[76px] leading-none">Scopri di più sul MUBA</h2>
          <Deco src="gruppo.webp" className="left-[4843px] top-[446px] size-[286px]" />
          <span aria-hidden className="absolute left-[5149px] top-[101px] h-[900px] w-[1.5px] bg-black" />
          <div className="absolute left-[5166px] top-[214px] w-[594px] flex flex-col">
            {altri.map(([t, to]) => <Link key={t} to={to} className={link}><span>{t}</span><span aria-hidden>→</span></Link>)}
          </div>
        </Slide>
        <FooterSlide x={5760} light />
      </Track>
    </>
  )
}
