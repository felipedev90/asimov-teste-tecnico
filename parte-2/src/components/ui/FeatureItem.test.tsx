import { render, screen } from "@testing-library/react";
import { Play } from "lucide-react";
import { describe, it, expect } from "vitest";

import { FeatureItem } from "@/components/ui/FeatureItem";

describe("FeatureItem", () => {
  it("renders as a list item", () => {
    render(
      <ul>
        <FeatureItem icon={Play}>+40 horas de conteúdo</FeatureItem>
      </ul>,
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("renders children text", () => {
    render(
      <ul>
        <FeatureItem icon={Play}>+40 horas de conteúdo</FeatureItem>
      </ul>,
    );
    expect(screen.getByText("+40 horas de conteúdo")).toBeInTheDocument();
  });

  it("renders the provided icon as an SVG", () => {
    const { container } = render(
      <ul>
        <FeatureItem icon={Play}>Any text</FeatureItem>
      </ul>,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("merges consumer className with base styles", () => {
    render(
      <ul>
        <FeatureItem icon={Play} className="custom-class">
          Text
        </FeatureItem>
      </ul>,
    );
    expect(screen.getByRole("listitem").className).toMatch(/custom-class/);
  });
});
