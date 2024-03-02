import Image from 'next/image'
import Hero from './Hero'
import TechStack from './TechStack'
import Projects from './Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <TechStack />
      <Projects />
    </main>
  )
}
