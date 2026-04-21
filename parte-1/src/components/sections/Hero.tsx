import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex items-center justify-between gap-10">
      {/* Bloco de texto */}
      <div className="flex max-w-[531px] flex-col">
        <h1 className="text-h1 font-medium text-dark">
          Navigating the digital landscape for success
        </h1>

        <p className="mt-[35px] max-w-[498px] text-body text-darkk">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media marketing,
          and content creation.
        </p>

        <Button variant="primary" className="mt-[35px] w-fit">
          Book a consultation
        </Button>
      </div>

      {/* Ilustração */}
      <div className="shrink-0">
        <Image
          src="/images/hero-illustration.svg"
          alt="Ilustração de megafone com elementos decorativos representando marketing digital"
          width={600}
          height={515}
          priority
        />
      </div>
    </section>
  );
}