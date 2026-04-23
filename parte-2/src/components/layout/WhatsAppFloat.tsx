import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  const { phoneNumber, message } = siteConfig.whatsapp;

  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Asimov Academy pelo WhatsApp"
      className={cn(
        // Position
        "fixed bottom-5 right-5 z-50",
        "md:bottom-6 md:right-6",
        // Respect iOS safe areas
        "mb-[env(safe-area-inset-bottom)]",
        // Size — touch target WCAG AAA
        "flex size-14 items-center justify-center",
        // Appearance
        "rounded-full",
        "bg-[#25d366] text-white",
        "shadow-lg shadow-[#25d366]/30",
        // Interaction
        "transition-all duration-200",
        "hover:scale-110 hover:shadow-xl hover:shadow-[#25d366]/40",
        "active:scale-95",
        // Focus ring
        "focus-visible:outline-none",
        "focus-visible:ring-4 focus-visible:ring-[#25d366]/50",
        // Subtle entrance
        "motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in",
        "motion-safe:duration-500",
      )}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
