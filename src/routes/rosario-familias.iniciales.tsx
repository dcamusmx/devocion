import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { ACTO_CONTRICION, CREDO, SENAL_CRUZ } from "@/data/common";

export const Route = createFileRoute("/rosario-familias/iniciales")({
  component: Page,
  head: () => ({ meta: [{ title: "Oraciones Iniciales — Rosario por las familias" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Oraciones Iniciales" subtitle="Rosario por las familias · 1 de 6" backTo="/rosario-familias">
      <div className="space-y-4">
        <PrayerCard title="1. Señal de la Cruz">{SENAL_CRUZ}</PrayerCard>
        <PrayerCard title="2. Credo">{CREDO}</PrayerCard>
        <PrayerCard title="3. Acto de Contrición">{ACTO_CONTRICION}</PrayerCard>
        <ContinueLink to="/rosario-familias/rosario" label="Continuar al Rosario" />
      </div>
    </PageShell>
  );
}
