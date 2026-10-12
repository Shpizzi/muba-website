import { useState } from 'react'
import Header from '../components/Header'
import Track from '../components/Track'
import Hero from './home/Hero'
import Eventi from './home/Eventi'
import ProvaDiValore from './home/ProvaDiValore'
import Marquee from './home/Marquee'
import Quiz from './home/Quiz'
import CosaPossoFare from './home/CosaPossoFare'
import Chiusura from './home/Chiusura'

// Larghezza = somma delle slide; gli stops agganciano quiz, lista e pagine (in entrambe le direzioni).
export default function Home() {
  const [answered, setAnswered] = useState(false)
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-20"><Header /></div>
      <Track width={12363} stops={[{ at: 5240, align: 'center' }, { at: 9040, align: 'end' }, { at: 10880, align: 'end' }]}>
        <Hero />
        <Eventi />
        <ProvaDiValore />
        <Quiz answered={answered} onAnswer={() => setAnswered(true)} />
        <Marquee />
        <CosaPossoFare />
        <Chiusura />
      </Track>
    </>
  )
}
