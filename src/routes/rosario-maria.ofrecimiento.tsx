import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { PADRE_NUESTRO } from "@/data/common";

export const Route = createFileRoute("/rosario-maria/ofrecimiento")({
  component: Page,
  head: () => ({ meta: [{ title: "Ofrecimiento — Rosario a Santa María" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Ofrecimiento" subtitle="Rosario a Santa María · 3 de 6" backTo="/rosario-maria">
      <div className="space-y-4">
        <PrayerCard>
          <em>Ofrece tus intenciones personales o de grupo.</em>
        </PrayerCard>
        <PrayerCard title="Padre Nuestro">{PADRE_NUESTRO}</PrayerCard>
        <ContinueLink to="/rosario-maria/aves-salve" label="Continuar a Aves Marías y Salve" />
      </div>
    </PageShell>
  );
}
