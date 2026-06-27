import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function Page() {
  return (
    <>
      <Header />
      <PagePlaceholder
        title="TAF"
        description="Avaliação objetiva da força, simetrias e desequilíbrios para orientar treino e prevenção."
        href="/taf"
      />
      <Footer />
    </>
  );
}
