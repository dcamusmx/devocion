import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Rezo } from "@/components/Rezo";
import { MisteriosDialog } from "@/components/MisteriosDialog";
import { MISTERIOS_FAMILIAS } from "@/data/familias";

export const Route = createFileRoute("/rosario-familias/rosario")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario — Rosario por las familias" }] }),
});

function Page() {
  return (
    <PageShell
      theme="maria"
      title="Misterios del día"
      subtitle="Rosario por las familias · 2 de 6"
      backTo="/rosario-familias"
      headerExtra={<MisteriosDialog />}
    >
      <Rezo
        variant="rosario-familias"
        items={MISTERIOS_FAMILIAS}
        itemLabel="Misterio"
        continueTo="/rosario-familias/ofrecimiento"
      />
    </PageShell>
  );
}
