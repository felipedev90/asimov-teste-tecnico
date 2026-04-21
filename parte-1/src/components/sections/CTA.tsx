import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  className?: string;
}

export default function CTA({ className }: CTAProps) {
  return (
    <section className={className}>
      <div className="flex flex-col gap-10 rounded-[45px] bg-grey px-[60px] py-[60px] md:relative md:flex-row md:items-center md:justify-between">
        {/* Texto */}
        <div className="flex max-w-full flex-col gap-[26px] md:max-w-[500px]">
          <h2 className="text-h2-mobile font-medium text-dark md:text-h2">
            Let's make things happen
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
        <div className="flex justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <Image
            src="/images/cta-illustration.svg"
            alt=""
            width={494}
            height={394}
            aria-hidden="true"
            className="h-auto max-w-[280px] md:h-[394px] md:max-w-none md:w-[494px]"
          />
        </div>
      </div>
    </section>
  );
}