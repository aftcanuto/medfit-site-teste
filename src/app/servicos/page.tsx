import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function Page() {
  return (
    <>
      <Header />
      <PagePlaceholder
        title="Serviços"
        description="Conheça todas as áreas de atendimento da MedFit."
        href="/servicos"
      />
      <Footer />
    </>
  );
}
