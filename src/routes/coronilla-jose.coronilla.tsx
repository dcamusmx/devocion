import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Rezo } from "@/components/Rezo";
import { VIRTUDES_SAN_JOSE } from "@/data/virtudes";
import { AVE_JOSE } from "@/data/common";

export const Route = createFileRoute("/coronilla-jose/coronilla")({
  component: Page,
  head: () => ({ meta: [{ title: "Coronilla — San José" }] }),
});

function Page() {
  return (
    <PageShell theme="coronilla" title="Coronilla" subtitle="Coronilla a San José · 2 de 6" backTo="/coronilla-jose">
      <Rezo
        variant="coronilla-jose"
        items={VIRTUDES_SAN_JOSE}
        itemLabel="Virtud"
        continueTo="/coronilla-jose/ofrecimiento"
      />
    </PageShell>
  );
}
