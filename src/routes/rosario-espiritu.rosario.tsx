import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { RezoEspiritu } from "@/components/RezoEspiritu";

export const Route = createFileRoute("/rosario-espiritu/rosario")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario — Espíritu Santo" }] }),
});

function Page() {
  return (
    <PageShell
      theme="espiritu"
      title="Siete Misterios"
      subtitle="Etapa: Rosario"
      backTo="/rosario-espiritu"
    >
      <RezoEspiritu continueTo="/rosario-espiritu/ofrecimiento" />
    </PageShell>
  );
}
