import { Slide } from '../../components/Track'
import Arrow from '../../components/Arrow'

type Ev = { img: string; sticker: string; sx: number; sy: number; data: string; cat: string; title: string; wide?: boolean }
const eventi: Ev[] = [
  { img: 'evento-1-12df4f.webp', sticker: 'in-corso-119921', sx: 158, sy: 44, data: '18 febbraio 2026', cat: 'Presentazione pubblica', title: 'Il futuro in campo' },
  { img: 'evento-2.webp', sticker: 'ultimi-giorni-1e8854', sx: 144, sy: 53, data: '15 Febbraio 2026', cat: 'Programma pubblico', title: 'L’arrivo dei pionieri' },
  { img: 'evento-3-2c2823.webp', sticker: 'in-arrivo-6a8793', sx: 399, sy: 47, data: '03 Febbraio 2026 - 05 Marzo 2026', cat: 'Mostra temporanea', title: 'Le donne nella bonifica', wide: true },
]

function Card({ e }: { e: Ev }) {
  return (
    <article className={`relative flex flex-col gap-5 ${e.wide ? 'w-[610.93px]' : (e.sx < 150 ? 'w-[294.98px]' : 'w-[299.87px]')}`}>
      <div className={`stamp bg-white p-[15px] ${e.wide ? 'h-[298px]' : 'aspect-square'}`}>
        <img src={`/assets/home/${e.img}`} alt="" className="size-full object-cover" />
      </div>
      <img src={`/assets/home/sticker-${e.sticker}.webp`} alt="" className="absolute -translate-x-1/2 -translate-y-1/2 h-9 bg-white px-2" style={{ left: e.sx, top: e.sy }} />
      <div className="px-2.5 flex flex-col gap-2.5">
        <p className="t-sm">{e.wide ? '' : 'Fino al '}{e.data}</p>
        <div>
          <p className="t-md">{e.cat}</p>
          <h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">{e.title}</h3>
        </div>
      </div>
    </article>
  )
}

export default function Eventi() {
  return (
    <Slide x={1440}>
      <div className="absolute left-[100px] top-[180px] w-[1240px] flex justify-between items-center">
        <h2 className="h3 text-center">Eventi e mostre</h2>
        <a href="#" className="t-md p-2.5 flex items-center gap-3">Vedi tutti <Arrow /></a>
      </div>
      <div className="absolute left-[101px] top-[279px] flex gap-[26px] items-start">{eventi.map(e => <Card key={e.title} e={e} />)}</div>

      <div className="absolute left-[100px] top-[764px] w-[1240px] h-[200px]">
        <img src="/assets/home/banner-bg.svg" alt="" className="absolute -left-5 -top-[29.5px] w-[1291px] h-[257px] max-w-none" />
        <img src="/assets/home/banner-line.svg" alt="" className="absolute -left-[9px] -top-[20.5px] w-[1270px] h-[240px] max-w-none" />
        <div className="relative h-full px-[70px] flex items-center justify-between text-beige">
          <div>
            <p className="t-md">Il 25 Dicembre 2025</p>
            <h3 className="h3 w-[315px]">Smaltiamo<br />al museo</h3>
          </div>
          <div className="w-[614px] flex flex-col gap-5">
            <p className="t-lg">Tra i pasti durante la vigilia e a natale il museo sarà aperto e gratuito ai gruppi</p>
            <a href="#" className="font-semplicita font-bold text-lg flex items-center gap-3">Prenota la tua visita al museo <Arrow /></a>
          </div>
        </div>
        <img src="/assets/home/gotto.webp" alt="" className="absolute left-[293px] -top-[18px] size-[252px] object-cover" />
        <img src="/assets/home/ada-evento.webp" alt="" className="absolute left-[1128.6px] top-[81.6px] size-[118.75px] object-cover" />
      </div>
    </Slide>
  )
}
