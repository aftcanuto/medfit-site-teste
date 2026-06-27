import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function Page() {
  return (
    <>
      <Header />
      <PagePlaceholder
        title="Emagrecimento"
        description="Força, equilíbrio, funcionalidade e exercício orientado para seus objetivos."
        href="/longevidade"
      />
      <Footer />
    </>
  );
}
