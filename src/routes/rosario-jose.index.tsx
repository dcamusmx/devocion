import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionList } from "@/components/SectionList";
import { DescargarPdfButton } from "@/components/DescargarPdfButton";

export const Route = createFileRoute("/rosario-jose/")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario a San José — Devocional" }] }),
});

function Page() {
  return (
    <PageShell theme="jose" title="Rosario a San José" subtitle="Padre adoptivo del Redentor" backTo="/" backLabel="Inicio">
      <SectionList
        theme="jose"
        items={[
          { to: "/rosario-jose/iniciales", number: 1, title: "Oraciones Iniciales", description: "Espíritu Santo, Oración a San José, Cruz, Contrición" },
          { to: "/rosario-jose/rosario", number: 2, title: "Rosario", description: "Cinco misterios del día" },
          { to: "/rosario-jose/ofrecimiento", number: 3, title: "Ofrecimiento" },
          { to: "/rosario-jose/aves-salve", number: 4, title: "Aves Marías y Salve" },
          { to: "/rosario-jose/letanias", number: 5, title: "Letanías a San José" },
          { to: "/rosario-jose/conclusion", number: 6, title: "Conclusión" },
        ]}
      />
      <div className="pt-4">
        <DescargarPdfButton variant="jose" />
      </div>
    </PageShell>
  );
}
