import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionList } from "@/components/SectionList";

export const Route = createFileRoute("/coronilla-jose/")({
  component: Page,
  head: () => ({ meta: [{ title: "Coronilla a San José" }] }),
});

function Page() {
  return (
    <PageShell theme="coronilla" title="Coronilla a San José" subtitle="Las cinco virtudes de San José" backTo="/" backLabel="Inicio">
      <SectionList
        theme="coronilla"
        items={[
          { to: "/coronilla-jose/iniciales", number: 1, title: "Oraciones Iniciales" },
          { to: "/coronilla-jose/coronilla", number: 2, title: "Coronilla", description: "Cinco virtudes con guía interactiva" },
          { to: "/coronilla-jose/ofrecimiento", number: 3, title: "Ofrecimiento" },
          { to: "/coronilla-jose/salve-jose", number: 4, title: "Salve José" },
          { to: "/coronilla-jose/letanias", number: 5, title: "Letanías a San José" },
          { to: "/coronilla-jose/conclusion", number: 6, title: "Conclusión" },
        ]}
      />
    </PageShell>
  );
}
