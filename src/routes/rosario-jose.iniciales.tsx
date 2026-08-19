import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import {
  INVOCACION_ESPIRITU_SANTO,
  ORACION_SAN_JOSE,
  SENAL_CRUZ,
  ACTO_CONTRICION,
  INVOCACIONES_INICIALES,
} from "@/data/common";

export const Route = createFileRoute("/rosario-jose/iniciales")({
  component: Page,
  head: () => ({ meta: [{ title: "Oraciones Iniciales — Rosario a San José" }] }),
});

function Page() {
  return (
    <PageShell theme="jose" title="Oraciones Iniciales" subtitle="Etapa: Oraciones iniciales" backTo="/rosario-jose">
      <div className="space-y-4">
        <PrayerCard title="1. Invocación al Espíritu Santo">{INVOCACION_ESPIRITU_SANTO}</PrayerCard>
        <PrayerCard title="2. Oración a San José">{ORACION_SAN_JOSE}</PrayerCard>
        <PrayerCard title="3. Señal de la Cruz">{SENAL_CRUZ}</PrayerCard>
        <PrayerCard title="4. Acto de Contrición">{ACTO_CONTRICION}</PrayerCard>
        <PrayerCard title="Invocaciones">{INVOCACIONES_INICIALES}</PrayerCard>
        <ContinueLink to="/rosario-jose/rosario" label="Continuar al Rosario" />
      </div>
    </PageShell>
  );
}
