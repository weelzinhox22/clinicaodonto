import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { About } from "@/components/site/About";
import { Treatments } from "@/components/site/Treatments";
import { Differentials } from "@/components/site/Differentials";
import { HowItWorks } from "@/components/site/HowItWorks";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Team } from "@/components/site/Team";
import { Tour } from "@/components/site/Tour";
import { Results } from "@/components/site/Results";
import { FAQ } from "@/components/site/FAQ";
import { CTABanner } from "@/components/site/CTABanner";
import { ContactForm } from "@/components/site/ContactForm";
import { Location } from "@/components/site/Location";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { SITE } from "@/lib/site";

const TITLE = "Sorriso Vivo — Odontologia Premium em Salvador";
const DESC =
  "Clínica odontológica premium em Salvador, Bahia. Implantes, lentes, ortodontia, clareamento e mais. Atendimento humanizado e tecnologia de ponta.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "clínica odontológica Salvador, dentista premium Bahia, implante, lentes de contato dental, ortodontia, clareamento" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: SITE.name,
          description: DESC,
          image: "/og-image.jpg",
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Tancredo Neves, 1500",
            addressLocality: "Salvador",
            addressRegion: "BA",
            addressCountry: "BR",
          },
          openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-14:00"],
          priceRange: "$$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Treatments />
        <Differentials />
        <HowItWorks />
        <BeforeAfter />
        <Team />
        <Tour />
        <Results />
        <FAQ />
        <CTABanner />
        <ContactForm />
        <Location />
        <Blog />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
