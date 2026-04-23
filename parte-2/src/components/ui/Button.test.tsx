import { render, screen } from "@testing-library/react";
import { ArrowRight } from "lucide-react";
import { describe, it, expect, vi } from "vitest";

import { Button } from "@/components/ui/Button";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Button", () => {
  it("renders children text", () => {
    render(<Button href="#test">Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as an anchor with the correct href", () => {
    render(<Button href="#target">Go</Button>);
    const link = screen.getByRole("link", { name: /go/i });
    expect(link).toHaveAttribute("href", "#target");
  });

  it("applies primary variant styles by default", () => {
    render(<Button href="#">Primary</Button>);
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/bg-brand-cyan/);
  });

  it("applies secondary variant styles when specified", () => {
    render(
      <Button href="#" variant="secondary">
        Secondary
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/border-brand-cyan/);
  });

  it("applies ghost variant styles when specified", () => {
    render(
      <Button href="#" variant="ghost">
        Ghost
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/border-white/);
  });

  it("renders icon when provided", () => {
    const { container } = render(
      <Button href="#" icon={ArrowRight}>
        With icon
      </Button>,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("does not render icon when omitted", () => {
    const { container } = render(<Button href="#">No icon</Button>);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("merges consumer className with variant styles", () => {
    render(
      <Button href="#" className="w-full">
        Wide
      </Button>,
    );
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/w-full/);
  });

  it("has focus-visible ring classes for keyboard a11y", () => {
    render(<Button href="#">Focus</Button>);
    const link = screen.getByRole("link");
    expect(link.className).toMatch(/focus-visible:ring/);
  });
});
