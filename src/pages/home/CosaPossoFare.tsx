import { Slide } from '../../components/Track'
import Arrow from '../../components/Arrow'

const a = (p: string) => `/assets/home/${p}`
const attivita = ['Attività per le scuole', 'Attività per tutti', 'Ricercatori e studiosi', 'Visite guidate', 'Eventi in collaborazione', 'Organizza il tuo evento']

export default function CosaPossoFare() {
  return (
    <>
      <Slide x={6160}>
        <img src={a('cosa-1-5b96c6.webp')} alt="" className="absolute left-[317px] top-[448px] w-[395px] h-[576px] object-cover" />
        <img src={a('cosa-2.webp')} alt="" className="absolute left-0 top-[270px] w-[289px] h-[297px] object-cover" />
        <img src={a('quiz-3.webp')} alt="" className="absolute left-[317px] top-[130px] w-[501px] h-[290px] object-cover" />
        <img src={a('quiz-1.webp')} alt="" className="absolute left-[740px] top-[532px] w-[289px] h-[162px] object-cover" />
        <img src={a('quiz-1.webp')} alt="" className="absolute left-[740px] top-[722px] w-[183px] h-[242px] object-cover" />
        {/* il titolo attraversa il bordo con la slide successiva, come nel design */}
        <h2 className="absolute left-[1157px] top-[180px] w-[605px] z-10 font-mostra font-black uppercase text-[76px] leading-none tracking-[-0.02em]">Cosa<br />posso fare<br />al Museo?</h2>
      </Slide>
      <Slide x={7600} w={1440}>
        {/* lista attaccata al margine destro del viewport (aggancio a destra) */}
        <div className="absolute right-[612px] top-[112px] w-[1.5px] h-[900px] bg-black" />
        <ul className="absolute right-0 top-[180px] w-[600px]">
          {attivita.map(t => (
            <li key={t}><a href="#" className="group flex items-center gap-8 px-5 py-10 border-b-[1.5px] border-black text-4xl font-semplicita">
              <span className="flex-1">{t}</span><Arrow className="transition-transform group-hover:translate-x-1" />
            </a></li>
          ))}
        </ul>
      </Slide>
    </>
  )
}
