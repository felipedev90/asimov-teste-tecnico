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
        "flex h-[310px] w-[600px] items-center justify-between",
        "rounded-[45px] border border-dark p-[50px]",
        "shadow-[0_5px_0_0_#191A23]",
        styles.card,
      )}
    >
      <div className="flex h-full w-[221px] flex-col justify-between">
        <h3
          className="flex flex-col text-h3 font-medium"
          aria-label={service.title}
        >
          {service.titleLines.map((line) => (
            <span
              key={line}
              className={cn("w-fit rounded-[7px] px-[7px]", styles.titleTag)}
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
      />
    </article>
  );
}