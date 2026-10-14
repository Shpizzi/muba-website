import type { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

type Props = Omit<ComponentProps<'a'>, 'href'> & { href: string; variant?: 'primary' | 'outline' }

const base = 'inline-flex items-center justify-center px-8 py-2.5 border-[1.5px] font-mostra font-bold uppercase text-2xl transition-colors'
const variants = {
  primary: 'bg-red border-red text-beige hover:bg-red-shade-20 hover:border-red-shade-20 active:bg-black active:border-black',
  outline: 'bg-beige border-black text-black hover:bg-black hover:text-beige active:bg-black-shade-30 active:text-beige',
}

// Link interno (SPA) se l'href inizia con "/", altrimenti <a> normale (ancore, esterni)
export default function Button({ variant = 'outline', className = '', href, ...p }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  return href.startsWith('/') ? <Link to={href} className={cls} {...p} /> : <a href={href} className={cls} {...p} />
}
