import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Badge } from "@/components/ui/Badge";

describe("Badge", () => {
  it("renders children content", () => {
    render(<Badge>Novo curso disponível</Badge>);
    expect(screen.getByText("Novo curso disponível")).toBeInTheDocument();
  });

  it("contains a decorative dot with aria-hidden", () => {
    const { container } = render(<Badge>Label</Badge>);
    const dot = container.querySelector('[aria-hidden="true"]');
    expect(dot).toBeInTheDocument();
  });

  it("applies brand-cyan base styling", () => {
    const { container } = render(<Badge>Label</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.className).toMatch(/bg-brand-cyan/);
  });

  it("merges consumer className with base styles", () => {
    const { container } = render(<Badge className="mb-4">Label</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.className).toMatch(/mb-4/);
  });
});
