import { Link, useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import ApertoLine from '../components/ApertoLine'
import { menu, tutte } from '../data/sitemap'

// Pagina provvisoria: titolo + link alle sotto-pagine. Si sostituisce con la pagina vera quando c'è il frame Figma.
export default function Placeholder() {
  const { pathname } = useLocation()
  const page = tutte.find(p => p.to === pathname)
  const section = menu.find(s => s.to === pathname)
  const parent = menu.find(s => pathname.startsWith(s.to + '/'))
  return (
    <Layout>
      <main className="px-gutter pt-[98px] pb-[120px] min-h-[60vh] flex flex-col gap-6">
        <ApertoLine />
        {parent && <Link to={parent.to} className="t-md underline self-start">← {parent.label}</Link>}
        <h1 className="h1-bold text-[min(136px,10vw)]">{page?.label ?? 'Pagina non trovata'}</h1>
        <p className="t-lg max-w-[800px] text-muted">Bozza: contenuto da portare da Figma.</p>
        {section && (
          <ul className="mt-6 max-w-[594px]">
            {section.children.map(c => (
              <li key={c.to}><Link to={c.to} className="block py-6 border-b-[1.5px] border-black text-4xl font-semplicita">{c.label} →</Link></li>
            ))}
          </ul>
        )}
      </main>
    </Layout>
  )
}
