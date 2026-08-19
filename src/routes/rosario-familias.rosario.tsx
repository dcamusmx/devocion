import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Rezo } from "@/components/Rezo";
import { MisteriosDialog } from "@/components/MisteriosDialog";
import { getGrupoFamiliaDelDia, getMisteriosFamiliasDelDia } from "@/data/familias";

export const Route = createFileRoute("/rosario-familias/rosario")({
  component: Page,
  head: () => ({ meta: [{ title: "Rosario — Rosario por las familias" }] }),
});

function Page() {
  const grupo = getGrupoFamiliaDelDia();
  const items = getMisteriosFamiliasDelDia();

  return (
    <PageShell
      theme="maria"
      title={`Misterios ${grupo}`}
      subtitle="Etapa: Rosario"
      backTo="/rosario-familias"
      headerExtra={<MisteriosDialog />}
    >
      <Rezo
        variant="rosario-familias"
        items={items}
        itemLabel="Misterio"
        continueTo="/rosario-familias/ofrecimiento"
      />
    </PageShell>
  );
}
