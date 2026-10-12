import { Link } from 'react-router-dom'
import { Slide } from '../../components/Track'

// Striscia verticale a cavallo tra due slide (x=4240 nel design). Scorre in continuo; link al contenuto, senza selezione né cursor pointer.
export default function Marquee({ text = 'Mussolinia di Sardegna', to = '/il-muba/storia' }: { text?: string; to?: string }) {
  const p = <p className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-mostra font-extrabold uppercase text-[100px] leading-none py-[50px]">{text} ·</p>
  return (
    <Slide x={4240} w={180} className="z-10 bg-beige border-x-[1.5px] border-black overflow-hidden select-none cursor-default [&_*::selection]:bg-transparent">
      <style>{`.muba-marquee{animation:muba-marquee 24s linear infinite}@keyframes muba-marquee{to{transform:translateY(-50%)}}@media (prefers-reduced-motion:reduce){.muba-marquee{animation:none}}`}</style>
      <Link to={to} aria-label={text} draggable={false} className="absolute inset-0 flex justify-center cursor-default select-none">
        <div className="muba-marquee flex flex-col" aria-hidden>{p}{p}{p}{p}</div>
      </Link>
    </Slide>
  )
}
