import { useState } from 'react'
import { Slide } from '../../components/Track'

const anni = [
  { k: '1918', label: '1918', tag: 'Progetto', titolo: 'Il progetto di bonifica', img: 't1918-55cb96.webp',
    testo: ['Dopo la Prima Guerra Mondiale, lo Stato italiano avvia piani di risanamento delle aree paludose dell’Oristanese. La zona, colpita dalla malaria e quasi disabitata, viene individuata come territorio strategico per un grande intervento di bonifica integrale.'] },
  { k: '1928', label: '1928', tag: 'Fondazione', titolo: 'Fondazione Mussolinia', img: 't1928-1b75d3.webp',
    testo: ['Nel 1928 nasce ufficialmente Mussolinia di Sardegna, voluta dal regime di Benito Mussolini come città simbolo della bonifica e della colonizzazione agricola.', 'Il progetto urbanistico è razionale e moderno: piazza centrale, chiesa, municipio e servizi pubblici, secondo l’estetica del regime.'] },
  { k: '1930', label: '1930', tag: 'Città agricola', titolo: 'Nasce la città agricola', img: 't1930-746545.webp',
    testo: ['Vengono costruiti caseifici, stalle e strutture cooperative.', 'Il territorio si trasforma da zona malarica a polo agricolo produttivo, diventando uno degli esempi più importanti della bonifica fascista in Italia.'] },
  { k: '1934', label: '1934', tag: 'Bonifica', titolo: 'La bonifica integrale', img: 't1934-4ba307.webp',
    testo: ['La Società Bonifiche Sarde realizza canali, strade, poderi agricoli e infrastrutture.', 'Migliaia di coloni, soprattutto dal Veneto e dall’Emilia-Romagna, si trasferiscono nella nuova città per avviare aziende agricole modello.'] },
  { k: '1944', label: '1944', tag: 'Cambio', titolo: 'Da Mussolinia ad Arborea', img: 't1944.webp',
    testo: ['Dopo la caduta del regime fascista, la città cambia nome in Arborea.', 'Il nuovo nome richiama l’antico Giudicato d’Arborea, segnando una rottura simbolica con il passato fascista.'] },
  { k: '1950', label: '1950', tag: 'Identità', titolo: 'Sviluppo cooperativo', img: 't1950.webp',
    testo: ['Arborea consolida la propria identità agricola e cooperativa.', 'Nascono realtà produttive lattiero-casearie che rendono il territorio uno dei centri agroalimentari più importanti della Sardegna.'] },
  { k: 'oggi', label: 'OGGI', tag: 'Impronte', titolo: 'Memoria e territorio', img: 'toggi.webp',
    testo: ['Arborea conserva l’impianto urbanistico razionalista originario.', 'La storia della bonifica e della fondazione resta parte integrante dell’identità del territorio, tra memoria storica, trasformazione paesaggistica e sviluppo agricolo.'] },
]

// "19" ha crenatura stretta nel design: la prima cifra è più compressa
function Anno({ label }: { label: string }) {
  if (label === 'OGGI') return <>OGGI</>
  return <><span className="tracking-[-0.19em]">{label[0]}</span>{label.slice(1)}</>
}

export default function ProvaDiValore() {
  const [i, setI] = useState(0)
  const a = anni[i]
  return (
    <Slide x={2880}>
      <img src="/assets/home/ripped-paper-bd23e0.webp" alt="" className="absolute -left-[50px] top-0 w-[545px] h-[1024px]" />
      <div className="absolute left-[100px] top-[170px] flex flex-col gap-10 text-beige">
        <h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">Tocca ed esplora la storia</h3>
        <ul className="w-[263px] flex flex-col items-end gap-5">
          {anni.map((x, n) => (
            <li key={x.k}>
              <button onClick={() => setI(n)} aria-pressed={n === i}
                className={`flex items-center font-semplicita font-bold text-[102px] leading-[70px] tracking-[-0.05em] transition-opacity ${n === i ? '' : 'opacity-50 hover:opacity-80'}`}>
                {n === i && <i className="size-[19px] rounded-full bg-beige mr-2.5" />}
                <Anno label={x.label} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute left-[523px] top-[180px] w-[817px] flex flex-col gap-[60px]">
        <div className="flex flex-col gap-3">
          <img src={`/assets/home/tag-${a.k}.svg`} alt="" className="h-9 self-start" />
          <h2 className="h2">{a.titolo}</h2>
        </div>
        <div className="relative t-lg [text-indent:100px] space-y-0">
          <span className="absolute left-0 top-1 text-sm font-medium uppercase text-muted [text-indent:0]">{a.tag}</span>
          {a.testo.map((t, n) => <p key={n} className={n ? '[text-indent:0]' : ''}>{t}</p>)}
        </div>
      </div>
      <div className="absolute left-[523px] top-[310px] w-[848px] h-[1.5px] bg-black" />
      <img src={`/assets/home/${a.img}`} alt="" className="absolute left-[523px] top-[580px] w-[817px] h-[377px] object-cover" />
    </Slide>
  )
}
