import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink } from "@/components/Prayer";
import { LETANIAS_ESPIRITU } from "@/data/espiritu";

export const Route = createFileRoute("/rosario-espiritu/letanias")({
  component: Page,
  head: () => ({ meta: [{ title: "Letanías al Espíritu Santo" }] }),
});

function Page() {
  return (
    <PageShell
      theme="espiritu"
      title="Letanías al Espíritu Santo"
      subtitle="Rosario al Espíritu Santo · 4 de 5"
      backTo="/rosario-espiritu"
    >
      <div className="space-y-5">
        {LETANIAS_ESPIRITU.map((sec, i) => (
          <section key={i} className="rounded-2xl border bg-card p-5 shadow-sm">
            {sec.titulo && (
              <h3 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
                {sec.titulo}
              </h3>
            )}
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
        <ContinueLink to="/rosario-espiritu/consagracion" label="Continuar a la Consagración" />
      </div>
    </PageShell>
  );
}
