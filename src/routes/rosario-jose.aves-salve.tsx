import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { AVES_MARIAS_SALVE } from "@/data/common";

export const Route = createFileRoute("/rosario-jose/aves-salve")({
  component: Page,
  head: () => ({ meta: [{ title: "Aves Marías y Salve — Rosario a San José" }] }),
});

function Page() {
  return (
    <PageShell theme="jose" title="Aves Marías y Salve" subtitle="Rosario a San José · 4 de 6" backTo="/rosario-jose">
      <div className="space-y-4">
        {AVES_MARIAS_SALVE.map((t, i) => (
          <PrayerCard key={i} title={i < 3 ? `Avemaría ${i + 1}` : "Salve"}>
            {t}
          </PrayerCard>
        ))}
        <ContinueLink to="/rosario-jose/letanias" label="Continuar a las Letanías" />
      </div>
    </PageShell>
  );
}
