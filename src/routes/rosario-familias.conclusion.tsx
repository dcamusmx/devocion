import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PrayerCard } from "@/components/Prayer";
import { Button } from "@/components/ui/button";
import { CONCLUSION_FAMILIAS } from "@/data/familias";
import { Home } from "lucide-react";

export const Route = createFileRoute("/rosario-familias/conclusion")({
  component: Page,
  head: () => ({ meta: [{ title: "Conclusión — Rosario por las familias" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Conclusión" subtitle="Etapa: Conclusión" backTo="/rosario-familias">
      <div className="space-y-4">
        <PrayerCard>{CONCLUSION_FAMILIAS}</PrayerCard>
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
