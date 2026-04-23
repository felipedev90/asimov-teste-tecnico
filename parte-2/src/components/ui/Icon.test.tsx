import { render } from "@testing-library/react";
import { Play } from "lucide-react";
import { describe, it, expect } from "vitest";

import { Icon } from "@/components/ui/Icon";

describe("Icon", () => {
  it("renders the provided Lucide icon as SVG", () => {
    const { container } = render(<Icon icon={Play} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("is decorative by default (aria-hidden)", () => {
    const { container } = render(<Icon icon={Play} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("applies aria-label when decorative is false", () => {
    const { container } = render(
      <Icon icon={Play} decorative={false} aria-label="Play video" />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-label", "Play video");
    expect(svg).not.toHaveAttribute("aria-hidden", "true");
  });

  it("always sets focusable=false on the SVG", () => {
    const { container } = render(<Icon icon={Play} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("focusable", "false");
  });

  it("applies shrink-0 by default", () => {
    const { container } = render(<Icon icon={Play} />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("class")).toMatch(/shrink-0/);
  });

  it("merges consumer className with base shrink-0", () => {
    const { container } = render(
      <Icon icon={Play} className="size-4 text-brand-cyan" />,
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("class")).toMatch(/size-4/);
    expect(svg?.getAttribute("class")).toMatch(/text-brand-cyan/);
  });
});
