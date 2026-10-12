import { useState } from 'react'
import { Navigate, useLocation, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { tipi } from './Biglietti'

const slots = ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'] // ponytail: orari placeholder, nessuna disponibilità reale
const mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
const border = 'border-[1.5px] border-black'

export default function Prenota() {
  const q: number[] | undefined = (useLocation().state as { q?: number[] } | null)?.q
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const [m, setM] = useState(0) // offset mesi da oggi
  const [day, setDay] = useState<Date | null>(null)
  const [slot, setSlot] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [review, setReview] = useState(false)

  if (!q || !q.some(Boolean)) return <Navigate to="/la-visita/biglietti" replace />

  const first = new Date(today.getFullYear(), today.getMonth() + m, 1)
  const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  const lead = (first.getDay() + 6) % 7 // lunedì = 0
  const tot = q.reduce((s, n, i) => s + n * tipi[i][2], 0)
  const righe = tipi.map(([l, , p], i) => ({ l, p, n: q[i] })).filter(r => r.n)
  const dataStr = day && `${day.getDate()} ${mesi[day.getMonth()]} ${day.getFullYear()}`

  const Cart = ({ title }: { title?: string }) => (
    <div className="flex flex-col gap-4">
      <h2 className="h5">{title ?? 'Nel tuo carrello'}</h2>
      {righe.map(r => <p key={r.l} className="t-lg flex justify-between"><span>{r.l}</span><span>{r.n}x{r.p}€</span></p>)}
      <p className="t-lg flex justify-between border-t-[1.5px] border-black pt-4"><span>Totale</span><span>{tot}€</span></p>
    </div>
  )

  if (done) return (
    <Layout><main className="px-gutter pt-[110px] pb-[100px] min-h-[60vh]">
      <h1 className="font-semplicita font-bold uppercase text-[44px] leading-none tracking-[-0.02em] pb-[16px] border-b-[1.5px] border-black">Prenotazione confermata</h1>
      <div className="grid lg:grid-cols-2 lg:gap-[26px] pt-[26px]">
        <div className="t-md flex flex-col gap-4">
          <p>Ti aspettiamo il {dataStr} alle {slot}.</p>
          <p>Questa è una conferma dimostrativa: nessun pagamento è stato effettuato e nessuna email è stata inviata.</p>
          <Button href="/" variant="primary" className="self-start">Torna alla home</Button>
        </div>
        <Cart title="Riepilogo" />
      </div>
    </main></Layout>
  )

  return (
    <Layout>
      <main className="px-gutter pt-[110px] pb-[100px]">
        <h1 className="font-semplicita font-bold uppercase text-[44px] leading-none tracking-[-0.02em] pb-[16px] border-b-[1.5px] border-black lg:w-[calc(50%+14px)]">{review ? 'Riepilogo' : 'Seleziona una data'}</h1>
        <div className="grid lg:grid-cols-2 lg:gap-[26px] lg:relative">
          <span aria-hidden className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-[1px] bottom-0 w-[1.5px] bg-black" />
          <div className="pt-[26px] flex flex-col gap-6">
            {review ? (
              <div className="t-lg flex flex-col gap-4">
                <p className="flex justify-between"><span>Data</span><span>{dataStr}</span></p>
                <p className="flex justify-between"><span>Orario</span><span>{slot}</span></p>
                <button type="button" onClick={() => setReview(false)} className="t-md underline self-start">Modifica data e orario</button>
              </div>
            ) : (<>
              <div className="flex items-center justify-between t-lg capitalize">
                <button type="button" aria-label="Mese precedente" disabled={!m} onClick={() => { setM(m - 1); setDay(null); setSlot(null) }} className="px-2 disabled:opacity-30">←</button>
                <span>{mesi[first.getMonth()]} {first.getFullYear()}</span>
                <button type="button" aria-label="Mese successivo" onClick={() => { setM(m + 1); setDay(null); setSlot(null) }} className="px-2">→</button>
              </div>
              <div className="grid grid-cols-7 gap-[10px] max-w-[606px]">
                {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((d, i) => <span key={i} className="t-md text-muted text-center">{d}</span>)}
                {Array.from({ length: lead }, (_, i) => <span key={'e' + i} />)}
                {Array.from({ length: days }, (_, i) => {
                  const d = new Date(first.getFullYear(), first.getMonth(), i + 1)
                  const past = d < today, sel = day?.getTime() === d.getTime()
                  return <button key={i} type="button" disabled={past} aria-pressed={sel} onClick={() => { setDay(d); setSlot(null) }}
                    className={`t-lg h-[78px] ${border} grid place-items-center disabled:opacity-30 ${sel ? 'bg-black text-beige' : 'enabled:hover:bg-beige-shade-10'}`}>{i + 1}</button>
                })}
              </div>
            </>)}
          </div>
          <div className="pt-[26px] flex flex-col gap-6">
            {!review && day && (<>
              <h2 className="h5">Orario del {dataStr}</h2>
              <div className="flex flex-wrap gap-[10px]">
                {slots.map(s => <button key={s} type="button" aria-pressed={slot === s} onClick={() => setSlot(s)}
                  className={`t-md px-5 py-2 ${border} ${slot === s ? 'bg-black text-beige' : 'hover:bg-beige-shade-10'}`}>{s}</button>)}
              </div>
            </>)}
            <Cart />
            <div className="flex justify-between items-center">
              <Link to="/la-visita/biglietti" className="t-md underline">Modifica biglietti</Link>
              {review
                ? <button type="button" onClick={() => setDone(true)} className="px-8 py-2.5 border-[1.5px] bg-red border-red text-beige hover:bg-red-tint-10 font-mostra font-bold uppercase text-2xl">Conferma</button>
                : <button type="button" disabled={!day || !slot} onClick={() => setReview(true)}
                    className="px-8 py-2.5 border-[1.5px] font-mostra font-bold uppercase text-2xl bg-red border-red text-beige hover:bg-red-tint-10 disabled:bg-transparent disabled:border-black disabled:text-muted">Procedi</button>}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
