import { Nav }            from '@/components/layout/Nav'
import { BackgroundFX }   from '@/components/hero/BackgroundFX'
import { Eyebrow }        from '@/components/hero/Eyebrow'
import { Headline }       from '@/components/hero/Headline'
import { Subhead }        from '@/components/hero/Subhead'
import { BulletList }     from '@/components/hero/BulletList'
import { CTAs }           from '@/components/hero/CTAs'
import { Trust }          from '@/components/hero/Trust'
import { Terminal }       from '@/components/hero/Terminal'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        <BackgroundFX />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <Eyebrow />
          <Headline />
          <div className="flex flex-col md:flex-row md:gap-[140px] md:items-start">
            <div className="w-full md:w-[44%] md:shrink-0">
              <Subhead />
              <BulletList />
              <CTAs />
              <Trust />
            </div>
            <div className="w-full md:flex-1 mt-10 md:mt-0">
              <Terminal />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}