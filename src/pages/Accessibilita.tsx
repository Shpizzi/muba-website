import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Faq from '../components/Faq'
import SidebarPage from '../components/SidebarPage'
import TornBand from '../components/TornBand'

const H5 = ({ children, muted }: { children: string; muted?: boolean }) => <h3 className={`font-mostra font-bold text-[28px] leading-[33px] tracking-[-0.02em] ${muted ? 'text-muted' : ''}`}>{children}</h3>
const P = ({ children }: { children: React.ReactNode }) => <p className="t-lg max-w-[712px]">{children}</p>

const gruppi: [string, string[]][] = [
  ['Visitatori ciechi o ipovedenti', ['Accessibilità degli spazi', 'Supporti alla visita', 'Preparare la visita']],
  ['Visitatori sordi o con problemi di udito (ipoacusia)', ['Contenuti visivi', 'Visite guidate', 'assistenza in loco']],
  ['Visitatori neurodivergenti', ['Ambiente di visita', 'Flessibilità dei tempi', 'Preparazione anticipata']],
  ['Visitatori in sedie a rotelle e con disabilità fisiche', ['Accesso agli spazi', 'Servizi', 'Supporto dedicato']],
  ['Visitatori con disabilità nascoste', ['Accoglienza discreta', 'Supporto personalizzato', 'Dialogo aperto']],
]

export default function Accessibilita() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[126px] pb-[40px] flex flex-col gap-3">
          <ApertoLine />
          <img src="/assets/deco/scarabocchio.svg" alt="" aria-hidden className="absolute left-[654.5px] top-[273px] hidden xl:block" />
          <h1 className="relative font-mostra font-bold uppercase text-[min(185px,12.8vw)] leading-[1]">Accessibilità</h1>
          <p className="t-md max-w-[900px] mt-1.5">Al Museo della Bonifica di Arborea crediamo che la cultura debba essere accessibile a tutte e tutti.<br />Per questo lavoriamo per rendere il museo uno spazio accogliente, comprensibile e fruibile anche da persone con disabilità o esigenze specifiche.</p>
        </section>

        <TornBand className="my-10">
          <div className="flex flex-col gap-4 max-w-[1240px]">
            <h2 className="font-semplicita font-bold uppercase text-[44px] tracking-[-0.02em]">Il MUBA è aperto a tutti</h2>
            <p className="t-lg">Il Museo della Bonifica di Arborea è aperto a tutti. Il nostro impegno riguarda gli spazi fisici, i contenuti, i servizi e gli strumenti digitali.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/la-visita/biglietti/prenota">Prenota la tua visita</Button>
            <Button variant="primary" href="#" className="border-2">Scopri le agevolazioni</Button>
          </div>
        </TornBand>

        <SidebarPage items={[['Arriva al museo', 'arrivo'], ['Al museo', 'museo'], ['Programmi', 'programmi']]}>
          <div className="relative flex flex-col gap-[46px] pb-[60px]">
            <Deco src="auto.webp" className="right-0 -top-[8px] size-[120px] hidden lg:block" />
            <section id="arrivo" className="flex flex-col gap-5 scroll-mt-6">
              <H5>Arrivare al museo</H5>
              <P>Il Museo della Bonifica di Arborea è situato in una zona facilmente raggiungibile.<br />Sono disponibili indicazioni chiare per l’accesso e, quando possibile, percorsi agevolati per persone con mobilità ridotta.<br /><br />Se hai esigenze particolari o desideri informazioni aggiuntive prima della visita, ti invitiamo a contattarci: il nostro staff è a disposizione per aiutarti a organizzare l’esperienza nel modo più adatto a te.</P>
            </section>
            <section id="museo" className="flex flex-col gap-5 scroll-mt-6">
              <H5>Al museo</H5>
              <p className="t-lg">Gli spazi del museo sono pensati per favorire un’esperienza di visita serena e inclusiva.<br />Laddove possibile, gli ambienti sono accessibili anche a persone in sedia a rotelle o con difficoltà motorie.<br /><br />Il personale del museo è formato per accogliere visitatori con esigenze diverse e per offrire supporto durante la visita.</p>
              <div className="flex gap-5">
                <img src="/assets/deco/come-hero.webp" alt="" className="flex-1 min-w-0 h-[285px] object-cover" />
                <img src="/assets/deco/acc-2.webp" alt="" className="flex-1 min-w-0 h-[285px] object-cover" />
              </div>
            </section>
            <section id="programmi" className="relative flex flex-col gap-5 scroll-mt-6">
              <H5>Programmi</H5>
              <img src="/assets/deco/ancora-programmi.svg" alt="" aria-hidden className="absolute left-[54px] top-[30px] pointer-events-none hidden lg:block" />
              <p className="t-lg">Il museo propone attività, visite guidate e laboratori che possono essere adattati a diversi pubblici, incluse scuole, gruppi e associazioni.<br /><br />Se rappresenti un gruppo con esigenze specifiche, contattaci per costruire insieme un’esperienza di visita accessibile e significativa.</p>
            </section>
            {gruppi.map(([titolo, voci]) => (
              <section key={titolo} className="flex flex-col gap-5">
                <H5 muted>{titolo}</H5>
                <ul className="flex flex-col gap-5">
                  {voci.map(v => (
                    <li key={v}><a href="#" className="group flex items-center justify-between pb-1 border-b-[1.5px] border-black t-lg">
                      {v}<span aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </a></li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </SidebarPage>

        <Faq />
      </main>
    </Layout>
  )
}
