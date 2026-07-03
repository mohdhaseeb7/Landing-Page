import { WEBINAR_CONFIG, SITE_URL } from "@/config/webinar";

const { brand, details, speaker, faq, meta } = WEBINAR_CONFIG;

/**
 * JSON-LD structured data for SEO/AEO. Built from the same config the page
 * renders from, so the machine-readable facts can never drift from the visible
 * ones. Emits an @graph with Organization, the webinar Event, the FAQ, and the
 * speaker so answer engines and rich results can parse the page.
 */
export default function StructuredData() {
  const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: brand.org,
      url: brand.orgUrl,
      logo: abs(brand.logo),
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#speaker`,
      name: speaker.name,
      jobTitle: speaker.role,
      image: abs(speaker.photoUrl),
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description: speaker.bio,
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#event`,
      name: brand.name,
      description: meta.description,
      startDate: details.countdownDateStr,
      endDate: details.endDateStr,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      image: [abs("/opengraph-image")],
      location: {
        "@type": "VirtualLocation",
        url: abs("/#register"),
      },
      organizer: { "@id": `${SITE_URL}/#organization` },
      performer: { "@id": `${SITE_URL}/#speaker` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: abs("/#register"),
        validFrom: new Date().toISOString(),
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
