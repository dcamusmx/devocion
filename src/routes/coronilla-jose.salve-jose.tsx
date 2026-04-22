import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { SALVE_JOSE } from "@/data/conclusiones";
import { PADRE_NUESTRO } from "@/data/common";

export const Route = createFileRoute("/coronilla-jose/salve-jose")({
  component: Page,
  head: () => ({ meta: [{ title: "Salve José" }] }),
});

function Page() {
  return (
    <PageShell theme="coronilla" title="Salve José" subtitle="Coronilla a San José · 4 de 6" backTo="/coronilla-jose">
      <div className="space-y-4">
        <PrayerCard title="Salve a San José">{SALVE_JOSE}</PrayerCard>
        <PrayerCard title="Padre Nuestro">{PADRE_NUESTRO}</PrayerCard>
        <ContinueLink to="/coronilla-jose/letanias" label="Continuar a las Letanías" />
      </div>
    </PageShell>
  );
}
