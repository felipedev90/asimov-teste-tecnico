import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-[100px] pt-[60px]">
      <Header />
      <main className="mt-[70px]">
        <Hero />
        <Clients className="mt-[70px]" />
        <Services className="mt-[140px]" />
      </main>
    </div>
  );
}