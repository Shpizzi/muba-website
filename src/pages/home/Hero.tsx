import Button from '../../components/Button'
import { Slide } from '../../components/Track'

const big = 'text-[102px]'
const small = 'text-[52px]'

export default function Hero() {
  return (
    <Slide x={0} className="bg-black text-beige overflow-hidden">
      <img src="/assets/home/hero-928c36.webp" alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(246deg,rgba(43,43,43,.05)_27%,#2b2b2b_98%)]" />
      <div className="absolute left-[100px] top-[296px] flex flex-col gap-6 items-start">
        <div className="w-[608px] flex flex-col gap-8">
          <p className="flex items-center gap-2 t-md">
            <i className="size-4 rounded-full bg-green" />
            Aperto ancora per 1 ora e 30 minuti. <a href="#" className="underline">Scopri gli orari</a>
          </p>
          <div className="flex flex-col gap-[18px]">
            <h1 className="font-mostra font-bold uppercase leading-[81.8px]">
              <span className={big}>Benvenuti</span> <span className={small}>al</span>{' '}
              <span className={big}>Museo</span> <span className={small}>della</span>{' '}
              <span className={big}>Bonifica</span> <span className={small}>di</span>{' '}
              <span className={big}>Arborea</span>
            </h1>
            <p className="t-lg">Un luogo da ascoltare che racconta la terra, il lavoro<br />e le persone che hanno costruito Arborea.</p>
          </div>
        </div>
        <Button variant="primary" href="#" className="border-2">Prendi i biglietti</Button>
      </div>
    </Slide>
  )
}
