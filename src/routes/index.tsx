import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Cross, Flame, Settings as SettingsIcon, Info, LogOut, Sparkles } from "lucide-react";
import { ProgresoPendiente } from "@/components/ProgresoPendiente";
import { useSettings, type IconSet } from "@/lib/settings";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Devocional — A Cristo con María y José" },
      {
        name: "description",
        content:
          "Reza con guía interactiva: Rosario a Santa María, Rosario a San José y Coronilla a San José.",
      },
      { property: "og:title", content: "Devocional — A Cristo con María y José" },
      {
        property: "og:description",
        content: "Guía interactiva del Rosario y la Coronilla a San José.",
      },
    ],
  }),
});

const utilCards = [
  { to: "/ajustes", title: "Ajustes", desc: "Tema, fuente, sonido y vibración", Icon: SettingsIcon },
  { to: "/creditos", title: "Créditos", desc: "Acerca de esta aplicación", Icon: Info },
];

function HomePage() {
  const { settings } = useSettings();
  const cards = [
    {
      to: "/rosario-maria",
      title: "Rosario a Santa María",
      desc: "Misterios del día con guía interactiva",
      theme: "maria" as const,
      kind: "maria" as const,
    },
    {
      to: "/rosario-jose",
      title: "Rosario a San José",
      desc: "Oraciones, misterios y letanías",
      theme: "jose" as const,
      kind: "jose" as const,
    },
    {
      to: "/rosario-familias",
      title: "Rosario por las familias",
      desc: "Misterios centrados en la Sagrada Familia",
      theme: "maria" as const,
      kind: "familias" as const,
    },
    {
      to: "/rosario-espiritu",
      title: "Rosario al Espíritu Santo",
      desc: "Siete misterios y siete dones",
      theme: "espiritu" as const,
      kind: "espiritu" as const,
    },
    {
      to: "/coronilla-jose",
      title: "Coronilla a San José",
      desc: "Las cinco virtudes de San José",
      theme: "coronilla" as const,
      kind: "coronilla" as const,
    },
  ];

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
              {cards.map(({ to, title, desc, theme, kind }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`group flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 theme-${theme}`}
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground overflow-hidden">
                      <RosaryIcon variant={settings.iconSet} kind={kind} />
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

function RosaryIcon({ variant, kind }: { variant: IconSet; kind: "maria" | "jose" | "familias" | "espiritu" | "coronilla" }) {
  const assetName = `${kind}-${variant}.png`;
  const assetPath = `/icons/${assetName}`;
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={assetPath}
        alt=""
        className="h-11 w-11 object-cover rounded-2xl"
        onError={() => setFailed(true)}
      />
    );
  }

  const palette = {
    maria: { bg: "#1f4f7c", fg: "#f4e8d7", accent: "#caa761" },
    jose: { bg: "#7c5d95", fg: "#f5e9d7", accent: "#d8b46a" },
    familias: { bg: "#5b7d6b", fg: "#f5eee5", accent: "#d7b874" },
    espiritu: { bg: "#e7b39b", fg: "#f8f2ea", accent: "#d8895d" },
    coronilla: { bg: "#d9b36c", fg: "#f6efe6", accent: "#9e6930" },
  }[kind];

  const common = { stroke: palette.fg, fill: palette.fg, accent: palette.accent, bg: palette.bg };

  if (kind === "maria") {
    return (
      <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden="true">
        <circle cx="40" cy="40" r="34" fill={common.bg} />
        <path d="M40 18C32 19 25 28 25 36C25 46 32 54 40 58C48 54 55 46 55 36C55 28 48 19 40 18Z" fill={common.stroke} opacity="0.95" />
        <path d="M40 25L34 42H46L40 25Z" fill={common.accent} />
        <path d="M29 42C35 45 39 49 40 54C41 49 45 45 51 42" fill="none" stroke={common.accent} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === "jose") {
    return (
      <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden="true">
        <circle cx="40" cy="40" r="34" fill={common.bg} />
        <path d="M22 18V56M22 18H58M22 56H58" fill="none" stroke={common.stroke} strokeWidth="3" strokeLinecap="round" />
        <path d="M30 28H50L54 48H26L30 28Z" fill={common.accent} opacity="0.8" />
      </svg>
    );
  }

  if (kind === "familias") {
    return (
      <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden="true">
        <circle cx="40" cy="40" r="34" fill={common.bg} />
        <circle cx="28" cy="32" r="7" fill={common.stroke} />
        <circle cx="52" cy="32" r="7" fill={common.stroke} />
        <path d="M22 56C24 50 28 46 34 46H46C52 46 56 50 58 56" fill="none" stroke={common.stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M40 18L46 23L40 29L34 23Z" fill={common.accent} />
      </svg>
    );
  }

  if (kind === "espiritu") {
    return (
      <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden="true">
        <circle cx="40" cy="40" r="34" fill={common.bg} />
        <path d="M40 18C27 18 22 25 22 36C22 48 31 58 40 60C49 58 58 48 58 36C58 25 53 18 40 18Z" fill={common.stroke} />
        <path d="M24 41H56" fill="none" stroke={common.accent} strokeWidth="3" strokeLinecap="round" />
        <path d="M40 18V60" fill="none" stroke={common.accent} strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 80" className="h-11 w-11" aria-hidden="true">
      <circle cx="40" cy="40" r="34" fill={common.bg} />
      <path d="M40 18V62M20 40H60" fill="none" stroke={common.stroke} strokeWidth="4" strokeLinecap="round" />
      <path d="M18 20L30 32L18 44L30 56L42 44L54 56L62 48L50 36L62 24L54 16L42 28L30 16L18 20Z" fill={common.accent} opacity="0.75" />
    </svg>
  );
}
