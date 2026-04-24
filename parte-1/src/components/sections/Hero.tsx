import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
      {/* Bloco de texto */}
      <div className="flex w-full flex-col items-center text-center md:max-w-[531px] md:items-start md:text-left">
        <h1 className="text-h1 font-medium text-dark">
          Navigating the digital landscape for success
        </h1>

        <p className="mt-[35px] text-body text-dark md:max-w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <Button variant="primary" className="mt-[35px] w-fit">
          Book a consultation
        </Button>
      </div>

      {/* Ilustração */}
      <div className="w-full max-w-full md:w-auto md:shrink-0">
        <Image
          src="/images/hero-illustration.svg"
          alt="Ilustração de megafone com elementos decorativos representando marketing digital"
          width={600}
          height={515}
          priority
          className="h-auto w-full md:w-[480px] lg:w-[540px] xl:w-[600px]"
        />
      </div>
    </section>
  );
}
