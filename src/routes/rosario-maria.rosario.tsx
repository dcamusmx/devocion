import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Rezo } from "@/components/Rezo";
import { MisteriosDialog } from "@/components/MisteriosDialog";
import { MISTERIOS, grupoDelDia } from "@/data/misterios";

export const Route = createFileRoute("/rosario-maria/rosario")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario — Rosario a Santa María" }] }),
});

function Page() {
  const grupo = grupoDelDia();
  const misterios = MISTERIOS[grupo];
  return (
    <PageShell
      theme="maria"
      title={`Misterios ${grupo}`}
      subtitle="Rosario a Santa María · 2 de 6"
      backTo="/rosario-maria"
      headerExtra={<MisteriosDialog />}
    >
      <Rezo
        variant="rosario-maria"
        items={misterios}
        itemLabel="Misterio"
        continueTo="/rosario-maria/ofrecimiento"
      />
    </PageShell>
  );
}
