import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Service, ServiceVariant } from "@/data/services";

interface VariantStyle {
  card: string;
  titleTag: string;
  arrowIcon: string;
}

const variantStyles: { [K in ServiceVariant]: VariantStyle } = {
  grey: {
    card: "bg-grey",
    titleTag: "bg-primary",
    arrowIcon: "/images/arrow-black.svg",
  },
  primary: {
    card: "bg-primary",
    titleTag: "bg-white",
    arrowIcon: "/images/arrow-black.svg",
  },
  dark: {
    card: "bg-dark",
    titleTag: "bg-white",
    arrowIcon: "/images/arrow-white.svg",
  },
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const styles = variantStyles[service.variant];
  const learnMoreColor =
    service.variant === "dark" ? "text-white" : "text-dark";

  return (
    <article
      className={cn(
        "flex w-full flex-col items-center justify-between h-auto p-[30px]",
        "md:h-[310px] md:flex-row md:items-center md:p-[50px] lg:px-[20px] lg:py-[50px]",
        "rounded-[45px] border border-dark",
        "shadow-[0_5px_0_0_#191A23]",
        styles.card,
      )}
    >
      <div className="flex h-full w-full min-w-0 flex-1 flex-col items-center justify-between gap-4 md:items-start">
        <h3
          className="flex flex-col text-h3 font-medium"
          aria-label={service.title}
        >
          {service.titleLines.map((line) => (
            <span
              key={line}
              className={cn(
                "w-fit rounded-[7px] px-[7px] py-[5px]",
                styles.titleTag,
              )}
            >
              {line}
            </span>
          ))}
        </h3>

        <Link
          href={service.href}
          className="flex items-center gap-[15px]"
          aria-label={`Learn more about ${service.title}`}
        >
          <Image
            src={styles.arrowIcon}
            alt=""
            width={41}
            height={41}
            loading="lazy"
            aria-hidden="true"
          />
          <span className={cn("text-body", learnMoreColor)}>Learn more</span>
        </Link>
      </div>

      <Image
        src={service.illustration}
        alt=""
        width={210}
        height={170}
        aria-hidden="true"
        loading="lazy"
        className="mt-4 w-[150px] shrink-0 md:mt-0 md:w-[170px] xl:w-[210px]"
      />
    </article>
  );
}
