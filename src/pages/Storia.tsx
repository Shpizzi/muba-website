import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'

const a = (p: string) => `/assets/storia/${p}`
const menu = [['IL muba', '/il-muba'], ['La Visita', '/la-visita'], ['Il programma', '/il-programma'], ['Gli eventi', '/gli-eventi'], ['I custodi', '/i-custodi']]

export default function Storia() {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="relative min-h-[1024px] px-gutter flex items-center overflow-hidden text-beige">
          <img src="/assets/home/hero-928c36.webp" alt="" className="absolute inset-0 size-full object-cover" />
          <span className="absolute inset-0 bg-[linear-gradient(246deg,rgba(43,43,43,.05)_27%,#2b2b2b_98%)]" />
          <div className="relative w-[608px] max-w-full flex flex-col gap-8">
            <ApertoLine />
            <div className="flex flex-col gap-[18px]">
              <h1 className="font-mostra font-bold uppercase text-[95px] leading-[81.8px]">Una storia che continua a lavorare</h1>
              <p className="t-lg">Un luogo da ascoltare che racconta la terra, il lavoro<br />e le persone che hanno costruito Arborea.</p>
            </div>
          </div>
        </section>

        {/* Una comunità */}
        <section className="relative min-h-[1024px] px-gutter pt-[355px] border-t-[1.5px] border-black overflow-hidden">
          <img src="/assets/storia/scarabocchio-rosso.svg" alt="" aria-hidden className="absolute left-[96px] top-[353px] w-[71px] hidden lg:block" />
          <div className="relative flex flex-col gap-[42px] w-[606px] max-w-full">
            <h2 className="h2">Una comunità che racconta se stessa</h2>
            <div className="flex flex-col gap-8">
              <p className="t-md">Il MUBA nasce da una storia collettiva.  Racconta Arborea e la sua bonifica con uno sguardo aperto, dove gli abitanti diventano narratori e i visitatori non sono spettatori, ma compagni di viaggio.</p>
              <Button href="/il-muba/memoria" className="self-start">Leggi le memorie</Button>
            </div>
          </div>
          <img src={a('comunita-1dd80b.webp')} alt="" className="absolute left-[945px] top-0 w-[567px] h-full object-cover hidden lg:block" />
          <Deco src="vecia-nera.webp" className="left-[476px] top-[602px] size-[428px] hidden lg:block" />
        </section>

        {/* Mostra permanente */}
        <section className="relative min-h-[1024px] border-t-[1.5px] border-black overflow-hidden">
          <Link to="/il-programma/mostra-permanente" aria-label="Mussolinia di Sardegna" className="absolute left-[70px] top-0 h-full w-[180px] border-x-[1.5px] border-black overflow-hidden hidden lg:block hover:bg-black hover:text-beige transition-colors z-10">
            <div aria-hidden className="absolute left-0 top-full w-[1024px] h-[180px] origin-top-left -rotate-90 overflow-hidden flex items-center">
              <div className="marquee-track flex w-max">
                {[0, 1, 2, 3].map(i => <span key={i} className="flex">{[0, 1].map(j => <span key={j} className="font-mostra font-bold uppercase text-[136px] leading-[100px] px-4 whitespace-nowrap">Mussolinia di Sardegna</span>)}</span>)}
              </div>
            </div>
          </Link>
          <div className="relative px-gutter lg:px-0 lg:h-[1024px]">
            <Deco src="../storia/img-1.webp" className="left-[311px] top-[172px] w-[289px] h-[290px] hidden lg:block" />
            <Deco src="../storia/img-2.webp" className="left-[628px] top-[172px] w-[395px] h-[290px] hidden lg:block" />
            <Deco src="../storia/img-3.webp" className="left-[1051px] top-[172px] w-[289px] h-[290px] hidden lg:block" />
            <Deco src="../home/gotto.webp" className="left-[283px] top-[696px] size-[296px] hidden lg:block" />
            <Deco src="../storia/pane.webp" className="left-[508px] top-[576px] size-[240px] hidden lg:block" />
            <div className="lg:absolute lg:left-[840px] lg:top-[539px] w-[500px] max-w-full flex flex-col gap-8 py-10 lg:py-0">
              <p className="t-md whitespace-pre-line">{'La mostra permanente si sviluppa negli spazi dell’ex Mulino e accompagna il visitatore dentro la storia della bonifica e della città di Arborea.\nTra architetture, territorio e testimonianze, il percorso intreccia pannelli, filmati, plastici e archivi digitali. \nUn racconto fatto di immagini, voci e materia, dove il passato diventa esperienza.'}</p>
              <Button href="/il-programma/mostra-permanente" className="self-start">Visita la mostra</Button>
            </div>
          </div>
        </section>

        {/* Patrimonio */}
        <section className="bg-black text-beige px-gutter min-h-[1024px] py-[160px] flex flex-col items-center gap-[40px] border-t-[1.5px] border-black">
          <div className="w-[818px] max-w-full flex flex-col gap-3">
            <h2 className="h2">Il patrimonio: Custodire, intrecciare, rinnovare</h2>
            <p className="t-md whitespace-pre-line">{'Il patrimonio del MUBA non è fatto solo di oggetti. È composto da storie, immagini, documenti, memorie personali e collettive.\nDall’archivio storico alle testimonianze orali, dalla ricerca alle memorie condivise, il museo cura e rende accessibile un patrimonio che continua a crescere, grazie al contributo di chi questa storia la vive e la riconosce come propria.'}</p>
          </div>
          <img src={a('img-2.webp')} alt="" className="w-[817px] max-w-full h-[333px] object-cover" />
          <Button href="/il-muba/archivio-e-ricerca">Esplora il patrimonio</Button>
        </section>

        {/* Chiusura */}
        <section className="relative min-h-[1024px] px-gutter flex flex-wrap items-center justify-between gap-10 py-[100px] overflow-hidden">
          <div className="w-[606px] max-w-full flex flex-col gap-8 lg:self-start lg:mt-[199px]">
            <p className="t-lg whitespace-pre-line">{'Questa storia non è finita\n Il MUBA è un luogo da attraversare più volte. Ogni visita aggiunge uno sguardo, ogni storia apre una possibilità.'}</p>
            <Button variant="primary" href="/il-programma/mostra-permanente" className="self-start border-2">Visita la mostra</Button>
          </div>
          <nav className="w-[528px] max-w-full flex flex-col gap-6">
            {menu.map(([l, to], i) => (
              <div key={l} className="flex flex-col gap-6">
                {i > 0 && <hr className="border-t-[1.5px] border-black w-screen max-w-none" />}
                <Link to={to} className="h1-bold">{l}</Link>
              </div>
            ))}
          </nav>
          <Deco src="../storia/freccia.webp" className="left-[217px] top-[469px] size-[316px] hidden lg:block" />
        </section>
      </main>
    </Layout>
  )
}
