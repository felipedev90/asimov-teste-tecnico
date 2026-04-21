import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px] px-[100px] pt-[60px]">
      <Header />
      <main className="mt-[70px] flex flex-col gap-[70px]">
        <Hero />
        <Clients />
      </main>
    </div>
  );
}