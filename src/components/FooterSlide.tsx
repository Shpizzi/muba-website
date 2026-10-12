import { Slide } from './Track'
import Footer from './Footer'

// Ultima slide delle pagine a scroll orizzontale: il footer a 1483px, come nella Home.
export default function FooterSlide({ x, light = false }: { x: number; light?: boolean }) {
  return (
    <Slide x={x} w={1483} className={`flex items-end border-l-[1.5px] ${light ? 'border-black' : 'border-beige'}`}>
      <div className="w-full"><Footer light={light} /></div>
    </Slide>
  )
}
