import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { SENAL_CRUZ, ACTO_CONTRICION, CREDO, INVOCACIONES_INICIALES } from "@/data/common";

export const Route = createFileRoute("/rosario-maria/iniciales")({
  component: Page,
  head: () => ({ meta: [{ title: "Oraciones Iniciales — Rosario a Santa María" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Oraciones Iniciales" subtitle="Etapa: Oraciones iniciales" backTo="/rosario-maria">
      <div className="space-y-4">
        <PrayerCard title="Señal de la Cruz">{SENAL_CRUZ}</PrayerCard>
        <PrayerCard title="Acto de Contrición">{ACTO_CONTRICION}</PrayerCard>
        <PrayerCard title="Credo">{CREDO}</PrayerCard>
        <PrayerCard title="Invocaciones Iniciales">{INVOCACIONES_INICIALES}</PrayerCard>
        <ContinueLink to="/rosario-maria/rosario" label="Continuar al Rosario" />
      </div>
    </PageShell>
  );
}
