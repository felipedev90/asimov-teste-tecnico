import Image from "next/image";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Plexus network image */}
      <Image
        src="/background.webp"
        alt=""
        fill
        priority
        quality={60}
        sizes="100vw"
        className="object-cover object-center opacity-[0.25] mix-blend-screen"
      />

      {/* Ambient glows */}
      <div
        className="absolute right-[-10%] top-1/2 size-[700px] -translate-y-1/2 rounded-full bg-brand-cyan/6 blur-3xl"
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] size-[500px] rounded-full bg-brand-sky/4 blur-3xl"
      />

      {/* Bottom fade — keeps background subtle under CTAs */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-bg-primary to-transparent"
      />
    </div>
  );
}