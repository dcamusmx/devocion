import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionList } from "@/components/SectionList";
import { DescargarPdfButton } from "@/components/DescargarPdfButton";

export const Route = createFileRoute("/rosario-familias/")({
  component: RosarioFamiliasIndex,
  head: () => ({ meta: [{ title: "Rosario por las familias — Devocional" }] }),
});

function RosarioFamiliasIndex() {
  return (
    <PageShell theme="maria" title="Rosario por las familias" subtitle="Rosario por las familias · 1 de 6" backTo="/" backLabel="Inicio">
      <SectionList
        theme="maria"
        items={[
          { to: "/rosario-familias/iniciales", number: 1, title: "Oraciones Iniciales", description: "Señal de la Cruz, Credo y Acto de Contrición" },
          { to: "/rosario-familias/rosario", number: 2, title: "Rosario", description: "Cinco misterios del día" },
          { to: "/rosario-familias/ofrecimiento", number: 3, title: "Ofrecimiento", description: "Por las familias y sus intenciones" },
          { to: "/rosario-familias/aves-salve", number: 4, title: "Aves Marías y Salve" },
          { to: "/rosario-familias/letanias", number: 5, title: "Letanías" },
          { to: "/rosario-familias/conclusion", number: 6, title: "Conclusión" },
        ]}
      />
      <div className="pt-4">
        <DescargarPdfButton variant="familias" />
      </div>
    </PageShell>
  );
}
