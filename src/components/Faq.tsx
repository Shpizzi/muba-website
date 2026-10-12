import { Link } from 'react-router-dom'
import Deco from './Deco'
import Marquee from './Marquee'

const faq = [
  ['Quanto dura la visita?', 'La visita completa al museo dura in media tra 60 e 90 minuti. È possibile scegliere percorsi più brevi o approfondimenti tematici in base al tempo a disposizione.'],
  ['È necessario prenotare?', 'La prenotazione è consigliata per gruppi e scuole. I visitatori singoli possono accedere negli orari di apertura, salvo disponibilità.'],
  ['Il museo è accessibile?', 'Sì, gli spazi sono accessibili alle persone con mobilità ridotta. Sono presenti percorsi facilitati e materiali di supporto per una visita inclusiva.'],
  ['Sono previste visite guidate?', 'Il museo propone visite guidate su prenotazione, dedicate a scuole, gruppi e associazioni, con approfondimenti sulla bonifica, l’architettura e la vita dei coloni.'],
  ['Cosa racconta il museo?', 'Il percorso espositivo racconta la storia della bonifica di Arborea, dalla trasformazione del territorio paludoso alla nascita della città, attraverso documenti, fotografie, oggetti e testimonianze.'],
]
const interessi = [
  ['Come arrivare', '/la-visita/come-arrivare'], ['Accessibilità', '/la-visita/accessibilita'], ['Servizi', '/la-visita'], ['Tour virtuale', '/la-visita/museo-digitale'], ['Guida', '/la-visita'],
]

const Row = ({ titolo, testo, children }: { titolo: string; testo: string; children: React.ReactNode }) => (
  <div className="w-full flex flex-wrap justify-between gap-10">
    <div className="w-[605px] max-w-full flex flex-col gap-6">
      <h2 className="h2 whitespace-pre-line">{titolo}</h2>
      <p className="t-md">{testo}</p>
    </div>
    <div className="w-[606px] max-w-full flex flex-col gap-6">{children}</div>
  </div>
)

// "Chiariamo i vostri dubbi" + marquee + "Ti potrebbe interessare anche..." (ripetuto in più pagine)
export default function Faq() {
  return (
    <section className="relative flex flex-col items-center gap-[113px] pt-[90px] pb-[90px]">
      <Deco src="faq-segno.webp" className="left-[46px] top-[63px] size-[74px] hidden lg:block" />
      <Deco src="cerchio.webp" className="left-[300px] top-[100px] size-[169px] hidden lg:block" />
      <div className="px-gutter w-full">
        <Row titolo={'Chiariamo\ni vostri dubbi'} testo="Trovi la risposta alle domande più frequenti: durata della visita, accessibilità, servizi disponibili, visite guidate e informazioni utili per scuole e gruppi.">
          {faq.map(([q, a]) => (
            <details key={q} className="group border-b-[1.5px] border-black">
              <summary className="t-lg py-4 cursor-pointer list-none flex justify-between items-center gap-4">
                {q}<span aria-hidden className="text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="t-md pb-4 max-w-[560px]">{a}</p>
            </details>
          ))}
        </Row>
      </div>
      <div className="w-full"><Marquee text="Prenota i tuoi biglietti" to="/la-visita/biglietti" /></div>
      <div className="px-gutter w-full relative">
                <Row titolo="Ti potrebbe interessare anche..." testo="Trovi la risposta alle domande più frequenti: durata della visita, accessibilità, servizi disponibili, visite guidate e informazioni utili per scuole e gruppi.">
          {interessi.map(([l, to]) => (
            <Link key={l} to={to} className="group flex items-center justify-between py-4 border-b-[1.5px] border-black t-lg transition-colors hover:border-red hover:text-red active:opacity-70">
              {l}<span aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </Link>
          ))}
        </Row>
      </div>
    </section>
  )
}
