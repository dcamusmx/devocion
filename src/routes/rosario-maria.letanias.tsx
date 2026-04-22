import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink } from "@/components/Prayer";
import { LETANIAS_LAURETANAS } from "@/data/letanias";

export const Route = createFileRoute("/rosario-maria/letanias")({
  component: Page,
  head: () => ({ meta: [{ title: "Letanías Lauretanas" }] }),
});

function Page() {
  return (
    <PageShell theme="maria" title="Letanías Lauretanas" subtitle="Rosario a María · 5 de 6" backTo="/rosario-maria">
      <div className="space-y-5">
        {LETANIAS_LAURETANAS.map((sec, i) => (
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
        <ContinueLink to="/rosario-maria/conclusion" label="Continuar a la Conclusión" />
      </div>
    </PageShell>
  );
}
