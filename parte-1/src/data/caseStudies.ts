export interface CaseStudy {
  id: string;
  description: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "restaurant",
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    href: "#case-restaurant",
  },
  {
    id: "b2b-software",
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    href: "#case-b2b",
  },
  {
    id: "retail-chain",
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    href: "#case-retail",
  },
];