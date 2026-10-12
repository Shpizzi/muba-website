import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Deco from '../components/Deco'

export default function NotFound() {
  const nav = useNavigate()
  return (
    <Layout>
      <main className="relative overflow-hidden px-gutter pt-[97px] pb-[120px] min-h-[924px]">
        <Deco src="danger.webp" className="left-[92px] top-[97px] size-[197px] hidden lg:block" />
        <Deco src="vecia-stupita.webp" className="right-0 top-[150px] size-[526px] hidden lg:block" />
        <div className="relative pt-[213px]">
          <p className="h5 uppercase">Non abbiamo ancora drenato quest’area</p>
          <h1 className="h1-md mt-5">Ndó te sì ndà?</h1>
          <p className="t-lg mt-[18px] max-w-[606px]">Purtroppo la pagina che stai cercando<br />non è stata trovata o non esiste più :(</p>
          <div className="mt-[48px] flex flex-wrap gap-5">
            <Button href="/" variant="primary" onClick={e => { if (history.length > 1) { e.preventDefault(); nav(-1) } }}>Torna indietro</Button>
            <Button href="/il-muba/storia">Scopri la bonifica</Button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
