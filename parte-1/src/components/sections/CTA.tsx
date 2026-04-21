import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  className?: string;
}

export default function CTA({ className }: CTAProps) {
  return (
    <section className={className}>
      <div className="relative flex items-center justify-between rounded-[45px] bg-grey px-[60px] py-[60px]">
        {/* Texto */}
        <div className="flex max-w-[500px] flex-col gap-[26px]">
          <h2 className="text-h2 font-medium text-dark">
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/images/cta-illustration.svg"
            alt=""
            width={494}
            height={394}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}