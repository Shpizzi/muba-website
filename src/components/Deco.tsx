// Disegno a mano animato (GIF da Figma), solo decorativo
export default function Deco({ src, className = '' }: { src: string; className?: string }) {
  return <img src={`/assets/deco/${src}`} alt="" aria-hidden className={`absolute object-cover pointer-events-none select-none ${className}`} />
}
