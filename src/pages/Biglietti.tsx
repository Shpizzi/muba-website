import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export const tipi: [string, string | undefined, number][] = [
  ['Adulti', undefined, 10], ['Ridotto', '<20 anni', 8], ['Disabilità', 'compreso accompagnatore', 7], ['Studenti', 'Da verificare', 0], ['Membri', undefined, 0],
]

const Step = ({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: React.ReactNode }) => (
  <button type="button" aria-label={label} onClick={onClick} disabled={disabled}
    className="size-[26px] border-[1.5px] border-black grid place-items-center leading-none disabled:opacity-30 transition-colors enabled:hover:bg-black enabled:hover:text-beige enabled:active:bg-black-tint-10 enabled:active:text-beige">{children}</button>
)

export default function Biglietti() {
  const [q, setQ] = useState<number[]>(tipi.map(() => 0))
  const tot = q.reduce((s, n, i) => s + n * tipi[i][2], 0)
  const n = q.reduce((s, x) => s + x, 0)
  const set = (i: number, d: number) => setQ(q => q.map((x, j) => (j === i ? Math.max(0, x + d) : x)))

  return (
    <Layout>
      <main className="px-gutter pt-[110px] pb-[100px]">
        <h1 className="font-semplicita font-bold uppercase text-[44px] leading-none tracking-[-0.02em] pb-[16px] border-b-[1.5px] border-black lg:w-1/2">Seleziona i biglietti</h1>
        <div className="grid lg:grid-cols-2 lg:gap-[26px] lg:relative">
          <span aria-hidden className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-[1px] bottom-0 w-[1.5px] bg-black" />
          <ul className="flex flex-col gap-[15px] pt-[26px] lg:pr-0">
            {tipi.map(([l, sub, p], i) => (
              <li key={l} className="flex items-center justify-between gap-4 t-md">
                <span className="w-[234px] max-w-[45%]">{l}{sub && <span className="block text-muted">{sub}</span>}</span>
                <span>{p}€</span>
                <span className="flex items-end gap-[21px]">
                  <Step label={`Rimuovi ${l}`} onClick={() => set(i, -1)} disabled={!q[i]}>−</Step>
                  <span className="t-lg w-[13px] text-center">{q[i]}</span>
                  <Step label={`Aggiungi ${l}`} onClick={() => set(i, 1)}>+</Step>
                </span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6 pt-[26px] lg:pl-0">
            <h2 className="h5">Info per riduzioni</h2>
            <p className="t-md">Le riduzioni vengono applicate esclusivamente presso la biglietteria del museo, presentando un documento valido che attesti il diritto alla tariffa agevolata.<br /><br />Le categorie che hanno diritto alla riduzione sono:<br />– visitatori under 20<br />– persone con disabilità (accompagnatore incluso)<br />– studenti con tesserino in corso di validità<br />– membri e soci convenzionati<br /><br />Per ulteriori informazioni o casi particolari, ti invitiamo a <Link to="/contatti" className="underline">contattare il museo</Link> prima della visita.</p>
            {n > 0 && <p className="t-lg flex justify-between border-t-[1.5px] border-black pt-4"><span>Totale</span><span>{tot}€</span></p>}
            <Link to="/la-visita/biglietti/prenota" state={{ q }} aria-disabled={!n} tabIndex={n ? 0 : -1}
              className={`self-end inline-flex px-8 py-2.5 border-[1.5px] font-mostra font-bold uppercase text-2xl ${n ? 'bg-red border-red text-beige transition-colors hover:bg-red-tint-10 active:bg-red-shade-20 active:border-red-shade-20' : 'pointer-events-none border-black text-muted'}`}>Procedi</Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}
