import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { FloatingCard } from "@/components/ui/FloatingCard";

describe("FloatingCard", () => {
  it("renders children content", () => {
    const { getByText } = render(
      <FloatingCard>
        <span>Card content</span>
      </FloatingCard>,
    );
    expect(getByText("Card content")).toBeInTheDocument();
  });

  it("applies base styles (absolute positioning, card background)", () => {
    const { container } = render(<FloatingCard>content</FloatingCard>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/absolute/);
    expect(card.className).toMatch(/bg-bg-card/);
  });

  it("does not apply animation class when animation prop is omitted", () => {
    const { container } = render(<FloatingCard>content</FloatingCard>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toMatch(/animate-float/);
  });

  it("applies float-a animation when specified", () => {
    const { container } = render(
      <FloatingCard animation="float-a">content</FloatingCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/animate-float-a/);
  });

  it("applies float-b animation when specified", () => {
    const { container } = render(
      <FloatingCard animation="float-b">content</FloatingCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/animate-float-b/);
  });

  it("applies float-c animation when specified", () => {
    const { container } = render(
      <FloatingCard animation="float-c">content</FloatingCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/animate-float-c/);
  });

  it("applies float-d animation when specified", () => {
    const { container } = render(
      <FloatingCard animation="float-d">content</FloatingCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/animate-float-d/);
  });

  it("wraps animation class with motion-safe prefix", () => {
    const { container } = render(
      <FloatingCard animation="float-a">content</FloatingCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/motion-safe:animate-float-a/);
  });

  it("merges consumer className with base styles", () => {
    const { container } = render(
      <FloatingCard className="top-10 right-4">content</FloatingCard>,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toMatch(/top-10/);
    expect(card.className).toMatch(/right-4/);
  });
});
