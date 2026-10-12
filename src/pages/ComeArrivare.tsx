import Button from '../components/Button'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import Deco from '../components/Deco'
import Faq from '../components/Faq'
import SidebarPage from '../components/SidebarPage'
import BannerMuseo from '../components/BannerMuseo'

const H5 = ({ children }: { children: string }) => <h3 className="font-mostra font-bold text-[28px] leading-[33px] tracking-[-0.02em]">{children}</h3>

export default function ComeArrivare() {
  return (
    <Layout>
      <main>
        <section className="relative px-gutter pt-[160px] pb-[40px] flex flex-wrap items-center gap-[27px]">
          <div className="w-[713px] max-w-full flex flex-col gap-[98px] relative z-10">
            <div className="flex flex-col justify-between min-h-[252px]">
              <ApertoLine />
              <div className="flex flex-col gap-6">
                <h1 className="font-mostra font-bold uppercase text-[min(105px,8vw)] leading-[1]">Come arrivare</h1>
                <p className="t-lg w-[712px] max-w-full">Il MUBA si trova ad Arborea, nel cuore della storica città di fondazione, facilmente raggiungibile da Oristano e dalle principali località della Sardegna centro-occidentale.</p>
              </div>
            </div>
            <Button href="#" className="self-start">Apri sulla mappa</Button>
          </div>
          <img src="/assets/deco/come-hero.webp" alt="" className="w-[500px] max-w-full h-[401px] object-cover" />
          <div className="hidden lg:block absolute inset-0">
            <Deco src="cerchi.webp" className="left-[85px] top-[105px] size-[320px] -z-0" />
            <Deco src="pin.webp" className="left-[312px] top-[425px] size-[103px]" />
            <Deco src="schizzo-c.webp" className="left-[813px] top-[122px] size-[120px]" />
            <Deco src="freccia-c.webp" className="left-[1134px] top-[215px] size-[148px]" />
          </div>
        </section>

        <SidebarPage items={[['In auto', 'auto'], ['In autobus', 'autobus'], ['A piedi', 'piedi']]}>
          <div className="relative flex flex-col gap-[46px] pb-[60px]">
            <Deco src="auto.webp" className="right-[34px] -top-[13px] size-[120px] hidden lg:block" />
            <section id="auto" className="flex flex-col gap-5 scroll-mt-6">
              <H5>In auto</H5>
              <ul className="t-lg flex flex-col">
                <li>- Da Oristano: circa 20 minuti</li><li>- Da Cagliari: circa 1 ora</li><li>- Da Sassari / Alghero: circa 1 ora e 30 min</li>
              </ul>
              <p className="t-lg max-w-[712px]">Percorrere la SS131 Carlo Felice, uscita Oristano Sud, quindi seguire le indicazioni per Arborea.<br />Una volta in città, il museo è raggiungibile facilmente dal centro.<br /><br />Parcheggi disponibili nelle immediate vicinanze.</p>
            </section>
            <hr className="border-t-[1.5px] border-black" />
            <section id="autobus" className="relative flex flex-col gap-5 scroll-mt-6">
              <H5>In autobus</H5>
              <Deco src="ancora-autobus.svg" className="left-[101px] top-[30px] hidden lg:block" />
              <p className="t-lg">Arborea è collegata a Oristano tramite le linee ARST.<br />Dalla stazione dei bus di Oristano partono collegamenti diretti con fermate in centro città, a breve distanza dal museo.</p>
            </section>
            <div className="relative h-[126px]">
              <img src="/assets/deco/banner-arst-bg.svg" alt="" className="absolute inset-0 size-full" />
              <img src="/assets/deco/banner-arst-line.svg" alt="" className="absolute inset-0 m-auto w-[98%] h-[85%]" />
              <p className="relative h-full flex items-center pl-[81px] pr-4 text-beige font-mostra font-bold text-[28px] tracking-[-0.02em]">Si consiglia di verificare orari e frequenze aggiornate sul sito ARST.</p>
              <Deco src="danger.webp" className="left-[20px] top-[46px] size-[60px] [filter:brightness(0)_invert(1)]" />
            </div>
            <hr className="border-t-[1.5px] border-black" />
            <section id="piedi" className="relative flex flex-col gap-5 scroll-mt-6">
              <H5>A piedi o in bicicletta</H5>
              <Deco src="sottolineato.webp" className="-left-[7px] top-[7px] size-[145px] hidden lg:block" />
              <p className="t-lg">Rimani a casa</p>
            </section>
          </div>
        </SidebarPage>

        <BannerMuseo />
        <Faq />
      </main>
    </Layout>
  )
}
