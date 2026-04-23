import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ThemeName = "maria" | "jose" | "coronilla" | "neutral";

const themeClass: Record<ThemeName, string> = {
  maria: "theme-maria",
  jose: "theme-jose",
  coronilla: "theme-coronilla",
  neutral: "",
};

const headerBg: Record<ThemeName, string> = {
  maria: "bg-maria text-maria-foreground",
  jose: "bg-jose text-jose-foreground",
  coronilla: "bg-coronilla text-coronilla-foreground",
  neutral: "bg-primary text-primary-foreground",
};

interface PageShellProps {
  theme?: ThemeName;
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
  /** Sticky slot rendered right under the header (used by Rezo counter) */
  sticky?: ReactNode;
  /** Extra action rendered under the Inicio button (e.g. Misterios) */
  headerExtra?: ReactNode;
}

export function PageShell({
  theme = "neutral",
  title,
  subtitle,
  backTo,
  backLabel = "Regresar",
  children,
  sticky,
  headerExtra,
}: PageShellProps) {
  return (
    <div className={cn("min-h-screen bg-background flex justify-center", themeClass[theme])}>
      <div className="w-full max-w-xl flex flex-col">
        <header className={cn("sticky top-0 z-30 px-4 pt-4 pb-5 shadow-md", headerBg[theme])}>
          <div className="flex items-start justify-between gap-2 mb-3">
            {backTo ? (
              <Link
                to={backTo}
                className="inline-flex items-center gap-1.5 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur px-3 py-1.5 text-sm font-medium transition"
              >
                <ArrowLeft className="size-4" />
                {backLabel}
              </Link>
            ) : (
              <span />
            )}
            <div className="flex flex-col items-end gap-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur px-3 py-1.5 text-sm font-medium transition"
              >
                <Home className="size-4" />
                Inicio
              </Link>
              {headerExtra}
            </div>
          </div>
          <h1 className="text-2xl font-semibold leading-tight">{title}</h1>
          {subtitle && <p className="text-sm opacity-90 mt-1">{subtitle}</p>}
        </header>
        {sticky && (
          <div className="sticky top-[var(--header-h,0px)] z-20 bg-background/95 backdrop-blur border-b">
            {sticky}
          </div>
        )}
        <main className="flex-1 px-4 py-6 pb-24">{children}</main>
      </div>
    </div>
  );
}
