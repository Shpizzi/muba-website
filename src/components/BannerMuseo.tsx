import Button from './Button'
import Deco from './Deco'

export default function BannerMuseo() {
  return (
    <section className="relative px-gutter py-[50px] border-t-[1.5px] border-black">
      <div className="relative min-h-[445px] border-[1.5px] border-black p-[30px] flex flex-col justify-end items-start gap-6 text-beige">
        <img src="/assets/evento-2-museo.webp" alt="" className="absolute inset-0 size-full object-cover" />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_83%)]" />
        <Deco src="museo-schizzo.webp" className="left-[12px] top-[249px] size-[168px]" />
        <div className="relative flex flex-col gap-1">
          <p className="t-lg">Per chi non può venire a trovarci</p>
          <h2 className="h2">Visita il museo digitale</h2>
        </div>
        <Button href="/la-visita/museo-digitale" className="relative">Entra nel museo</Button>
      </div>
      <Deco src="schizzo02.webp" className="left-[1151px] top-[317px] size-[240px] hidden lg:block" />
    </section>
  )
}
