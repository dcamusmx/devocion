import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContinueLink({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <div className="mt-8 flex justify-end">
      <Button asChild size="lg" className="rounded-full">
        <Link to={to}>
          {label}
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

export function PrayerCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-sm space-y-2">
      {title && <h2 className="text-lg font-semibold text-primary">{title}</h2>}
      <div className="text-foreground leading-relaxed whitespace-pre-line">{children}</div>
    </section>
  );
}
