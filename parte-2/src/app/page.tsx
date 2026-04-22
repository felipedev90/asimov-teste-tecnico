import { Nav } from '@/components/layout/Nav'
import { Eyebrow } from '@/components/hero/Eyebrow'
import { Headline } from '@/components/hero/Headline'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <section className="min-h-screen pt-16 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <Eyebrow />
          <Headline />
        </div>
      </section>
    </main>
  )
}