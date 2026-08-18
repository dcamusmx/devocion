import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionList } from "@/components/SectionList";
import { DescargarPdfButton } from "@/components/DescargarPdfButton";
import { grupoDelDia, NOMBRE_DIAS } from "@/data/misterios";

export const Route = createFileRoute("/rosario-maria/")({
  component: RosarioMariaIndex,
  head: () => ({ meta: [{ title: "Rosario a Santa María — Devocional" }] }),
});

function RosarioMariaIndex() {
  const today = new Date();
  const grupo = grupoDelDia(today);
  return (
    <PageShell
      theme="maria"
      title="Rosario a Santa María"
      subtitle={`${NOMBRE_DIAS[today.getDay()]} · Misterios ${grupo}`}
      backTo="/"
      backLabel="Inicio"
    >
      <SectionList
        theme="maria"
        items={[
          { to: "/rosario-maria/iniciales", number: 1, title: "Oraciones Iniciales", description: "Señal de la Cruz, Acto de Contrición, Credo, Invocaciones" },
          { to: "/rosario-maria/rosario", number: 2, title: "Rosario", description: `Cinco misterios ${grupo.toLowerCase()}` },
          { to: "/rosario-maria/ofrecimiento", number: 3, title: "Ofrecimiento", description: "Padre Nuestro y tus intenciones" },
          { to: "/rosario-maria/aves-salve", number: 4, title: "Aves Marías y Salve" },
          { to: "/rosario-maria/letanias", number: 5, title: "Letanías Lauretanas" },
          { to: "/rosario-maria/conclusion", number: 6, title: "Conclusión" },
        ]}
      />
      <div className="pt-4">
        <DescargarPdfButton variant="maria" />
      </div>
    </PageShell>
  );
}
