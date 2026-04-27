import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Cross, Flame, Settings as SettingsIcon, Info, LogOut, Sparkles } from "lucide-react";
import { ProgresoPendiente } from "@/components/ProgresoPendiente";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Devocional — A Cristo con María y José" },
      {
        name: "description",
        content:
          "Reza con guía interactiva: Rosario a María, Rosario a San José y Coronilla a San José.",
      },
      { property: "og:title", content: "Devocional — A Cristo con María y José" },
      {
        property: "og:description",
        content: "Guía interactiva del Rosario y la Coronilla a San José.",
      },
    ],
  }),
});

const cards = [
  {
    to: "/rosario-maria",
    title: "Rosario a María",
    desc: "Misterios del día con guía interactiva",
    theme: "maria" as const,
    Icon: Heart,
  },
  {
    to: "/rosario-jose",
    title: "Rosario a San José",
    desc: "Oraciones, misterios y letanías",
    theme: "jose" as const,
    Icon: Cross,
  },
  {
    to: "/rosario-espiritu",
    title: "Rosario al Espíritu Santo",
    desc: "Siete misterios y siete dones",
    theme: "espiritu" as const,
    Icon: Sparkles,
  },
  {
    to: "/coronilla-jose",
    title: "Coronilla a San José",
    desc: "Las cinco virtudes de San José",
    theme: "coronilla" as const,
    Icon: Flame,
  },
];

const utilCards = [
  { to: "/ajustes", title: "Ajustes", desc: "Tema, fuente, sonido y vibración", Icon: SettingsIcon },
  { to: "/creditos", title: "Créditos", desc: "Acerca de esta aplicación", Icon: Info },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-xl">
        {/* Hero header */}
        <header className="bg-maria text-maria-foreground px-5 pt-10 pb-12 rounded-b-[2rem] shadow-lg">
          <p className="text-sm opacity-90 uppercase tracking-widest">Devocional</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            A Cristo con María y José
          </h1>
          <p className="mt-2 text-base opacity-95">Reza con guía interactiva.</p>
        </header>

        <main className="px-4 -mt-6 pb-10 space-y-6">
          <ProgresoPendiente />
          <section>
            <h2 className="sr-only">Devociones</h2>
            <ul className="space-y-3">
              {cards.map(({ to, title, desc, theme, Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`group flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 theme-${theme}`}
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-lg leading-tight">{title}</div>
                      <div className="text-sm text-muted-foreground">{desc}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="pt-2">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2 px-1">
              Aplicación
            </h2>
            <ul className="space-y-3">
              {utilCards.map(({ to, title, desc, Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold leading-tight">{title}</div>
                      <div className="text-sm text-muted-foreground">{desc}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-4 pb-2 flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (typeof window === "undefined") return;
                window.close();
                // Fallback if window.close() is blocked
                setTimeout(() => {
                  window.location.href = "about:blank";
                }, 100);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition px-3 py-1.5 rounded-full"
            >
              <LogOut className="size-3.5" />
              Salir
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
