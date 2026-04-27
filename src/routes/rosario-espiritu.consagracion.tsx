import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PrayerCard } from "@/components/Prayer";
import { Button } from "@/components/ui/button";
import { CONSAGRACION_ESPIRITU } from "@/data/espiritu";
import { Home } from "lucide-react";

export const Route = createFileRoute("/rosario-espiritu/consagracion")({
  component: Page,
  head: () => ({ meta: [{ title: "Consagración — Espíritu Santo" }] }),
});

function Page() {
  return (
    <PageShell
      theme="espiritu"
      title="Consagración"
      subtitle="Rosario al Espíritu Santo · 5 de 5"
      backTo="/rosario-espiritu"
    >
      <div className="space-y-4">
        {CONSAGRACION_ESPIRITU.map((t, i) => (
          <PrayerCard key={i}>{t}</PrayerCard>
        ))}
        <div className="flex justify-center pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">
              <Home className="size-4" />
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
