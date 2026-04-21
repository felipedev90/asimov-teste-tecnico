import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/sections/ServiceCard";
import { services } from "@/data/services";

interface ServicesProps {
  className?: string;
}

export default function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn("flex flex-col gap-[80px]", className)}>
      {/* Cabeçalho da seção */}
      <header className="flex flex-col items-start gap-[40px] md:flex-row md:items-center">
        <SectionLabel>Services</SectionLabel>

        <p className="max-w-[580px] text-body text-dark">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}