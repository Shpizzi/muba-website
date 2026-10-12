import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const q = (p: string) => `/assets/quiz/${p}`
const h = (p: string) => `/assets/home/${p}`

type Dom = { t: string; vecia: string; opts: string[] | 'img'; ok: number }
// ponytail: risposta corretta del mulino (ok:0) non indicata in Figma, da confermare con il museo.
const domande: Dom[] = [
  { t: 'Qual era il nome originale di Arborea quando fu fondata nel 1928?', vecia: 'vecia-sorridente.webp', opts: ['Arborea', 'Terralba nuova', 'mussolinia di sardegna', 'Bonifica city'], ok: 2 },
  { t: 'In che anno fu inaugurata l’attuale città di Arborea?', vecia: 'vecia-dito-pensa.webp', opts: ['1900', '1918', '1928', '1944'], ok: 2 },
  { t: 'Prima della bonifica, com’era il territorio dove oggi sorge Arborea?', vecia: 'vecia-dito.webp', opts: ['una montagna', 'una spiaggia', 'una foresta', 'una palude'], ok: 3 },
  { t: 'Quale di queste rappresenta il mulino storico ora sede del Museo della Bonifica?', vecia: 'vecia-normale.webp', opts: 'img', ok: 0 },
]
const MULINI = [1, 2, 3, 4].map(n => q(`mulino-${n}.webp`))
// posizione/dimensione della vecia per domanda (da Figma, frame 1440x1024)
const VPOS = [[1051, 125, 181], [1038, 130, 181], [1020, 125, 181], [1177, 289, 210]]
const CODICE = 'MUBISTA10' // placeholder

const btn = 'font-mostra font-bold uppercase text-[24px] leading-[1.2] px-8 py-[10px] border-[1.5px] border-black'

