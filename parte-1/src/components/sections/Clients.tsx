import Image from "next/image";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <section
      aria-label="Nossos clientes"
      className="flex items-center justify-between"
    >
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