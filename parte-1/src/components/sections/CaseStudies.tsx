import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { caseStudies } from "@/data/caseStudies";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

interface CaseStudiesProps {
  className?: string;
}

export default function CaseStudies({ className }: CaseStudiesProps) {
  return (
    <section
      id="use-cases"
      className={cn("flex flex-col gap-[80px]", className)}
    >
      {/* Cabeçalho */}
      <header className="flex flex-col items-start gap-[40px] md:flex-row md:items-center">
        <SectionLabel>Case Studies</SectionLabel>
        <p className="max-w-[580px] text-body text-dark">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </header>

      {/* Card escuro com 3 colunas */}
      {/* Card escuro com 3 colunas */}
      <div className="rounded-[45px] bg-dark px-[40px] py-[70px] md:px-[60px]">
        <div className="flex flex-col items-start gap-0 lg:flex-row lg:items-stretch lg:gap-[64px]">
          {caseStudies.map((study, index) => (
            <Fragment key={study.id}>
              {/* Coluna de conteúdo */}
              <div
                key={study.id}
                className="flex w-full max-w-full flex-col justify-between gap-[20px] lg:flex-1"
              >
                <p className="text-body text-white">{study.description}</p>
                <Link
                  href={study.href}
                  className="flex items-center gap-[15px] text-primary"
                  aria-label={`Learn more about case study ${index + 1}`}
                >
                  <span className="text-body">Learn more</span>
                  <Image
                    src="/images/arrow-green.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Divisória — entre items, não dentro deles */}
              {index < caseStudies.length - 1 && (
                <div
                  key={`divider-${study.id}`}
                  className="my-[32px] h-px w-full bg-white lg:my-0 lg:h-auto lg:w-px lg:self-stretch"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
