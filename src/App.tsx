import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuProvider from './components/MenuProvider'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Contatti from './pages/Contatti'
import LaVisita from './pages/LaVisita'
import ComeArrivare from './pages/ComeArrivare'
import Accessibilita from './pages/Accessibilita'
import Programma from './pages/Programma'
import MostraPermanente from './pages/MostraPermanente'
import Attivita from './pages/Attivita'
import MostreTemporanee from './pages/MostreTemporanee'
import Storia from './pages/Storia'
import ChiSiamo from './pages/ChiSiamo'
import LeMemorie from './pages/LeMemorie'
import Biglietti from './pages/Biglietti'
import Prenota from './pages/Prenota'
import MuseoDigitale from './pages/MuseoDigitale'
import Reperto from './pages/Reperto'
import Eventi from './pages/Eventi'
import EventoSingolo from './pages/EventoSingolo'
import NotFound from './pages/NotFound'
import Quiz from './pages/Quiz'
import Placeholder from './pages/Placeholder'
import SmoothWheel from './components/SmoothWheel'
import ScrollEffects from './components/ScrollEffects'
import { tutte } from './data/sitemap'

// Pagine già costruite; tutte le altre usano Placeholder.
const fatte: Record<string, ReactElement> = {
  '/la-visita/museo-digitale': <MuseoDigitale />,
  '/i-custodi/membership': <Membership />,
  '/contatti': <Contatti />,
  '/la-visita': <LaVisita />,
  '/la-visita/come-arrivare': <ComeArrivare />,
  '/la-visita/biglietti': <Biglietti />,
  '/la-visita/biglietti/prenota': <Prenota />,
  '/la-visita/accessibilita': <Accessibilita />,
  '/il-programma': <Programma />,
  '/il-programma/mostra-permanente': <MostraPermanente />,
  '/il-programma/attivita': <Attivita />,
  '/il-programma/mostre-temporanee': <MostreTemporanee />,
  '/gli-eventi/in-corso': <Eventi />,
  '/il-muba': <ChiSiamo />,
  '/il-muba/storia': <Storia />,
  '/il-muba/memoria': <LeMemorie />,
  '/quiz': <Quiz />,
  '/il-muba/archivio-e-ricerca': <NotFound />,
  '/i-custodi/partner': <NotFound />,
  '/i-custodi/staff': <NotFound />,
  '/la-visita/da-dove-iniziare': <NotFound />,
  '/policies': <NotFound />,
  '/supporto': <NotFound />,
  '/newsletter': <NotFound />,
}

export default function App() {
  return (
    <MenuProvider>
      <ScrollEffects />
      <SmoothWheel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gli-eventi" element={<Eventi />} />
        {tutte.map(p => <Route key={p.to} path={p.to} element={fatte[p.to] ?? <Placeholder />} />)}
        <Route path="/gli-eventi/evento" element={<EventoSingolo />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/la-visita/museo-digitale/reperto" element={<Reperto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MenuProvider>
  )
}
