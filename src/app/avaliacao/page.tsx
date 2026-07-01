import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SubPageHero from "@/components/subpage/SubPageHero";
import SubPageFeatures from "@/components/subpage/SubPageFeatures";
import SubPageCTA from "@/components/subpage/SubPageCTA";
import { AVALIACAO } from "@/config/content-avaliacao";

export default function Page() {
  const d = AVALIACAO;
  return (
    <>
      <Header />
      <main>
        <SubPageHero {...d.hero} />
        <SubPageFeatures eyebrow={d.features.eyebrow} title={d.features.title} body={d.features.body} features={d.features.items} />
        <SubPageCTA {...d.cta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
