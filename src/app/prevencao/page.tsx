import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function Page() {
  return (
    <>
      <Header />
      <PagePlaceholder
        title="Prevenção de Lesões"
        description="Avaliações e estratégias para reduzir riscos e melhorar a relação entre corpo e treino."
        href="/prevencao"
      />
      <Footer />
    </>
  );
}
