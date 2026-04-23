import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { ShimmerText } from "@/components/ui/ShimmerText";

describe("ShimmerText", () => {
  it("renders children as text", () => {
    render(<ShimmerText>Aprenda</ShimmerText>);
    expect(screen.getByText("Aprenda")).toBeInTheDocument();
  });

  it("applies white gradient by default", () => {
    const { container } = render(<ShimmerText>White text</ShimmerText>);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/#ffffff/);
  });

  it("applies orange gradient when variant is orange", () => {
    const { container } = render(
      <ShimmerText variant="orange">Python</ShimmerText>,
    );
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/#f97316/);
  });

  it("has bg-clip-text and text-transparent classes for gradient effect", () => {
    const { container } = render(<ShimmerText>Gradient</ShimmerText>);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/bg-clip-text/);
    expect(span.className).toMatch(/text-transparent/);
  });

  it("uses motion-safe prefix for reduced-motion accessibility", () => {
    const { container } = render(<ShimmerText>Safe</ShimmerText>);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/motion-safe:/);
  });

  it("merges consumer className with base styles", () => {
    const { container } = render(
      <ShimmerText className="extra-class">Custom</ShimmerText>,
    );
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/extra-class/);
  });
});
