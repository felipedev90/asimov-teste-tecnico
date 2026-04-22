import type { LucideIcon } from "lucide-react";

// ── Navigation

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

// ── Hero copy

export type HighlightSegment = {
  type: "highlight";
  text: string;
};

export type PlainSegment = {
  type: "plain";
  text: string;
};

export type HeadlineSegment = PlainSegment | HighlightSegment;

export type HeroBullet = {
  icon: LucideIcon;
  text: string;
};

export type HeroCTA = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroCopy = {
  eyebrow: string;
  headline: readonly HeadlineSegment[];
  subheadline: string;
  bullets: readonly HeroBullet[];
  ctas: readonly HeroCTA[];
};

// ── Terminal

export type CodeTokenType =
  | "keyword"
  | "identifier"
  | "function"
  | "number"
  | "comment"
  | "plain";

export type CodeToken = {
  type: CodeTokenType;
  text: string;
};

export type CodeLine = {
  number: number;
  tokens: CodeToken[];
};