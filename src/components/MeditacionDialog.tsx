import { useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Misterio } from "@/data/misterios";

interface Props {
  misterio: Misterio;
  itemLabel?: string;
}

export function MeditacionDialog({ misterio, itemLabel = "Misterio" }: Props) {
  const [open, setOpen] = useState(false);
  if (!misterio.meditacion && !misterio.cita && !misterio.oracion) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Ver meditación"
          className="inline-flex items-center justify-center size-8 rounded-full text-primary/70 hover:text-primary hover:bg-primary/10 transition shrink-0"
        >
          <Sparkles className="size-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-3">
          <DialogTitle className="text-primary leading-snug">
            {itemLabel} {misterio.numero} — {misterio.titulo}
          </DialogTitle>
          <DialogDescription>Meditación del misterio</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] px-6 pb-6">
          <div className="space-y-4 text-sm leading-relaxed">
            {misterio.meditacion && (
              <section>
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Contemplación
                </h4>
                <p>{misterio.meditacion}</p>
              </section>
            )}
            {misterio.cita && (
              <section className="rounded-xl border bg-primary/5 p-3">
                <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                  Cita bíblica
                </h4>
                <p className="italic">{misterio.cita}</p>
              </section>
            )}
            {misterio.oracion && (
              <section>
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Oración
                </h4>
                <p>{misterio.oracion}</p>
              </section>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
