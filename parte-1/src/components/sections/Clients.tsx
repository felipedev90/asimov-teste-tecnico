import Image from "next/image";
import { cn } from "@/lib/utils";
import { clients } from "@/data/clients";

interface ClientsProps {
  className?: string;
}

export default function Clients({ className }: ClientsProps) {
  return (
    <section
      aria-label="Nossos clientes"
      className={cn(
        "grid grid-cols-3 gap-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-12 md:gap-y-8 lg:gap-x-4 lg:justify-between",
        className,
      )}
    >
      {clients.map((client) => (
        <Image
          key={client.name}
          src={client.logo}
          alt={`Logo ${client.name}`}
          width={124}
          height={48}
          loading="lazy"
          className="grayscale transition-all hover:grayscale-0"
        />
      ))}
    </section>
  );
}
