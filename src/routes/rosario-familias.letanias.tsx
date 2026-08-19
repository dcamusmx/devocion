import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import { LETANIAS_FAMILIAS } from "@/data/familias";

export const Route = createFileRoute("/rosario-familias/letanias")({
  component: Page,
  head: () => ({ meta: [{ title: "Letanías — Rosario por las familias" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Letanías" subtitle="Etapa: Letanías" backTo="/rosario-familias">
      <div className="space-y-5">
        {LETANIAS_FAMILIAS.map((sec, i) => (
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
        <ContinueLink to="/rosario-familias/conclusion" label="Continuar a la Conclusión" />
      </div>
    </PageShell>
  );
}
