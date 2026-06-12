import { gym, pricingPlans, schedule } from "@/data/gym";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: gym.name,
    description: gym.subheadline,
    url: gym.url,
    telephone: gym.phone,
    email: gym.email,
    image: gym.url + "/og-image.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: gym.address.street,
      addressLocality: gym.address.city,
      addressCountry: gym.address.country,
      postalCode: gym.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: gym.address.lat,
      longitude: gym.address.lng,
    },
    openingHoursSpecification: schedule.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.hours.split("–")[0]?.trim(),
      closes: s.hours.split("–")[1]?.trim(),
    })),
    priceRange: `$${pricingPlans[0].monthlyPrice} - $${pricingPlans[pricingPlans.length - 1].monthlyPrice}`,
    sameAs: [
      gym.social.instagram,
      gym.social.facebook,
      gym.social.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
