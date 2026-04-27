import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionItem {
  to: string;
  number?: number;
  title: string;
  description?: string;
  icon?: ReactNode;
}

export function SectionList({ items, theme }: { items: SectionItem[]; theme: "maria" | "jose" | "coronilla" | "espiritu" }) {
  const ring = {
    maria: "bg-maria text-maria-foreground",
    jose: "bg-jose text-jose-foreground",
    coronilla: "bg-coronilla text-coronilla-foreground",
    espiritu: "bg-espiritu text-espiritu-foreground",
  }[theme];

  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.to}>
          <Link
            to={it.to}
            className={cn(
              "group flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm transition",
              "hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-full font-semibold text-lg", ring)}>
              {it.number ?? it.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold leading-snug">{it.title}</div>
              {it.description && (
                <div className="text-sm text-muted-foreground line-clamp-2">{it.description}</div>
              )}
            </div>
            <ChevronRight className="size-5 text-muted-foreground group-hover:translate-x-0.5 transition" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
