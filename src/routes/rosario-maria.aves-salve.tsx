import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { AVES_MARIAS_SALVE } from "@/data/common";

export const Route = createFileRoute("/rosario-maria/aves-salve")({
  component: Page,
  head: () => ({ meta: [{ title: "Aves Marías y Salve" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Aves Marías y Salve" subtitle="Rosario a María · 4 de 6" backTo="/rosario-maria">
      <div className="space-y-4">
        {AVES_MARIAS_SALVE.map((t, i) => (
          <PrayerCard key={i} title={i < 3 ? `Avemaría ${i + 1}` : "Salve"}>
            {t}
          </PrayerCard>
        ))}
        <ContinueLink to="/rosario-maria/letanias" label="Continuar a las Letanías" />
      </div>
    </PageShell>
  );
}
