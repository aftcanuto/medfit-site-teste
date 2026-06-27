import Header          from "@/components/layout/Header";
import Footer          from "@/components/layout/Footer";
import Hero            from "@/components/sections/Hero";
import VideoSection    from "@/components/sections/VideoSection";
import QuemSomosSection from "@/components/sections/QuemSomosSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MethodSection   from "@/components/sections/MethodSection";
import FAQSection      from "@/components/sections/FAQSection";
import LocationSection from "@/components/sections/LocationSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <QuemSomosSection />
        <ServicesSection />
        <MethodSection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
