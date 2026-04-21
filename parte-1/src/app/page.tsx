import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import CaseStudies from "@/components/sections/CaseStudies";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-[100px] pt-[60px]">
      <Header />
      <main className="mt-[70px] pb-[70px]">
        <Hero />
        <Clients className="mt-[70px]" />
        <Services className="mt-[140px]" />
        <CTA className="mt-[140px]" />
        <CaseStudies className="mt-[140px]" />
      </main>
    </div>
  );
}