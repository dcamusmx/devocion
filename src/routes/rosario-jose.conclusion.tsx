import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PrayerCard } from "@/components/Prayer";
import { Button } from "@/components/ui/button";
import { CONCLUSION_JOSE } from "@/data/conclusiones";
import { CIERRE_AVE_MARIA_PURISIMA } from "@/data/common";
import { Home } from "lucide-react";

export const Route = createFileRoute("/rosario-jose/conclusion")({
  component: Page,
  head: () => ({ meta: [{ title: "Conclusión — Rosario a San José" }] }),
});

function Page() {
  return (
    <PageShell theme="jose" title="Conclusión" subtitle="Rosario a San José · 6 de 6" backTo="/rosario-jose">
      <div className="space-y-4">
        <PrayerCard title="A San José">{CONCLUSION_JOSE}</PrayerCard>
        <PrayerCard title="Despedida">{CIERRE_AVE_MARIA_PURISIMA}</PrayerCard>
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
