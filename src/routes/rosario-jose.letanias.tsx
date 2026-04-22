import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { LETANIAS_SAN_JOSE, ORACION_FINAL_SAN_JOSE } from "@/data/letanias";

export const Route = createFileRoute("/rosario-jose/letanias")({
  component: Page,
  head: () => ({ meta: [{ title: "Letanías — Rosario a San José" }] }),
});

function Page() {
  return (
    <PageShell theme="jose" title="Letanías a San José" subtitle="Rosario a San José · 5 de 6" backTo="/rosario-jose">
      <div className="space-y-5">
        {LETANIAS_SAN_JOSE.map((sec, i) => (
          <section key={i} className="rounded-2xl border bg-card p-5 shadow-sm">
            {sec.titulo && <h3 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">{sec.titulo}</h3>}
            <ul className="space-y-2">
              {sec.items.map((it, j) => (
                <li key={j} className="leading-relaxed">
                  <span className="font-medium">{it.v}</span>
                  <span className="text-muted-foreground"> — {it.r}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <PrayerCard title="Oración">{ORACION_FINAL_SAN_JOSE}</PrayerCard>
        <ContinueLink to="/rosario-jose/conclusion" label="Continuar a la Conclusión" />
      </div>
    </PageShell>
  );
}
