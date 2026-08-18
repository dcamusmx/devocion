import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { AVES_MARIAS_FAMILIAS } from "@/data/familias";

export const Route = createFileRoute("/rosario-familias/aves-salve")({
  component: Page,
  head: () => ({ meta: [{ title: "Aves Marías y Salve — Rosario por las familias" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Aves Marías y Salve" subtitle="Rosario por las familias · 4 de 6" backTo="/rosario-familias">
      <div className="space-y-4">
        {AVES_MARIAS_FAMILIAS.map((t, i) => (
          <PrayerCard key={i} title={i < 3 ? `Ave María ${i + 1}` : "Salve"}>
            {t}
          </PrayerCard>
        ))}
        <ContinueLink to="/rosario-familias/letanias" label="Continuar a las Letanías" />
      </div>
    </PageShell>
  );
}
