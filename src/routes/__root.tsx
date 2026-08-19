import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SettingsProvider } from "@/lib/settings";
import { PwaRegister } from "@/components/PwaRegister";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#3b5dc9" },
      { title: "Devocional — Guía de Rosarios y Coronilla" },
      {
        name: "description",
        content:
          "App devocional con guía interactiva del Rosario a Santa María, Rosario a San José y Coronilla a San José.",
      },
      { property: "og:title", content: "Devocional — Guía de Rosarios y Coronilla" },
      { name: "twitter:title", content: "Devocional — Guía de Rosarios y Coronilla" },
      { name: "description", content: "Devotional Guide offers guided prayers and devotions, including the Rosary and Chaplet." },
      { property: "og:description", content: "Devotional Guide offers guided prayers and devotions, including the Rosary and Chaplet." },
      { name: "twitter:description", content: "Devotional Guide offers guided prayers and devotions, including the Rosary and Chaplet." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/jpjFzyDsWQWTjATRLrVOTrePeyS2/social-images/social-1776901544348-devocional.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/jpjFzyDsWQWTjATRLrVOTrePeyS2/social-images/social-1776901544348-devocional.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SettingsProvider>
      <PwaRegister />
      <Outlet />
    </SettingsProvider>
  );
}
