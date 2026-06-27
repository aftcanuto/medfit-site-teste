import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PagePlaceholder from "@/components/ui/PagePlaceholder";

export default function Page() {
  return (
    <>
      <Header />
      <PagePlaceholder
        title="[Título da página]"
        description="[Descrição da página — editar em src/app/servico-extra/page.tsx]"
        href="/servico-extra"
      />
      <Footer />
    </>
  );
}
