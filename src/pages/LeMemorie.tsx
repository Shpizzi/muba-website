import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Faq from '../components/Faq'

const img = (f: string) => `/assets/le-memorie/${f}`
const famiglie = [
  ['manca-3987a5.webp', 4, 'Manca', 'La famiglia Manca ricorda i primi anni della bonifica. Tra sacrifici e orgoglio costruisce futuro per i figli.'],
  ['pinna-4e1fac.webp', 2, 'Pinna', 'La famiglia Pinna racconta la vita nei campi bonificati. Tra lavoro e comunità cresce Arborea giorno dopo giorno.'],
  ['sanna-383f7f.webp', 9, 'Sanna', 'I Sanna custodiscono memorie di fatica e speranza. Dalla terra nasce una storia condivisa che unisce generazioni.'],
  ['zanella-45e19c.webp', 2, 'Zanella', 'Gli Zanella arrivano dal Veneto con sogni concreti. Tra stalle e raccolti nasce una nuova casa stabile nel tempo.'],
  ['cadeddu-6d507f.webp', 9, 'Cadeddu', 'La famiglia Cadeddu intreccia tradizione sarda e lavoro agricolo. Generazioni crescono nella cooperazione.'],
  ['frau-c64782.webp', 9, 'Frau', 'I Frau raccontano l’infanzia tra canali e campi aperti. Arborea diventa radice e identità tramandata nel tempo.'],
  ['pupin.webp', 2, 'Pupin', 'I Pupin arrivano dal Nord con coraggio silenzioso. Tra campi drenati e stalle nuove costruiscono stabilità duratura.'],
  ['panetto-3de385.webp', 9, 'Panetto', 'La famiglia Panetto cresce insieme alla bonifica. L’impegno quotidiano rafforza legami e senso di comunità nel tempo.'],
  ['nalli.webp', 9, 'Nalli', 'I Nalli intrecciano radici diverse nella terra fertile. Tra lavoro e memoria nasce un’identità condivisa e solida.'],
] as const
const filtri = ['Periodo storico', 'origini', 'Famiglie', 'tema']
const btn = 'bg-beige border-[1.5px] border-black text-black px-8 py-2.5 font-mostra font-bold uppercase text-2xl transition-colors hover:border-black-tint-10 hover:bg-white/60 active:border-black-shade-30 active:bg-black active:text-beige'

export default function LeMemorie() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[163px] pb-[220px] min-h-[476px]">
          <div className="w-[815px] max-w-full flex flex-col gap-6">
            <ApertoLine />
            <div className="flex flex-col gap-[18px]">
              <h1 className="font-mostra font-bold uppercase text-[89px] leading-[60px]">Esplora le memorie</h1>
              <p className="t-md whitespace-pre-line">{'Voci, ricordi ed esperienze personali restituiscono il lato umano della bonifica \ne della vita ad Arborea. Accanto ai documenti e ai fatti storici, queste testimonianze \ncompletano il racconto, dando spazio a chi ha vissuto e tramandato questa storia.\nQui la memoria diventa ascolto e condivisione.'}</p>
            </div>
          </div>
          <div className="hidden lg:block">
            <Deco src="vecia-nera.webp" className="left-[878px] -top-[53px] size-[568px]" />
            <Deco src="occhiali.webp" className="left-[953px] top-[48px] size-[331px]" />
            <img src={img('microfono.webp')} alt="" aria-hidden className="absolute left-[840px] top-[244px] size-[234px] z-10 object-cover pointer-events-none" />
          </div>
        </section>

        <section className="relative bg-black text-beige px-gutter pt-9 pb-[50px] border-t-[1.5px] border-beige">
          <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b-[1.5px] border-beige">
            <div className="flex flex-col gap-[19px]">
              <h2 className="font-mostra font-bold text-[28px] leading-[34px] tracking-[-0.02em]">Tutti i filtri</h2>
              <div className="flex flex-wrap gap-3">{filtri.map(f => <button key={f} type="button" className={btn}>{f}</button>)}</div>
            </div>
            <button type="button" className={btn}>cerca</button>
          </div>
          <div className="relative mt-[50px]">
            <div className="max-h-[min(1202px,80vh)] overflow-y-auto overscroll-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
              {famiglie.map(([f, n, nome, testo]) => (
                <article key={nome} className="relative w-full h-[537px] border-[1.5px] border-beige p-[30px] flex flex-col justify-end gap-10">
                  <img src={img(f)} alt="" className="absolute inset-0 size-full object-cover" />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_72%)]" />
                  <div className="relative flex flex-col gap-2">
                    <p className="t-md">{n} testimonianze</p>
                    <h3 className="t-lg">{nome}</h3>
                    <p className="t-md">{testo}</p>
                  </div>
                  <a href="#" className="relative t-md flex justify-between border-b-[1.5px] border-beige pb-1">Leggi la loro storia<span aria-hidden>↗</span></a>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[114px] bg-[linear-gradient(0deg,rgba(43,43,43,0),#2b2b2b)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] bg-[linear-gradient(180deg,rgba(43,43,43,0),#2b2b2b)]" />
          </div>
        </section>

        <div id="faq"><Faq /></div>
      </main>
    </Layout>
  )
}
