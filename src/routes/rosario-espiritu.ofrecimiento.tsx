import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { OFRECIMIENTO_ESPIRITU } from "@/data/espiritu";

export const Route = createFileRoute("/rosario-espiritu/ofrecimiento")({
  component: Page,
  head: () => ({ meta: [{ title: "Ofrecimiento — Espíritu Santo" }] }),
});

function Page() {
  return (
    <PageShell
      theme="espiritu"
      title="Ofrecimiento"
      subtitle="Etapa: Ofrecimiento"
      backTo="/rosario-espiritu"
    >
      <div className="space-y-4">
        {OFRECIMIENTO_ESPIRITU.map((t, i) => (
          <PrayerCard key={i}>{t}</PrayerCard>
        ))}
        <ContinueLink to="/rosario-espiritu/letanias" label="Continuar a las Letanías" />
      </div>
    </PageShell>
  );
}
