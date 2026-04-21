import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { caseStudies } from "@/data/caseStudies";

interface CaseStudiesProps {
  className?: string;
}

export default function CaseStudies({ className }: CaseStudiesProps) {
  return (
    <section id="use-cases" className={className}>
      {/* Cabeçalho */}
      <header className="flex flex-col items-start gap-[40px] md:flex-row md:items-center">
        <SectionLabel>Case Studies</SectionLabel>
        <p className="max-w-[580px] text-body text-dark">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </header>

      {/* Card escuro com 3 colunas */}
      <div className="mt-[80px] rounded-[45px] bg-dark px-[60px] py-[70px]">
        <div className="flex flex-col items-start gap-0 md:flex-row">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="flex w-full flex-col items-start md:flex-row md:items-start">
              {/* Coluna de conteúdo */}
              <div className="flex max-w-full flex-col justify-between gap-[20px] md:max-w-[286px]">
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

              {/* Divisória — não renderiza após o último item */}
              {index < caseStudies.length - 1 && (
                <div className="mx-0 my-[32px] h-px w-full bg-white md:mx-[64px] md:my-0 md:h-[186px] md:w-px" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}