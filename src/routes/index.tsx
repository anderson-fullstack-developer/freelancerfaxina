import { createFileRoute } from "@tanstack/react-router";
import { DemoLocked } from "@/components/DemoLocked";

// Demonstração desativada até o cliente ativar o website. Mudar para false para voltar a mostrar o site.
const DEMO_LOCKED = true;
import { Header } from "@/components/site/Header";
import { AboutSection, FAQAccordion, FinalCTA, HeroSection, HowItWorksSection, ServicesSection } from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer, MobileStickyCTA } from "@/components/site/Footer";

const SITE_URL = "https://ana-lessa-limpezas.vercel.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Lessa — Limpeza da casa e engomar roupa" },
      { name: "description", content: "Mais tempo para si: eu cuido do resto! Limpeza da casa, limpezas profundas e engomar roupa. Peça o seu orçamento por WhatsApp." },
      { property: "og:title", content: "Ana Lessa — Limpeza e cuidado da casa" },
      { property: "og:description", content: "Mais tempo para si: eu cuido do resto! Peça o seu orçamento por WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ana Lessa" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:url", content: SITE_URL },
      // Square logo: WhatsApp shows it as a small thumbnail next to the link.
      { property: "og:image", content: `${SITE_URL}/og-logo.jpg` },
      { property: "og:image:secure_url", content: `${SITE_URL}/og-logo.jpg` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      { property: "og:image:alt", content: "Ana Lessa — limpeza e cuidado da casa" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: `${SITE_URL}/og-logo.jpg` },
    ],
  }),
  component: DEMO_LOCKED ? LockedPage : Index,
});

function Index() {
  return (
    <>
      <a href="#servicos" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">Saltar para o conteúdo</a>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <Gallery />
        <QuoteForm />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

function LockedPage() {
  return <DemoLocked business="Ana Lessa Limpezas" />;
}
