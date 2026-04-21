export type ServiceVariant = "grey" | "primary" | "dark";

export interface Service {
  id: string;
  title: string;
  titleLines: string[];
  variant: ServiceVariant;
  illustration: string;
  href: string;
}

export const services: Service[] = [
  {
    id: "seo",
    title: "Search engine optimization",
    titleLines: ["Search engine", "optimization"],
    variant: "grey",
    illustration: "/images/services/seo.svg",
    href: "#seo",
  },
  {
    id: "ppc",
    title: "Pay-per-click advertising",
    titleLines: ["Pay-per-click", "advertising"],
    variant: "primary",
    illustration: "/images/services/ppc.svg",
    href: "#ppc",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    titleLines: ["Social Media", "Marketing"],
    variant: "dark",
    illustration: "/images/services/social-media.svg",
    href: "#social-media",
  },
  {
    id: "email",
    title: "Email Marketing",
    titleLines: ["Email", "Marketing"],
    variant: "grey",
    illustration: "/images/services/email.svg",
    href: "#email",
  },
  {
    id: "content",
    title: "Content Creation",
    titleLines: ["Content", "Creation"],
    variant: "primary",
    illustration: "/images/services/content.svg",
    href: "#content",
  },
  {
    id: "analytics",
    title: "Analytics and Tracking",
    titleLines: ["Analytics and", "Tracking"],
    variant: "dark",
    illustration: "/images/services/analytics.svg",
    href: "#analytics",
  },
];