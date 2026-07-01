// src/components/ui/PagePlaceholder.tsx
// Componente reutilizável para páginas internas ainda não desenvolvidas

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  description: string;
  href: string;
}

export default function PagePlaceholder({ title, description, href }: PagePlaceholderProps) {
  return (
    <main className="min-h-screen bg-bege-claro flex items-center justify-center section-padding">
      <div className="max-w-lg text-center">
        <p className="eyebrow mb-4">Em breve</p>
        <h1 className="font-display text-display-md text-texto-escuro mb-4">{title}</h1>
        <p className="text-texto-medio text-lg leading-relaxed mb-8">{description}</p>
        <Link href="/" className="btn-secondary gap-2">
          <ArrowLeft size={16} />
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
