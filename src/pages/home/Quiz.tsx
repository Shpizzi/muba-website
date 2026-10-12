import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Slide } from '../../components/Track'

const a = (p: string) => `/assets/home/${p}`

export default function Quiz({ answered = false, onAnswer = () => {} }: { answered?: boolean; onAnswer?: () => void }) {
  const [scelta, setScelta] = useState<'si' | 'no' | null>(null)
  const rispondi = (v: 'si' | 'no') => { setScelta(v); onAnswer() }
  return (
    <Slide x={4320} w={1840}>
      <div className="absolute left-[200px] top-0 w-[1440px] h-full">
      <img src={a('quiz-ada.webp')} alt="" className="absolute left-[904px] top-[145px] size-[156px] object-cover" />
      <p className="absolute left-[588px] top-[203px] w-[263px] text-center text-[35px] font-semplicita">Ciao, sono La Ada</p>
      <h2 className="absolute left-[146px] top-[261px] w-[1177px] text-center font-mostra font-extrabold uppercase text-[136px] leading-none tracking-[-0.02em]">
        Conosci la storia di Arborea?
      </h2>
      <img src={a('quiz-foglia.svg')} alt="" className="absolute left-[260px] top-[397px]" />
      <div className="absolute left-[404px] top-[556px] w-[633px] h-[137px]">
        <img src={a('quiz-1.webp')} alt="" className="absolute left-0 top-2 w-[183px] h-[120px] object-cover" />
        <img src={a('evento-2.webp')} alt="" className="absolute left-[211px] top-0 w-[210px] h-[137px] object-cover" />
        <img src={a('quiz-3.webp')} alt="" className="absolute left-[449px] top-2 w-[184px] h-[120px] object-cover" />
      </div>
      <p className="absolute left-[1014px] top-[693px] text-[28px] font-semplicita">1923 → 1932</p>
      <div className="absolute left-[628px] top-[745px] w-[184px] flex justify-between">
        <button aria-label="Sì" onClick={() => rispondi('si')} className="size-20 border-[1.5px] border-black grid place-items-center hover:bg-black/5"><img src={a('quiz-si.svg')} alt="" /></button>
        <button aria-label="No" onClick={() => rispondi('no')} className="size-20 border-[1.5px] border-black flex items-center justify-center gap-[3px] hover:bg-black/5"><img src={a('quiz-no-n.svg')} alt="" /><img src={a('quiz-no-o.svg')} alt="" /></button>
      </div>
      {scelta === 'no' && <>
        <img src={a('quiz-segno1.svg')} alt="" className="absolute left-[725.5px] top-[745.9px] pointer-events-none" />
        <img src={a('quiz-segno2.svg')} alt="" className="absolute left-[735.5px] top-[737.5px] pointer-events-none" />
      </>}
      {answered && (
        <Link to="/quiz" className="absolute left-[520px] top-[860px] w-[400px] h-[80px] border-[1.5px] border-black bg-black text-beige grid place-items-center font-semplicita text-[28px] hover:bg-transparent hover:text-black transition-colors">Scopri il quiz →</Link>
      )}
      </div>
    </Slide>
  )
}
