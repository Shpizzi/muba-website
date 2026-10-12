import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Track, { Slide } from '../components/Track'
import FooterSlide from '../components/FooterSlide'
import Arrow from '../components/Arrow'
import Deco from '../components/Deco'

const img = (p: string) => `/assets/reperto/${p}.webp`
const scheda = [['Data', '24 Novembre 1927'], ['Autore', 'Giulio Dolcetta'], ['Categoria', 'Stabilimento idroelettrico'], ['Dimensione', '22x22 cm']]
const anni = ['1918', '1928', '1930', '1934', '1944', '1950', 'OGGI']
const risorse = ['Presentazione', 'Catalogo PDF']

// Coordinate dal frame Figma 3191:22500: hero 0, dettagli 1440, marquee 2869, storia 3049, audio 4478, risorse 5918, footer 7358 (chiaro)
export default function Reperto() {
  const [anno, setAnno] = useState(anni[0])
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={7358 + 1483}>
        <Slide x={0}>
          <Link to="/la-visita/museo-digitale" className="absolute left-[100px] top-[217px] flex items-center gap-3 t-md h-[41px] hover:opacity-70 transition-opacity"><Arrow className="rotate-180" />Torna indietro</Link>
          <div className="absolute left-[100px] top-[293px] w-[712px] flex flex-col gap-8">
            <div className="flex flex-col gap-7">
              <h1 className="h1-bold -tracking-[0.02em]">Idrovora di luri</h1>
              <dl className="flex flex-col gap-1 font-mostra text-[28px] tracking-[-0.02em]">
                {scheda.map(([k, v]) => <div key={k} className="flex gap-7"><dt className="font-bold">{k}</dt><dd className="font-light">{v}</dd></div>)}
              </dl>
            </div>
            <p className="t-lg">L’Idrovora di Luri è una struttura fondamentale per la bonifica della piana di Terralba. Un tempo, quest’area era una vasta zona paludosa, infestata dalla malaria, che ostacolava gravemente lo sviluppo economico e sociale del territorio. Oggi, invece, si presenta come una terra fertile e operosa, frutto di un imponente intervento di trasformazione ambientale.</p>
          </div>
          <img src={img('hero')} alt="Idrovora di Luri" className="absolute left-[840px] top-[388px] w-[600px] h-[556px] object-cover" />
          <img src="/assets/reperto/rep-scribble-hero.svg" alt="" aria-hidden className="absolute left-[85px] top-[306px] w-[366px] h-[52px] pointer-events-none" />
          <Deco src="rep-schizzo04.webp" className="left-[728px] top-[785px] size-[228px]" />
          <Deco src="rep-freccia12.webp" className="left-[921px] top-[162px] size-[306px]" />
        </Slide>

        <Slide x={1440}>
          <img src={img('dettaglio-1')} alt="" loading="lazy" className="absolute left-[100px] top-[146px] w-[600px] h-[556px] object-cover" />
          <img src={img('dettaglio-2')} alt="" loading="lazy" className="absolute left-[734px] top-[424px] w-[600px] h-[556px] object-cover" />
          <img src="/assets/reperto/rep-squiggle.svg" alt="" aria-hidden className="absolute left-[727px] top-[257px] w-[40px] h-[18.5px] pointer-events-none" />
          <Deco src="rep-freccia12.webp" className="left-[867px] top-[118px] size-[306px]" />
          <Deco src="rep-freccia12.webp" className="left-[234px] top-[702px] size-[306px]" />
        </Slide>

        <Slide x={2869} w={180} className="z-10 bg-beige border-x-[1.5px] border-black overflow-hidden">
          <Link to="/la-visita/museo-digitale" aria-label="Idrovora di luri" className="absolute inset-0 flex items-center justify-center hover:bg-black hover:text-beige transition-colors">
            <p className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-mostra font-extrabold uppercase text-[100px] leading-none">Idrovora di luri · Idrovora di luri</p>
          </Link>
        </Slide>

        <Slide x={3049} className="overflow-hidden">
          <img src="/assets/reperto/ripped-paper.webp" alt="" aria-hidden className="absolute left-[-50px] top-0 w-[545px] h-[1024px] pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[495px] text-beige flex flex-col justify-center gap-10 pl-[100px]">
            <h2 className="h5">Tocca ed esplora la storia</h2>
            <div className="flex flex-col items-end gap-5 w-[263px]">
              {anni.map(a => (
                <button key={a} onClick={() => setAnno(a)} aria-pressed={a === anno} className="flex items-center gap-2 font-bold text-[96px] leading-[70px] tracking-[-0.05em] hover:opacity-80">
                  {a === anno && <i className="size-[19px] rounded-full bg-beige" />}{a}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute left-[523px] top-[180px] w-[817px] flex flex-col gap-[112px]">
            <div className="flex flex-col gap-3">
              <img src="/assets/reperto/rep-sq-title.svg" alt="" aria-hidden className="w-[80px] h-[36px]" />
              <div className="w-[848px] border-b-[1.5px] border-black pb-[26px]"><h2 className="h2">Il progetto di bonifica</h2></div>
              <p className="t-lg mt-[21px]"><span className="mr-[18px] inline-block t-sm uppercase font-medium text-muted">Progetto</span>Dopo la Prima Guerra Mondiale, lo Stato italiano avvia piani di risanamento delle aree paludose dell’Oristanese. La zona, colpita dalla malaria e quasi disabitata, viene individuata come territorio strategico per un grande intervento di bonifica integrale.</p>
            </div>
            <img src={img('progetto')} alt="" loading="lazy" className="w-full h-[377px] object-cover" />
          </div>
        </Slide>

        <Slide x={4478} className="overflow-hidden">
          <div className="absolute left-[100px] top-[354px] w-[500px] flex flex-col gap-12">
            <div className="flex flex-col gap-1">
              <p className="h4">Parla ex operaio</p>
              <h2 className="h2">L’idrovora dagli occhi di benito</h2>
            </div>
            <p className="t-lg">Ascolta la testimonianza di Benito Urgu, ex operaio e gestore delle idrovore. Scopri il vero funzionamento e l’importanza di questi edifici</p>
          </div>
          <div className="absolute left-[628px] top-[295px] w-[712px] h-[469px] border-[1.5px] border-black">
            <img src={img('audio')} alt="" loading="lazy" className="size-full object-cover" />
            {/* ponytail: player audio non ancora collegato */}
            <button aria-label="Ascolta la testimonianza" className="absolute left-1/2 top-[calc(50%-16px)] -translate-x-1/2 -translate-y-1/2 text-beige hover:scale-110 transition-transform">
              <svg width="75" height="87" viewBox="0 0 75 87" fill="currentColor" aria-hidden><path d="M0 0l75 43.3L0 86.6z" /></svg>
            </button>
          </div>
          <Deco src="mt-pane.webp" className="left-[440px] top-[742px] size-[240px]" />
        </Slide>

        <Slide x={5918} className="bg-black text-beige overflow-hidden">
          <Deco src="rep-vecia-beige.webp" className="left-[100px] top-[65px] size-[500px]" />
          <div className="absolute left-[100px] bottom-[63px] w-[594px] flex flex-col gap-12">
            <h2 className="h2">Scarica le risorse</h2>
            <div className="flex flex-col">
              {/* ponytail: file non forniti, href provvisorio */}
              {risorse.map(r => (
                <a key={r} href="#" className="flex items-center justify-between gap-8 px-5 py-10 border-b-[1.5px] border-beige text-[36px] leading-tight hover:bg-beige hover:text-black transition-colors"><span>{r}</span><Arrow /></a>
              ))}
            </div>
          </div>
          <img src={img('risorsa-3')} alt="" loading="lazy" className="absolute left-[720px] top-[686px] w-[558px] h-[506px] object-cover border-2 border-beige" />
          <img src={img('dettaglio-2')} alt="" loading="lazy" className="absolute left-[694px] top-[-117px] w-[712px] h-[580px] object-cover border-2 border-beige" />
          <img src={img('risorsa-2')} alt="" loading="lazy" className="absolute left-[917px] top-[326px] w-[496px] h-[523px] object-cover border-2 border-beige" />
        </Slide>

        <FooterSlide x={7358} light />
      </Track>
    </>
  )
}
