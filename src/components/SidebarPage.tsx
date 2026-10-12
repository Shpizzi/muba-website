import type { ReactNode } from 'react'

// Indice laterale "In questa pagina" + contenuto a destra (Come arrivare, Accessibilità)
export default function SidebarPage({ items, children }: { items: [label: string, id: string][]; children: ReactNode }) {
  return (
    <div className="px-gutter flex flex-col lg:flex-row">
      <aside className="lg:w-[395px] shrink-0 border-t-[1.5px] border-black">
        <div className="lg:sticky lg:top-6 pt-7 pr-7 flex flex-col gap-[43px]">
          <h2 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">In questa pagina</h2>
          <ul className="flex flex-col gap-5">
            {items.map(([l, id]) => (
              <li key={id}><a href={`#${id}`} className="group flex items-center justify-between pb-1 border-b-[1.5px] border-black t-lg">
                {l}<span aria-hidden className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a></li>
            ))}
          </ul>
          <img src="/assets/home/quiz-ada.webp" alt="" aria-hidden className="size-[341px] -ml-3 object-cover hidden lg:block" />
        </div>
      </aside>
      <div className="flex-1 pt-7 lg:pl-7 border-t-[1.5px] lg:border-l-[1.5px] border-black">{children}</div>
    </div>
  )
}
