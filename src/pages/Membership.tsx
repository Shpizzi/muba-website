import Button from '../components/Button'
import Layout from '../components/Layout'

const a = (p: string) => `/assets/membership/${p}`

type Tier = { img: string; nome: string; prezzo: string; testo: string }
const member: Tier[] = [
  { img: 'member-1.webp', nome: 'I che passa', prezzo: '200€', testo: 'Chi guarda e comincia a volerci bene.' },
  { img: 'member-2.webp', nome: 'Quei che ghe tien', prezzo: '300€', testo: 'Chi ci crede davvero e non molla mai.' },
  { img: 'member-3.webp', nome: 'I de casa', prezzo: '400€', testo: 'Chi entra qui è parte della famiglia.' },
]
const patron: Tier[] = [
  { img: 'patron-1.webp', nome: 'Bonificatore', prezzo: '2000€', testo: 'Contribuisce alla tutela della memoria storica e alla valorizzazione del patrimonio di Arborea.' },
  { img: 'patron-2.webp', nome: 'Custode del Territorio', prezzo: '3000€', testo: 'Sostiene attivamente i progetti del museo e la diffusione della storia della bonifica.' },
  { img: 'patron-3.webp', nome: 'Mecenate di Arborea', prezzo: '4000€', testo: 'Diventa parte integrante della visione culturale del museo.' },
]

function Section({ id, titolo, tiers, border }: { id: string; titolo: string; tiers: Tier[]; border?: boolean }) {
  return (
    <section id={id} className={`px-gutter py-[90px] flex flex-col gap-10 border-black ${border ? 'border-y-[1.5px]' : ''}`}>
      <h2 className="h2">{titolo}</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-[27px]">
        {tiers.map(t => (
          <article key={t.nome} className="w-[395px] max-w-full flex flex-col gap-3">
            <img src={a(t.img)} alt="" className="h-[300px] w-full object-cover border-[1.5px] border-black" />
            <div className="flex flex-col gap-1">
              <div className="h-[33px] flex items-center justify-between">
                <h3 className="font-mostra font-bold text-[28px] tracking-[-0.02em]">{t.nome}</h3>
                <span className="t-lg">{t.prezzo}</span>
              </div>
              <p className="t-md w-[395px] max-w-full">{t.testo}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Blocco({ img, titolo, testo, invert }: { img: string; titolo: string; testo: string; invert?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-[63px] ${invert ? 'flex-row-reverse' : ''}`}>
      <div className="w-[675px] max-w-full flex flex-col gap-[33px]">
        <h3 className="h3 w-[604px] max-w-full">{titolo}</h3>
        <p className="t-md">{testo}</p>
      </div>
      <div className="relative w-[500px] h-[330px] shrink-0">
        <img src={a(img)} alt="" className="size-full object-cover border-[1.05px] border-black" />
        <img src={a('play-1.svg')} alt="" className="absolute left-[223px] top-[123px]" />
      </div>
    </div>
  )
}

export default function Membership() {
  return (
    <Layout>
      <main>
        <section className="px-gutter pt-[98px] pb-[70px] flex flex-col gap-3">
          <h1 className="font-mostra font-bold uppercase text-[min(236px,16.4vw)] leading-[0.97] whitespace-nowrap">Membership</h1>
          <p className="t-lg max-w-[1241px]">
            Diventare parte del Museo della Bonifica di Arborea vuol dire sentirsi di casa. Significa entrare in una comunità che crede nel valore della storia, del lavoro condiviso e della memoria di questo territorio.
            <br />Essere Member significa contribuire a tenere viva una storia che parla di persone, di fatica e di futuro.
          </p>
        </section>
        <nav className="px-gutter pb-[87px] flex gap-7">
          {[['Member', '#member'], ['Patron', '#patron'], ['Sponsor', '#sponsor']].map(([l, h]) => (
            <Button key={l} href={h} className="flex-1">{l}</Button>
          ))}
        </nav>

        <Section id="member" titolo="Member" tiers={member} border />
        <Section id="patron" titolo="Patron" tiers={patron} />

        <section className="mx-auto mt-[14px] w-[1239px] max-w-[calc(100%-200px)] h-[477px] relative border-[1.5px] border-black">
          <div className="absolute inset-0 overflow-hidden">
            <img src={a('dona-bg-4d24b5.webp')} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0)_0%,#2b2b2b_100%)]" />
          </div>
          <div className="absolute inset-0 p-[30px] flex flex-col justify-end items-start gap-6 text-beige">
            <h2 className="h2">Sostienici e dona al museo</h2>
            <Button href="#">Dona ‘na olta</Button>
          </div>
          <img src={a('schizzo.webp')} alt="" className="absolute left-[1054px] -top-[89px] size-[240px] object-cover pointer-events-none" />
        </section>

        <section className="px-gutter pt-[140px] pb-[157px] flex flex-col gap-[80px]">
          <Blocco img="cosa-member.webp" titolo="Cosa vuol dire essere membro?"
            testo="Essere membro significa sentirsi parte del Museo, tornare nel tempo, stargli vicino e sostenerlo nelle attività di ogni giorno. È un modo semplice per dire: ci sono anch’io e voglio farne parte." />
          <Blocco invert img="cosa-patron-d30299.webp" titolo="Cosa vuol dire essere Patron?"
            testo="Essere patron significa sostenere il Museo in modo più profondo, aiutandolo a crescere, a custodire la memoria e a guardare avanti. È un gesto di responsabilità verso la sua storia e il suo futuro." />
        </section>

        <section id="sponsor" className="px-gutter pb-[165px] flex flex-col gap-10">
          <h2 className="h3">I nostri sponsor</h2>
          <div className="flex flex-col gap-[33px]">
            {[[1, 2, 3, 4], [5, 6]].map((row, i) => (
              <div key={i} className={`flex flex-wrap items-center ${i ? 'justify-center gap-9' : 'justify-between'}`}>
                {row.map(n => <img key={n} src={a(`sponsor-${n}.webp`)} alt="" className="h-[107px] w-[292px] object-contain" />)}
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
