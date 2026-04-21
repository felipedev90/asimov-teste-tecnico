import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import CaseStudies from "@/components/sections/CaseStudies";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-[20px] pt-[40px] md:px-[100px] md:pt-[60px]">
      <Header />
      <main className="mt-[70px] pb-[70px]">
        <FadeIn>
        <Hero />
          <Clients className="mt-[70px]" />
        </FadeIn>
        <FadeIn>
          <Services className="mt-[140px]" />
        </FadeIn>
        <FadeIn>
          <CTA className="mt-[140px]" />
        </FadeIn>
        <FadeIn>
          <CaseStudies className="mt-[140px]" />
        </FadeIn>
      </main>
    </div>
  );
}