import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Marquee from '../components/Marquee'
import TornBand from '../components/TornBand'

const contatti = [
  ['pin.webp', 'Corso Italia 11, 09092 Arborea (OR), Italia'],
  ['telefono.webp', '0783 802005'],
  ['busta.webp', 'muba@comunearborea.it'],
]
const posizioni = [
  ['job-social.webp', 'Social media manager', 'Part-time'],
  ['job-curatore.webp', 'Curatore', 'Full time'],
  ['job-magazziniere.webp', 'Magazziniere', 'Full time'],
]
const stampa = [
  ['stampa-mostre.webp', 'Mostre temporanee', '/il-programma/mostre-temporanee'],
  ['stampa-notizie-29e19a.webp', 'Notizie', '/gli-eventi'],
  ['stampa-attivita-1597a5.webp', 'Attività', '/il-programma/attivita'],
]
const a = (p: string) => `/assets/deco/${p}`

export default function Contatti() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[160px] pb-[40px] flex flex-col gap-3">
          <ApertoLine />
          <h1 className="font-mostra font-bold uppercase text-[min(236px,16.4vw)] leading-[0.97]">Contatti</h1>
          <p className="t-lg max-w-[900px]">Il MUBA è un luogo vivo, fatto di persone, storie e relazioni.<br />Scrivici per informazioni, collaborazioni o semplicemente per entrare in contatto.</p>
          <Deco src="chat.webp" className="left-[1050px] top-[125px] size-[360px] hidden lg:block" />
        </section>

        <section className="px-gutter py-[90px] border-y-[1.5px] border-black flex flex-wrap justify-between gap-10">
          <h2 className="h2 w-[605px] max-w-full">Informazioni generali</h2>
          <ul className="flex flex-col gap-8">
            {contatti.map(([g, t]) => (
              <li key={t} className="flex items-center gap-4 w-[500px] max-w-full">
                <img src={a(g)} alt="" aria-hidden className="size-[60px] object-cover" />
                <span className="t-lg">{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <Marquee text="Prenota i tuoi biglietti" to="/la-visita/biglietti" />

        <section className="relative px-gutter pt-[90px] pb-[90px] flex flex-col items-center gap-16">
          <div className="relative w-full flex flex-wrap justify-between gap-10">
            <h2 className="h2">Lavora con noi</h2>
            <Deco src="cerchio.webp" className="left-[176px] -top-[97px] size-[270px] hidden lg:block" />
            <div className="w-[713px] max-w-full flex flex-col gap-5">
              <p className="t-lg">Unisciti al MUBA e aiutaci a raccontare il valore di questa terra.<br /><br />Cerchiamo persone curiose, motivate e sensibili alla storia, alla cultura e alla comunità di Arborea.</p>
              <Button href="#" className="self-start">Invia la tua candidatura spontanea</Button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h2 className="h2">Posizioni aperte</h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-[27px]">
              {posizioni.map(([img, t, tipo]) => (
                <article key={t} className="flex flex-col gap-3 w-[395px] max-w-full">
                  <div className="bg-black border-[1.5px] border-black flex justify-center"><img src={a(img)} alt="" className="size-[300px] object-cover" /></div>
                  <div className="flex flex-col gap-1"><h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">{t}</h3><p className="t-md">{tipo}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TornBand className="mt-[9px] mb-[167px]" pad="py-[18px]">
          <div className="relative flex flex-col gap-4 max-w-[1240px]">
            <h3 className="font-semplicita font-bold uppercase text-[44px] tracking-[-0.02em] leading-[1.09]">Sei uno studente universitario e cerchi un’esperienza formativa?</h3>
            <p className="t-lg max-w-[1000px]">Il MUBA accoglie studenti universitari interessati a un percorso di formazione, tirocinio o volontariato, all’interno di una realtà culturale viva e radicata nel territorio.<br /><br />Entra a far parte della nostra famiglia.</p>
          </div>
          <Button href="#" className="self-start">Scopri di più</Button>
          <Deco src="libro.webp" className="left-[888px] top-[140px] z-10 size-[408px] hidden lg:block" />
        </TornBand>

        <section className="relative px-gutter pt-[90px] pb-[195px] border-t-[1.5px] border-black flex flex-col items-center gap-16">
          <div className="relative w-full flex flex-wrap justify-between gap-10">
            <h2 className="h2">Ufficio stampa</h2>
            <Deco src="penna.webp" className="left-[328px] -top-[58px] size-[159px] hidden lg:block" />
            <div className="w-[713px] max-w-full flex flex-col gap-5">
              <p className="t-lg">Benvenuti nell’ufficio stampa del MUBA.<br /><br />Qui trovi materiali, comunicati e contatti dedicati a giornalisti, media e operatori culturali interessati al museo e alle sue attività.</p>
              <Button href="#" className="self-start">Scopri di più</Button>
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap justify-between gap-[27px]">
            {stampa.map(([img, t, to]) => (
              <Link key={t} to={to} className="relative w-[395px] max-w-full h-[300px] border-[1.5px] border-black p-[30px] flex items-end text-beige transition-opacity hover:opacity-90 active:opacity-80">
                <img src={a(img)} alt="" className="absolute inset-0 size-full object-cover" />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,rgba(43,43,43,.8)_72%)]" />
                <h3 className="relative font-mostra font-bold text-[28px] tracking-[-0.02em]">{t}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
