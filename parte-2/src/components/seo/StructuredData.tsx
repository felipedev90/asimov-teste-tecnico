import { siteConfig } from "@/lib/site-config";

export function StructuredData() {
  const { course, url: siteUrl, name: siteName } = siteConfig;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: siteUrl,
    inLanguage: course.inLanguage,
    provider: {
      "@type": "Organization",
      name: course.provider.name,
      url: course.provider.url,
      sameAs: course.provider.url,
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      inLanguage: course.inLanguage,
      courseWorkload: `PT${course.hoursContent}H`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: course.numberOfStudents.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    educationalCredentialAwarded: "Certificado de conclusão",
    teaches: [
      "Python",
      "Inteligência Artificial",
      "Machine Learning",
      "Data Science",
      "Desenvolvimento de projetos com IA",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    url: siteUrl,
    sameAs: [course.provider.url],
    description: siteConfig.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}