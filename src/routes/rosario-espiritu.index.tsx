import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionList } from "@/components/SectionList";

export const Route = createFileRoute("/rosario-espiritu/")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario al Espíritu Santo — Devocional" }] }),
});

function Page() {
  return (
    <PageShell
      theme="espiritu"
      title="Rosario al Espíritu Santo"
      subtitle="Siete misterios — los siete dones"
      backTo="/"
      backLabel="Inicio"
    >
      <SectionList
        theme="espiritu"
        items={[
          { to: "/rosario-espiritu/iniciales", number: 1, title: "Oraciones Iniciales", description: "Señal de la Cruz, Credo, Padre Nuestro, Invocaciones" },
          { to: "/rosario-espiritu/rosario", number: 2, title: "Rosario", description: "Siete misterios y siete oraciones por misterio" },
          { to: "/rosario-espiritu/ofrecimiento", number: 3, title: "Ofrecimiento" },
          { to: "/rosario-espiritu/letanias", number: 4, title: "Letanías al Espíritu Santo" },
          { to: "/rosario-espiritu/consagracion", number: 5, title: "Consagración" },
        ]}
      />
    </PageShell>
  );
}
