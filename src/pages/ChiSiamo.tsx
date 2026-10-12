import Button from '../components/Button'
import Layout from '../components/Layout'
import Marquee from '../components/Marquee'

const A = '/assets/chi-siamo/'
// Immagine/GIF posizionata in assoluto sul canvas 1440x1024 (solo lg)
const P = ({ src, className = '' }: { src: string; className?: string }) => (
  <img src={A + src} alt="" aria-hidden className={`absolute object-cover pointer-events-none hidden lg:block ${className}`} />
)
const sec = 'relative lg:h-[1024px] overflow-hidden px-gutter py-16 lg:p-0 flex flex-col gap-8 lg:block'

export default function ChiSiamo() {
  return (
    <Layout>
      <main>
        <section className="relative lg:h-[1024px] overflow-hidden text-beige bg-black flex items-center px-gutter py-24 lg:pt-[240px] lg:items-start">
          <img src="/assets/home/hero-928c36.webp" alt="" className="absolute inset-y-0 left-1/2 w-screen max-w-none -translate-x-1/2 h-full object-cover" />
          <span className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(246deg,rgba(43,43,43,.05)_27%,#2b2b2b_98%)]" />
          <div className="relative w-full lg:w-[1134px] text-center flex flex-col gap-[18px]">
            <p className="t-lg">Dalla palude alla civiltà</p>
            <h1 className="font-mostra font-bold uppercase text-[min(95px,9vw)] leading-[0.86]">Una storia che nasce poco<br />più di 100 anni fa</h1>
          </div>
        </section>

        <section className={sec}>
          <img src={A + 'mulino-44dfe5.webp'} alt="" className="lg:absolute left-0 top-0 lg:w-[628px] lg:h-[1024px] object-cover w-full" />
          <P src="freccia-rossa.svg" className="left-[763px] top-[372px] w-[71px] h-[52px]" />
          <div className="lg:absolute left-[767px] top-[374px] lg:w-[603px] flex flex-col gap-[42px]">
            <h2 className="h2">Un museo civico al servizio della<br />memoria</h2>
            <p className="t-md max-w-[575px]">Il MUBA – Museo comunale della Bonifica di Arborea – opera come istituzione culturale al servizio della comunità.<br />Il suo compito è conservare, interpretare e valorizzare la storia della bonifica e della costruzione del territorio, riconoscendone il valore storico, sociale e identitario.</p>
          </div>
          <P src="ago-filo.webp" className="left-[1129px] top-[732px] size-[200px]" />
        </section>

        <section className={sec}>
          {['foto-b.webp', 'foto-c-7d754b.webp', 'foto-a.webp'].map((f, i) => (
            <img key={f} src={A + f} alt="" className="lg:absolute top-[171px] w-full lg:w-[395px] h-[413px] object-cover" style={{ left: [100, 522, 945][i] }} />
          ))}
          <P src="../vecia.webp" className="left-[1210px] top-[653.5px] size-[341px]" />
          <p className="t-md lg:absolute left-[100px] top-[678px] lg:w-[605px]">Il museo ha sede nell’ex Mulino, edificio storico legato allo sviluppo produttivo del comprensorio.<br />La struttura e le attrezzature conservate costituiscono parte integrante del patrimonio culturale del MUBA e rappresentano una fonte diretta di studio e documentazione.</p>
          <P src="freccia-12.webp" className="left-[378px] top-[777px] size-[200px]" />
          <P src="schizzo-14.webp" className="left-[992px] top-[624px] size-[200px]" />
        </section>

        <section className={sec}>
          <P src="foto-a.webp" className="left-[58px] top-[143px] w-[455px] h-[470px]" />
          <P src="foto-c-7d754b.webp" className="left-[200px] top-[497px] w-[476px] h-[489px]" />
          <P src="foto-b.webp" className="left-[558px] top-[536px] w-[453px] h-[468px]" />
          <P src="foto-a.webp" className="left-[925px] top-[534px] w-[458px] h-[472px]" />
          <p className="t-md lg:absolute left-[670px] top-[200px] lg:w-[671px]">Il MUBA considera la memoria un bene pubblico da curare con rigore e responsabilità.<br />Alla conservazione di documenti, immagini e testimonianze si affianca un lavoro di studio, interpretazione e restituzione, attraverso linguaggi e strumenti contemporanei.<br />La memoria non è solo custodita, ma resa accessibile e condivisibile.</p>
        </section>

        <section className={sec}>
          <h2 className="h2 lg:absolute left-[97px] top-[194px] lg:w-[603px]">Il territorio come patrimonio</h2>
          <div className="lg:absolute left-[734px] top-[199px] lg:w-[606px] flex flex-col gap-8">
            <p className="t-md">Il patrimonio del MUBA è profondamente legato al territorio e alle comunità che lo abitano. Il museo opera in dialogo costante con i luoghi, le persone e le istituzioni locali, rafforzando il proprio ruolo come presidio culturale e spazio di confronto.</p>
            <Button href="#" className="self-start">Visita il territorio</Button>
          </div>
          <P src="freccia-02.webp" className="left-[523px] top-[306px] size-[200px]" />
          <img src={A + 'territorio-7c648d.webp'} alt="" className="lg:absolute left-0 top-[511px] w-full h-[512px] object-cover" />
        </section>

        <Marquee text="Mussolinia di Sardegna" to="/il-muba/storia" />

        <section className={sec}>
          <h2 className="h2 lg:absolute left-[97px] top-[194px] lg:w-[551px]">La rete che supporta il muba</h2>
          <div className="lg:absolute left-[734px] top-[202px] lg:w-[606px] flex flex-col gap-8">
            <p className="t-md">Il MUBA sviluppa le proprie attività attraverso collaborazioni con enti pubblici, istituzioni culturali, associazioni e partner. Le partnership contribuiscono alla ricerca, alla valorizzazione del patrimonio e alla crescita del museo come rete culturale.</p>
            <Button href="/i-custodi/partner" className="self-start">Visualizza l’elenco completo</Button>
          </div>
          <div className="lg:absolute left-0 top-[512px] w-full flex flex-col lg:flex-row">
            {['rete-1.webp', 'rete-2.webp', 'rete-3-1d5f22.webp'].map(f => (
              <div key={f} className="relative lg:w-1/3 h-[512px]">
                <img src={A + f} alt="" className="absolute inset-0 size-full object-cover" />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,.7)_86%)]" />
              </div>
            ))}
          </div>
          <P src="logo-1.webp" className="left-[1100px] top-[855px] w-[200px] h-[93px]" />
          <P src="logo-2.webp" className="left-[149px] top-[875px] w-[182px] h-[73px]" />
          <P src="logo-3.webp" className="left-[600px] top-[842px] w-[240px] h-[119px]" />
        </section>
      </main>
    </Layout>
  )
}
