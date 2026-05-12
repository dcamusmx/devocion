import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useSettings, type FontSize, type Theme } from "@/lib/settings";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ajustes")({
  component: Page,
  head: () => ({ meta: [{ title: "Ajustes — Devocional" }] }),
});

function Page() {
  const { settings, update, reset } = useSettings();
  return (
    <PageShell title="Ajustes" subtitle="Personaliza tu experiencia" backTo="/" backLabel="Inicio">
      <div className="space-y-4">
        <Card title="Tema">
          <SegmentedGroup
            value={settings.theme}
            options={[
              { value: "light", label: "Claro" },
              { value: "dark", label: "Oscuro" },
            ]}
            onChange={(v) => update("theme", v as Theme)}
          />
        </Card>

        <Card title="Tamaño de fuente">
          <SegmentedGroup
            value={settings.fontSize}
            options={[
              { value: "s", label: "Pequeña" },
              { value: "m", label: "Media" },
              { value: "l", label: "Grande" },
              { value: "xl", label: "Extragrande" },
            ]}
            onChange={(v) => update("fontSize", v as FontSize)}
          />
        </Card>

        <Card title="Sonido al avanzar cuenta">
          <Row label="Reproducir un beep suave">
            <Switch
              checked={settings.sound}
              onCheckedChange={(c) => update("sound", c)}
            />
          </Row>
        </Card>

        <Card title="Vibración háptica">
          <Row label="Vibrar al marcar cada cuenta">
            <Switch
              checked={settings.vibration}
              onCheckedChange={(c) => update("vibration", c)}
            />
          </Row>
        </Card>

        <div className="pt-2">
          <Button variant="outline" onClick={reset} className="w-full">
            Restablecer ajustes
          </Button>
        </div>
      </div>
    </PageShell>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-foreground">{label}</span>
      {children}
    </div>
  );
}

function SegmentedGroup<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div
      className="grid gap-2 p-1 rounded-xl bg-muted"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-lg py-2 text-sm font-medium transition",
            value === opt.value
              ? "bg-background shadow text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
