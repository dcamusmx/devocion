import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { PADRE_NUESTRO } from "@/data/common";

export const Route = createFileRoute("/coronilla-jose/ofrecimiento")({
  component: Page,
  head: () => ({ meta: [{ title: "Ofrecimiento — Coronilla" }] }),
});

function Page() {
  return (
    <PageShell theme="coronilla" title="Ofrecimiento" subtitle="Coronilla a San José · 3 de 6" backTo="/coronilla-jose">
      <div className="space-y-4">
        <PrayerCard><em>Ofrece tus intenciones personales o de grupo.</em></PrayerCard>
        <PrayerCard title="Padre Nuestro">{PADRE_NUESTRO}</PrayerCard>
        <ContinueLink to="/coronilla-jose/salve-jose" label="Continuar a Salve José" />
      </div>
    </PageShell>
  );
}
