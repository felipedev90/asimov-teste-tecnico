import { Nav } from '@/components/layout/Nav'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <section className="min-h-screen flex items-center justify-center pt-16">
        <p className="text-fg-muted font-logo text-sm">Hero em construção…</p>
      </section>
    </main>
  )
}