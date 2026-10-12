import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Track, { Slide } from '../components/Track'
import FooterSlide from '../components/FooterSlide'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'

type Mostra = { img: string; titolo: string; data?: string; testo: string; cta: string }
const img = (p: string) => `/assets/mostre-temporanee/${p}.webp`

const inArrivo: Mostra[] = [
  { img: 'arrivo', titolo: 'Il giorno dell’arrivo', data: 'Dal 17 Aprile al 15 Maggio 2026', testo: 'La mostra ricostruisce attraverso immagini, voci e documenti il momento dell’arrivo dei pionieri e l’inizio della trasformazione del territorio.', cta: 'Scopri tutto sulla mostra' },
  { img: 'terra', titolo: 'La terra oggi', data: 'Dal 5 Maggio al 25 Maggio 2026', testo: 'Il percorso presenta materiali, dati e testimonianze che raccontano l’evoluzione dell’agricoltura e le nuove prospettive del territorio.', cta: 'Scopri tutto sulla mostra' },
  { img: 'valigie', titolo: 'Valigie di cartone', data: 'Dal 6 Giugno al 21 Giugno', testo: 'La mostra presenta oggetti, testimonianze e documenti personali che raccontano il viaggio dei pionieri e l’inizio della nuova comunità.', cta: 'Scopri tutto sulla mostra' },
]
const altre: Mostra[] = [
  { img: 'donne', titolo: 'Le donne della bonifica', testo: 'Attraverso fotografie, oggetti quotidiani e testimonianze, emerge il contributo femminile alla costruzione della comunità: dal lavoro nei poderi alla cura delle famiglie, fino alla vita sociale e cooperativa del territorio.', cta: 'Esplora la mostra' },
  { img: 'moda', titolo: 'Moda dei coloni', testo: 'Un percorso che esplora l’abbigliamento e lo stile di vita dei coloni arrivati ad Arborea durante la bonifica.', cta: 'Approfondisci i processi' },
]
const link = 'flex items-center justify-between gap-8 px-5 py-10 border-b-[1.5px] border-black text-[36px] leading-tight hover:bg-black hover:text-beige transition-colors'
const altri = [['Scopri tutte le mostre permanenti', '/il-programma/mostra-permanente'], ['Leggi le storie dei pionieri', '/il-muba/memoria'], ['Diventa un custode', '/i-custodi/membership']]

function Card({ m, left, top }: { m: Mostra; left: number; top: number }) {
  return (
    <article className="absolute w-[395px] h-[537px] border-[1.5px] border-black p-[30px] flex flex-col justify-end gap-10 text-beige overflow-hidden" style={{ left, top }}>
      <img src={img(m.img)} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_72%)]" />
      <div className="relative flex flex-col gap-2">
        <h3 className="t-lg">{m.titolo}</h3>
        {m.data && <p className="t-md">{m.data}</p>}
        <p className="t-md">{m.testo}</p>
      </div>
      {/* ponytail: link di dettaglio mostra non ancora disponibili */}
      <a href="#" className="relative t-md border-b-[1.5px] border-beige self-stretch pb-1 flex justify-between hover:opacity-70 transition-opacity"><span>{m.cta}</span><span aria-hidden>↗</span></a>
    </article>
  )
}

// Coordinate dal frame Figma 3191:21371: hero 0, altre mostre 1313, marquee 2252, in arrivo 2607, "scopri" 3679, footer 5119
export default function MostreTemporanee() {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={5119 + 1483}>
        <Slide x={0} w={5119}>
          <Deco src="cerchio.webp" className="left-[82px] top-[189px] size-[370px]" />
          <Deco src="mt-vecia-06.webp" className="left-[784px] top-[544px] size-[402px]" />
          <Deco src="mt-papaveri.webp" className="left-[538px] top-[639px] size-[379px]" />
          <Deco src="freccia-a.webp" className="left-[286px] top-[529px] size-[180px]" />
          <Deco src="freccia-b.webp" className="left-[9px] top-[419px] size-[181px]" />
          <div className="absolute left-[100px] top-[293px] w-[744px] flex flex-col gap-[54px]">
            <div className="flex flex-col gap-3">
              <ApertoLine />
              <h1 className="font-mostra font-bold uppercase text-[105px] leading-[0.9]">Mostre<br />temporanee</h1>
              <p className="t-lg">Il programma espositivo dedicato a progetti temporanei che nascono dall’incontro tra ricerca storica, memoria e sguardi di oggi.</p>
            </div>
            <Button variant="primary" href="/la-visita/biglietti" className="self-start">Prenota il tuo posto</Button>
          </div>

          {altre.map((m, i) => <Card key={m.titolo} m={m} left={1313 + i * 423} top={239} />)}

          <div className="absolute left-[2607px] top-[236px] flex items-center gap-5"><h2 className="h2">Mostre in arrivo</h2><img src="/assets/deco/mt-01.webp" alt="" aria-hidden className="size-14" /></div>
          {inArrivo.map((m, i) => <Card key={m.titolo} m={m} left={2607 + i * 423} top={329} />)}
          <Deco src="mt-pane.webp" className="left-[3365px] top-[759px] size-[289px] z-10" />

          <h2 className="absolute left-[4027px] top-[227px] w-[445px] font-mostra font-bold uppercase text-[76px] leading-none">Scopri di più sul MUBA</h2>
          <span aria-hidden className="absolute left-[4508px] top-[101px] h-[900px] w-[1.5px] bg-black" />
          <Deco src="vecia-nera.webp" className="left-[4020px] top-[379px] size-[458px]" />
          <div className="absolute left-[4525px] top-[214px] w-[594px] flex flex-col">
            {altri.map(([t, to]) => <Link key={t} to={to} className={link}><span>{t}</span><span aria-hidden>→</span></Link>)}
          </div>
        </Slide>
        <Slide x={2252} w={180} className="z-10 bg-beige border-x-[1.5px] border-black overflow-hidden">
          <Link to="/gli-eventi" aria-label="Nuove mostre presto disponibili" className="absolute inset-0 flex items-center justify-center hover:bg-black hover:text-beige transition-colors">
            <p className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-mostra font-extrabold uppercase text-[100px] leading-none">nuove mostre presto disponibili</p>
          </Link>
        </Slide>
        <FooterSlide x={5119} light />
      </Track>
    </>
  )
}
