import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PrayerCard } from "@/components/Prayer";
import { Button } from "@/components/ui/button";

import { CONCLUSION_MARIA } from "@/data/conclusiones";
import { CIERRE_AVE_MARIA_PURISIMA } from "@/data/common";
import { Home } from "lucide-react";

export const Route = createFileRoute("/rosario-maria/conclusion")({
  component: Page,
  head: () => ({ meta: [{ title: "Conclusión — Rosario a María" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Conclusión" subtitle="Rosario a María · 6 de 6" backTo="/rosario-maria">
      <div className="space-y-4">
        {CONCLUSION_MARIA.map((t, i) => (
          <PrayerCard key={i}>{t}</PrayerCard>
        ))}
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

