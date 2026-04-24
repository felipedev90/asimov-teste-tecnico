import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  className?: string;
}

export default function CTA({ className }: CTAProps) {
  return (
    <section className={className}>
      <div className="relative flex flex-col gap-10 rounded-[45px] bg-grey px-[40px] py-[50px] md:px-[60px] md:py-[60px] lg:flex-row lg:items-center lg:justify-between">
        {/* Texto */}
        <div className="flex max-w-full flex-col gap-[26px] lg:max-w-[420px] xl:max-w-[500px]">
          <h2 className="text-h2-mobile font-medium text-dark md:text-h2">
            Let&apos;s make things happen
          </h2>
          <p className="text-body text-dark">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button variant="primary" className="w-fit">
            Get your free proposal
          </Button>
        </div>

        {/* Ilustração */}
        <div className="flex justify-center lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
          <Image
            src="/images/cta-illustration.svg"
            alt=""
            width={494}
            height={394}
            aria-hidden="true"
            loading="lazy"
            className="h-auto max-w-[280px] lg:h-auto lg:w-[320px] lg:max-w-none xl:h-[394px] xl:w-[494px]"
          />
        </div>
      </div>
    </section>
  );
}
