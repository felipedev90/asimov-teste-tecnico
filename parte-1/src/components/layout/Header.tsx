import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navigation";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex h-[68px] items-center justify-between">
        <Link href="/" aria-label="Positivus — voltar para a página inicial">
          <Image
            src="/images/logo.svg"
            alt="Positivus"
            width={220}
            height={56}
            priority
          />
        </Link>

        <nav className="flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body text-dark transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button variant="secondary" className="h-[68px] px-[35px] py-[20px]">
            Request a quote
          </Button>
        </nav>
      </div>
    </header>
  );
}