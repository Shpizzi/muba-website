import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Faq from '../components/Faq'
import BannerMuseo from '../components/BannerMuseo'

const prezzi: [string, string?, string?][] = [
  ['Adulti', undefined, '10€'], ['Ridotto', '<20 anni', '8€'], ['Disabilità', 'compreso accompagnatore', '7€'], ['Studenti', 'Da verificare', '0€'], ['Membri', undefined, '0€'],
]
const orari = ['Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']

const Riga = ({ l, sub, v }: { l: string; sub?: string; v: string }) => (
  <div className="flex items-center justify-between t-md">
    <span>{l}{sub && <span className="block text-muted">{sub}</span>}</span><span>{v}</span>
  </div>
)

export default function LaVisita() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[69px] pb-[60px] min-h-[650px]">
          <div className="relative z-10 flex flex-col gap-[98px]">
            <div className="w-[505px] max-w-full flex flex-col gap-6">
              <ApertoLine />
              <div className="flex flex-col gap-[18px]">
                <h1 className="font-mostra font-bold uppercase text-[70px] leading-[60px]">Visita il Museo della Bonifica<br />di Arborea</h1>
                <p className="t-lg">Qui trovi tutte le informazioni utili per organizzare la tua visita: biglietti, orari, come arrivare e strumenti digitali per esplorare il museo prima, durante o dopo l’esperienza.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-7">
              <Button variant="primary" href="/la-visita/biglietti/prenota" className="border-2">Prenota la tua visita</Button>
              <Button href="#orari">Orari e mappa</Button>
              <Button href="/la-visita/accessibilita">Accessibilità</Button>
              <Button href="/la-visita/museo-digitale">Museo digitale</Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Deco src="nuvola.webp" className="left-[671px] top-[-81px] size-[371px]" />
            <Deco src="vecia-nera.webp" className="left-[772px] -top-[10px] size-[568px]" />
            <Deco src="occhiali.webp" className="left-[840px] top-[83px] size-[331px]" />
            <Deco src="schizzo-a.webp" className="left-[1084px] top-[201px] size-[312px]" />
            <Deco src="freccia-a.webp" className="left-[292px] top-[400px] size-[180px]" />
            <Deco src="freccia-b.webp" className="left-[13px] top-[403px] size-[181px]" />
          </div>
        </section>

        <section className="relative px-gutter pt-[111px] pb-[75px] border-t-[1.5px] border-black flex flex-wrap justify-between gap-10">
          <div className="w-[500px] max-w-full flex flex-col gap-[22px]">
            <h2 className="h2">Biglietti e costi</h2>
            <p className="t-md">Scopri le tipologie di biglietto disponibili e scegli quella più adatta alle esigenze della tua visita.<br /><br />Sono previste tariffe differenziate per adulti, bambini, gruppi e scuole. In questa sezione trovi tutte le informazioni su costi, eventuali riduzioni e modalità di acquisto.</p>
          </div>
          <div className="w-[605px] max-w-full flex flex-col gap-8">
            <div className="flex flex-col gap-4">{prezzi.map(([l, s, v]) => <Riga key={l} l={l} sub={s} v={v!} />)}</div>
            <Button href="/la-visita/biglietti/prenota" className="w-full">Acquista i biglietti online</Button>
          </div>
          <Deco src="biglietto.webp" className="left-[509px] top-[71px] size-[120px] hidden lg:block" />
          <Deco src="euro.webp" className="left-[1281px] top-[42px] size-[77px] hidden lg:block" />
        </section>

        <section id="orari" className="relative px-gutter py-[134px] border-t-[1.5px] border-black flex flex-wrap justify-between gap-10">
          <div className="w-[502px] max-w-full flex flex-col gap-[76px]">
            <div className="flex flex-col gap-[22px]">
              <h2 className="h2">Orari</h2>
              <p className="t-md">Organizza il tuo arrivo al museo in modo semplice.<br /><br />Consulta gli orari di apertura aggiornati, i giorni di chiusura e tutte le indicazioni per raggiungere il Museo della Bonifica di Arborea.</p>
            </div>
            <div className="flex flex-col gap-[11px]">
              <h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">Cosa comprende il MUBA</h3>
              <p className="t-md">Il MUBA non è solo un edificio ma è tutto il paese.<br />Utilizza anche la nostra mappa per orientarti una volta arrivato.</p>
              <a href="#" className="t-md self-start border-b-[1.5px] border-black">Scarica la mappa ↗</a>
            </div>
          </div>
          <div className="w-[605px] max-w-full flex flex-col gap-[15px]">
            <Riga l="Lunedì" v="Chiuso" />
            {orari.map(g => <Riga key={g} l={g} v="10.30 - 17.30" />)}
          </div>
          <Deco src="sveglia.webp" className="left-[277px] top-[76px] size-[120px] hidden lg:block" />
          <Deco src="schizzo-b.webp" className="left-[1157px] bottom-[80px] size-[240px] hidden lg:block" />
        </section>

        <BannerMuseo />

        <Faq />
      </main>
    </Layout>
  )
}
