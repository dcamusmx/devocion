import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Rezo } from "@/components/Rezo";
import { MISTERIOS, grupoDelDia } from "@/data/misterios";

export const Route = createFileRoute("/rosario-maria/rosario")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario — Rosario a María" }] }),
});

function Page() {
  const grupo = grupoDelDia();
  const misterios = MISTERIOS[grupo];
  return (
    <PageShell theme="maria" title={`Misterios ${grupo}`} subtitle="Rosario a María · 2 de 6" backTo="/rosario-maria">
      <Rezo
        variant="rosario-maria"
        items={misterios}
        itemLabel="Misterio"
        continueTo="/rosario-maria/ofrecimiento"
      />
    </PageShell>
  );
}
