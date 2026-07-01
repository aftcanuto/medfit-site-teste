import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function Page() {
  return (
    <>
      <Header />
      <PagePlaceholder
        title="Avaliação Física"
        description="Entenda seu ponto de partida com dados objetivos sobre força, composição corporal e funcionalidade."
        href="/avaliacao-fisica"
      />
      <Footer />
    </>
  );
}
