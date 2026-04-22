import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Rezo } from "@/components/Rezo";
import { MISTERIOS, grupoDelDia } from "@/data/misterios";

export const Route = createFileRoute("/rosario-jose/rosario")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario — Rosario a San José" }] }),
});

function Page() {
  const grupo = grupoDelDia();
  return (
    <PageShell theme="jose" title={`Misterios ${grupo}`} subtitle="Rosario a San José · 2 de 6" backTo="/rosario-jose">
      <Rezo
        variant="rosario-jose"
        items={MISTERIOS[grupo]}
        itemLabel="Misterio"
        continueTo="/rosario-jose/ofrecimiento"
      />
    </PageShell>
  );
}
