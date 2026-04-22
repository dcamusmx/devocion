import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { PADRE_NUESTRO } from "@/data/common";

export const Route = createFileRoute("/rosario-jose/ofrecimiento")({
  component: Page,
  head: () => ({ meta: [{ title: "Ofrecimiento — Rosario a San José" }] }),
});

function Page() {
  return (
    <PageShell theme="jose" title="Ofrecimiento" subtitle="Rosario a San José · 3 de 6" backTo="/rosario-jose">
      <div className="space-y-4">
        <PrayerCard><em>Ofrece tus intenciones personales o de grupo.</em></PrayerCard>
        <PrayerCard title="Padre Nuestro">{PADRE_NUESTRO}</PrayerCard>
        <ContinueLink to="/rosario-jose/aves-salve" label="Continuar a Aves Marías y Salve" />
      </div>
    </PageShell>
  );
}
