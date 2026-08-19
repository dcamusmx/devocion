import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { SENAL_CRUZ, CREDO, GLORIA } from "@/data/common";
import {
  PADRE_NUESTRO_BREVE,
  JACULATORIA_ESPIRITU,
  INVOCACIONES_INICIALES_ESPIRITU,
} from "@/data/espiritu";

export const Route = createFileRoute("/rosario-espiritu/iniciales")({
  component: Page,
  head: () => ({ meta: [{ title: "Oraciones Iniciales — Espíritu Santo" }] }),
});

function Page() {
  return (
    <PageShell
      theme="espiritu"
      title="Oraciones Iniciales"
      subtitle="Etapa: Oraciones iniciales"
      backTo="/rosario-espiritu"
    >
      <div className="space-y-4">
        <PrayerCard title="Señal de la Cruz">{SENAL_CRUZ}</PrayerCard>
        <PrayerCard title="Credo">{CREDO}</PrayerCard>
        <PrayerCard title="Padre Nuestro">{PADRE_NUESTRO_BREVE}</PrayerCard>
        <PrayerCard title="Gloria">{GLORIA}</PrayerCard>
        <PrayerCard title="Jaculatoria">{JACULATORIA_ESPIRITU}</PrayerCard>
        <section className="rounded-2xl border bg-card p-5 shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-primary">Invocaciones Iniciales</h2>
          <ul className="space-y-2 text-foreground leading-relaxed list-disc pl-5">
            {INVOCACIONES_INICIALES_ESPIRITU.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>
        <ContinueLink to="/rosario-espiritu/rosario" label="Continuar al Rosario" />
      </div>
    </PageShell>
  );
}