export default function Quiz() {
  const [step, setStep] = useState(0) // 0 intro, 1..4 domande, 5 risultato
  const [risp, setRisp] = useState<(number | null)[]>([null, null, null, null])
  const [codice, setCodice] = useState(false)
  const [s, setS] = useState(1)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const f = () => setS(Math.min(window.innerWidth / 1440, window.innerHeight / 1024))
    f(); window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])

  const i = step - 1
  const d = domande[i]
  const punti = risp.filter((r, k) => r === domande[k].ok).length
  const scegli = (k: number) => setRisp(r => r[i] !== null ? r : r.map((v, j) => (j === i ? k : v)))
  const riparti = () => { setRisp([null, null, null, null]); setCodice(false); setStep(1) }

  return (
    <div className="fixed inset-0 bg-beige overflow-hidden">
      <div ref={root} className="absolute left-1/2 top-1/2 origin-center" style={{ width: 1440, height: 1024, transform: `translate(-50%,-50%) scale(${s})` }}>
        <Link to="/" className="absolute right-0 top-0 h-[100px] px-6 flex items-center gap-[10px] border-x-0 border-b-[1.5px] border-black font-mostra text-[23px] z-10" style={{ borderLeftWidth: 1.5 }}>
          <span aria-hidden className="text-[28px] leading-none">×</span>CHIUDI
        </Link>

        {step === 0 && (
          <>
            <img src={h('quiz-ada.webp')} alt="" className="absolute left-[904px] top-[145px] size-[156px] object-cover" />
            <p className="absolute left-[588px] top-[203px] w-[263px] text-center text-[35px]">Ciao, sono La Ada</p>
            <h1 className="h1-md absolute left-[146px] top-[261px] w-[1177px] text-center tracking-[-0.02em]">Conosci la storia di Arborea?</h1>
            <img src={q('grano.webp')} alt="" className="absolute left-[107px] top-[376.5px] size-[339.75px] object-cover pointer-events-none" />
            <div className="absolute left-[404px] top-[556px] w-[633px] h-[137px]">
              <img src={h('quiz-1.webp')} alt="" className="absolute left-0 top-2 w-[183px] h-[120px] object-cover" />
              <img src={h('evento-2.webp')} alt="" className="absolute left-[211px] top-0 w-[210px] h-[137px] object-cover" />
              <img src={h('quiz-3.webp')} alt="" className="absolute left-[449px] top-2 w-[184px] h-[120px] object-cover" />
            </div>
            <p className="absolute left-[1014px] top-[693px] text-[28px]">1923 → 1932</p>
            <div className="absolute left-[628px] top-[745px] w-[184px] flex justify-between">
              <button aria-label="Sì" onClick={() => setStep(1)} className="size-20 border-[1.5px] border-black grid place-items-center hover:bg-black/5"><img src={h('quiz-si.svg')} alt="" /></button>
              <Link to="/" aria-label="No" className="size-20 border-[1.5px] border-black flex items-center justify-center gap-[3px] hover:bg-black/5"><img src={h('quiz-no-n.svg')} alt="" /><img src={h('quiz-no-o.svg')} alt="" /></Link>
            </div>
          </>
        )}

        {d && (
          <>
            <div className="absolute left-[100px] top-[937.5px] w-[607px] h-[5px] bg-[#2B2B2B]/20">
              {/* ponytail: avanzamento stimato (92px su 607 in Figma = 1a domanda), 92px a domanda */}
              <div className="h-full bg-[#2B2B2B]" style={{ width: 92 * step }} />
            </div>
            {i === 0 && <img src={q('q-scribble1.svg')} alt="" className="absolute left-[199px] top-[322px] pointer-events-none" />}
            {i === 1 && <img src={q('q-scribble2.svg')} alt="" className="absolute left-[241.7px] top-[278.2px] pointer-events-none" />}
            {i === 2 && <>
              <img src="/assets/deco/cerchi.webp" alt="" className="absolute left-[923.25px] top-[204.8px] size-[320.47px] object-cover pointer-events-none" />
              <img src="/assets/deco/schizzo02.webp" alt="" className="absolute left-[159px] top-[379px] size-[151.81px] object-cover pointer-events-none" />
            </>}
            {i === 3 && <img src={q('q-scribble4.svg')} alt="" className="absolute left-[211.2px] top-[295.3px] pointer-events-none" />}
            <img src={q(d.vecia)} alt="" className="absolute object-cover pointer-events-none" style={{ left: VPOS[i][0], top: VPOS[i][1], width: VPOS[i][2], height: VPOS[i][2] }} />
            <div className={`absolute w-[1177px] flex flex-col items-center gap-[55px] ${d.opts === 'img' ? 'left-[131px] top-[196px]' : 'left-[146px] top-[306px]'}`}>
              <h2 className="font-mostra font-bold uppercase text-[76px] leading-[1.03] tracking-[-0.02em] text-center">{d.t}</h2>
              <div className={`flex flex-wrap items-center gap-7 ${d.opts === 'img' ? 'w-[1177px]' : 'w-[606px]'}`}>
                {(d.opts === 'img' ? MULINI : d.opts).map((o, k) => {
                  const sel = risp[i]
                  const stato = sel === null ? '' : k === d.ok ? 'bg-green text-beige border-green' : k === sel ? 'bg-red text-beige border-red' : 'opacity-50'
                  return d.opts === 'img'
                    ? <button key={k} aria-label={`Immagine ${k + 1}`} onClick={() => scegli(k)} disabled={sel !== null}
                        className={`size-[273px] border border-black p-0 ${sel !== null && k !== d.ok && k !== sel ? 'opacity-50' : ''} ${sel !== null && k === d.ok ? 'outline outline-[6px] outline-green' : sel === k ? 'outline outline-[6px] outline-red' : ''}`}>
                        <img src={o} alt="" className="size-full object-cover" />
                      </button>
                    : <button key={k} onClick={() => scegli(k)} disabled={sel !== null}
                        className={`${btn} w-[289px] bg-beige hover:bg-beige-shade-10 disabled:hover:bg-beige ${stato}`}>{o}</button>
                })}
              </div>
            </div>
            <div className="absolute left-[946px] top-[891px] flex items-center gap-7">
              <button onClick={() => setStep(step - 1)} className={`${btn} w-[183px] bg-beige hover:bg-beige-shade-10`}>Indietro</button>
              <button onClick={() => setStep(step + 1)} disabled={risp[i] === null}
                className={`${btn} w-[183px] bg-red border-red text-beige enabled:hover:bg-red-shade-20 disabled:opacity-40`}>Procedi</button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <img src="/assets/deco/cerchi.webp" alt="" className="absolute left-[622.5px] top-[739.9px] size-[194.23px] object-cover pointer-events-none" />
            <img src={q('freccia03.webp')} alt="" className="absolute left-[206px] top-[509px] size-[228.59px] object-cover pointer-events-none" />
            <img src={q('freccia03.webp')} alt="" className="absolute left-[1005.4px] top-[632.9px] size-[228.59px] object-cover pointer-events-none" />
            <img src={q('q-spark1.svg')} alt="" className="absolute left-[503.2px] top-[230.2px] pointer-events-none" />
            <img src={q('q-spark2.svg')} alt="" className="absolute left-[532.4px] top-[202.8px] pointer-events-none" />
            <img src={q('q-spark3.svg')} alt="" className="absolute left-[886.3px] top-[207.1px] pointer-events-none" />
            <img src={q('q-spark4.svg')} alt="" className="absolute left-[897.5px] top-[235px] pointer-events-none" />
            <img src={q('vecia-stupita.webp')} alt="" className="absolute left-[936px] top-[179px] size-[277.55px] object-cover pointer-events-none" />
            <div className="absolute left-[402px] top-[217px] w-[636px] flex flex-col gap-1 text-center">
              <p className="font-mostra font-bold uppercase text-[178px] leading-none tracking-[-0.02em]" style={{ fontWeight: 800 }}>{punti}/{domande.length}</p>
              <h2 className="font-mostra font-bold uppercase text-[76px] leading-[1.03] tracking-[-0.02em]">{punti >= 3 ? 'Sei un MUBISTA vero' : 'Puoi fare di meglio'}</h2>
            </div>
            <p className="absolute left-[417px] top-[549px] w-[606px] text-[24px] leading-[1.3] text-center">Complimenti! Conosci questa zona veramente bene bla bla bla</p>
            <button onClick={() => setCodice(true)} className="absolute left-[417px] top-[651px] w-[606px] h-[69px] border border-dashed border-black font-mostra font-bold text-[28px] tracking-[-0.02em] hover:bg-black/5">
              {codice ? CODICE : 'Clicca per codice sconto'}
            </button>
            <div className="absolute left-[417px] top-[778px] w-[606px] flex flex-col items-center gap-5">
              <p className="text-[24px] leading-[1.3] text-center">Se ti senti Arborea scorrere nelle vene.<br />Diventa un butel del MUBA.</p>
              <Link to="/i-custodi/membership" className="text-[18px] underline">Vedi le membership →</Link>
              <button onClick={riparti} className="text-[18px] underline">Rigioca</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
