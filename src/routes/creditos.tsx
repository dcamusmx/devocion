import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/creditos")({
  component: Page,
  head: () => ({ meta: [{ title: "Créditos — Devocional" }] }),
});

function Page() {
  return (
    <PageShell title="Créditos" subtitle="Acerca de esta aplicación" backTo="/" backLabel="Inicio">
      <div className="space-y-5">
        <section className="rounded-2xl border bg-card p-6 shadow-sm text-center">
          <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart className="size-7" />
          </div>
          <h2 className="text-xl font-semibold">Devocional</h2>
          <p className="text-muted-foreground mt-1">A Cristo con María y José.</p>
        </section>

        <section className="rounded-2xl border bg-card p-5 shadow-sm space-y-3">
          <p className="leading-relaxed">
            Una aplicación devocional para acompañar el rezo del Santo Rosario y la
            Coronilla a San José, con guía interactiva, contador de cuentas y los
            textos litúrgicos completos.
          </p>
          <div className="border-t pt-3">
            <p className="text-sm text-muted-foreground">Desarrollado por</p>
            <p className="font-semibold">David Camus Espinosa</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Pastoral</p>
            <p className="font-medium">Dimensión Vida Cristo Glorioso de Chiapas</p>
            <p className="text-sm text-muted-foreground">Arquidiócesis de Tuxtla Gutiérrez</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Contacto</p>
            <a
              href="mailto:dimvidacristo@gmail.com"
              className="text-primary underline underline-offset-4"
            >
              dimvidacristo@gmail.com
            </a>
          </div>
        </section>

        <p className="text-center text-xs text-muted-foreground">
          Hecho con devoción ✦
        </p>
      </div>
    </PageShell>
  );
}
