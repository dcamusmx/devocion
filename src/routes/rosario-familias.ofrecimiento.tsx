import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { OFRECIMIENTO_FAMILIAS } from "@/data/familias";

export const Route = createFileRoute("/rosario-familias/ofrecimiento")({
  component: Page,
  head: () => ({ meta: [{ title: "Ofrecimiento — Rosario por las familias" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Ofrecimiento" subtitle="Rosario por las familias · 3 de 6" backTo="/rosario-familias">
      <div className="space-y-4">
        <PrayerCard>{OFRECIMIENTO_FAMILIAS}</PrayerCard>
        <ContinueLink to="/rosario-familias/aves-salve" label="Continuar a Aves Marías y Salve" />
      </div>
    </PageShell>
  );
}
