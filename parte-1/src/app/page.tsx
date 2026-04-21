import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-4 items-start">
      <Button variant="primary">Book a consultation</Button>
      <Button variant="secondary">Request a quote</Button>
      <Button variant="accent">Learn more</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </main>
  );
}