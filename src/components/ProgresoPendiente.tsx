import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  clearProgress,
  loadAllProgress,
  VARIANT_META,
  type RezoProgress,
} from "@/lib/progress";
import { PlayCircle, Trash2 } from "lucide-react";

export function ProgresoPendiente() {
  const [items, setItems] = useState<RezoProgress[]>([]);
  const [confirmClear, setConfirmClear] = useState<RezoProgress | null>(null);

  const refresh = () => setItems(loadAllProgress());

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener("devocional:progress", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("devocional:progress", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <>
      <section className="rounded-2xl border bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 p-4 space-y-3">
        <div>
          <h2 className="font-semibold text-amber-900 dark:text-amber-200">
            {items.length === 1 ? "Rezo sin terminar" : "Rezos sin terminar"}
          </h2>
          <p className="text-sm text-amber-800/80 dark:text-amber-200/80">
            Puedes retomar donde lo dejaste o eliminar el progreso.
          </p>
        </div>
        <ul className="space-y-2">
          {items.map((p) => {
            const meta = VARIANT_META[p.variant];
            const itemNum = p.itemIdx + 1;
            return (
              <li
                key={p.variant}
                className="rounded-xl bg-background border p-3 flex items-center gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{meta.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {meta.itemLabel} {itemNum}/{p.totalItems} · paso {p.step + 1}/12
                  </div>
                </div>
                <Button asChild size="sm" className="rounded-full">
                  <Link to={meta.route}>
                    <PlayCircle className="size-4" />
                    Retomar
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setConfirmClear(p)}
                  aria-label="Eliminar progreso"
                >
                  <Trash2 className="size-4" />
                </Button>
              </li>
            );
          })}
        </ul>
      </section>

      <AlertDialog
        open={!!confirmClear}
        onOpenChange={(o) => !o && setConfirmClear(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar progreso?</AlertDialogTitle>
            <AlertDialogDescription>
              Se reiniciará el progreso de{" "}
              <strong>
                {confirmClear ? VARIANT_META[confirmClear.variant].label : ""}
              </strong>
              . Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (confirmClear) clearProgress(confirmClear.variant);
                setConfirmClear(null);
                refresh();
              }}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
