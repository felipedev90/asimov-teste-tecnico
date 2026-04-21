import Image from "next/image";
import { cn } from "@/lib/utils";
import { clients } from "@/data/clients";

interface ClientsProps {
  className?: string;
}

export default function Clients({ className }: ClientsProps) {
  return (
    <section aria-label="Nossos clientes" className={cn("flex items-center justify-between", className)}>
      {clients.map((client) => (
        <Image
          key={client.name}
          src={client.logo}
          alt={`Logo ${client.name}`}
          width={124}
          height={48}
          className="grayscale transition-all hover:grayscale-0"
        />
      ))}
    </section>
  );
}