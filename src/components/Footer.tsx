import Button from './Button'

const small = 'font-semplicita font-medium uppercase text-sm'

const legal = ['Cookie Policy', 'Privacy Policy', 'Amministrazione trasparente', 'Crediti']
const socials = [['youtube', 'YouTube'], ['instagram', 'Instagram'], ['facebook', 'Facebook']]
// stelle sul cerchio rotante (x, y in px, Figma group-star-text)
// 3 scritte uguali a 120° l'una dall'altra, con una stella nello spazio tra l'una e l'altra
const R = 197, C = 2 * Math.PI * R, SEG = C / 3, TXT = SEG - 52
const stars = [0, 1, 2].map(k => {
  const a = Math.PI + ((k * SEG + TXT + 26) / C) * 2 * Math.PI
  return [237 + (R + 15) * Math.cos(a) - 15, 237 + (R + 15) * Math.sin(a) - 15]
})

// light = versione beige (pagine mostre, reperto); default = nera
export default function Footer({ light = false }: { light?: boolean }) {
  const bd = light ? 'border-black' : 'border-beige'
  const row = `flex items-center justify-between p-2.5 border-t-[1.5px] ${bd}`
  return (
    <footer className={`${light ? 'bg-beige text-black border-t-[1.5px] border-black' : 'bg-black text-beige'}`}>
      <div className="px-gutter pt-[100px] pb-[70px] flex flex-wrap justify-between items-end gap-y-10">
        <h2 className="pl-2.5 font-mostra font-extrabold uppercase text-[106px] leading-none tracking-[-0.02em] w-[708px] max-w-full">
          Dai, allora<br />ci sentiamo?
        </h2>
        <form className="w-[500px] max-w-full flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
          <p className="t-lg">MUBA ti segue ovunque, resta in contatto per ricevere novità, attività e contenuti speciali.</p>
          <input type="email" placeholder="email" aria-label="Email" className={`t-lg bg-transparent p-2.5 border-b-[1.5px] ${bd} ${light ? "placeholder:text-black" : "placeholder:text-beige"} outline-none`} />
          <Button variant="outline" href="/newsletter" className={`self-start text-base ${light ? "" : "hover:!bg-red hover:!border-red hover:!text-beige active:!bg-red-shade-20"}`}>Iscriviti alla newsletter</Button>
        </form>
      </div>
      <div className={`${light ? "" : "bg-black"} border-t-[1.5px] ${bd} flex flex-wrap`}>
        <div className={`flex-1 min-w-[320px] pl-gutter pr-7 min-h-[581px] flex flex-col justify-center items-start gap-[42px] border-r-[1.5px] ${bd}`}>
          <div className="w-full max-w-[807px] flex justify-between">
            <img src={light ? "/assets/logo-full-dark.svg" : "/assets/logo-full.svg"} alt="Museo Bonifica Arborea" width={183} height={102} />
            <div className="flex items-center gap-5">
              {socials.map(([id, label]) => (
                <a key={id} href="#" aria-label={label} className={`size-[60px] grid place-items-center transition-colors ${light ? "bg-black hover:bg-red" : "bg-beige hover:bg-red"} [&:hover_span]:!bg-beige`}>
                  <span aria-hidden className={`size-[26px] ${light ? "bg-beige" : "bg-black"}`} style={{ mask: `url(/assets/icon-${id}.svg) center / contain no-repeat`, WebkitMask: `url(/assets/icon-${id}.svg) center / contain no-repeat` }} />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[807px] flex flex-col">
            <div className={row}><span className={small}>Indirizzo</span><address className="t-md not-italic text-right">Corso Italia Ex Mulino, 24<br />09092 - Arborea (OR)<br />Sardegna - Italy</address></div>
            <div className={row}><span className={small}>Contatti</span><span className="t-md text-right"><a href="mailto:muba@comunearborea.it">muba@comunearborea.it</a><br />+39 0783 802005</span></div>
            <div className="mt-10 flex flex-col">
              {legal.map(l => <a key={l} href="#" className={`${row} ${small}`}>{l}</a>)}
              <p className="t-sm p-2.5 text-right">© 2026 Museo delle Bonifica di Arborea</p>
            </div>
          </div>
        </div>
        <div className="w-[495px] max-w-full min-h-[581px] grid place-items-center overflow-hidden">
          <a href="#" aria-label="Acquista i biglietti" className="relative size-[474px]">
            <img src={light ? "/assets/deco/vecia-nera.webp" : "/assets/vecia.webp"} alt="" className="absolute inset-0 m-auto size-[260px] object-cover" />
            <div className="absolute inset-0 spin-slow">
              <svg viewBox="0 0 474 474" className="absolute inset-0">
                <defs><path id="ring" d="M237,237 m-197,0 a197,197 0 1,1 394,0 a197,197 0 1,1 -394,0" /></defs>
                <text className={`font-mostra font-bold uppercase ${light ? "fill-black" : "fill-beige"}`} fontSize="42">
                  {[0, 1, 2].map(k => <textPath key={k} href="#ring" startOffset={k * SEG} textLength={TXT} lengthAdjust="spacing">Acquista i biglietti</textPath>)}
                </text>
              </svg>
              {stars.map(([x, y]) => <img key={x} src="/assets/deco/footer-stella.webp" alt="" aria-hidden className="absolute size-[30px] object-cover" style={{ left: x, top: y }} />)}
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
