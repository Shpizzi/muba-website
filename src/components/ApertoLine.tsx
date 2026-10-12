// ponytail: stato "aperto" statico, da collegare agli orari reali quando serve
export default function ApertoLine({ className = '' }: { className?: string }) {
  return (
    <p className={`flex items-center gap-2 t-md ${className}`}>
      <i className="size-4 rounded-full bg-green" />
      Aperto ancora per 1 ora e 30 minuti. <a href="#" className="underline">Scopri gli orari</a>
    </p>
  )
}
