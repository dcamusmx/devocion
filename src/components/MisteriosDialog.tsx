import { useState } from "react";
import { BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MISTERIOS_FAMILIAS, type GrupoMisterioFamilia } from "@/data/familias";

const GRUPOS_INFO: { grupo: GrupoMisterioFamilia; dias: string }[] = [
  { grupo: "Gozosos", dias: "Lunes y Sábado" },
  { grupo: "Dolorosos", dias: "Martes y Viernes" },
  { grupo: "Gloriosos", dias: "Miércoles y Domingo" },
  { grupo: "Luminosos", dias: "Jueves" },
];

export function MisteriosDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-foreground shadow-sm transition hover:bg-accent/80 active:scale-[0.98] sm:text-sm">
          <BookOpen className="size-4" />
          Misterios
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] w-[calc(100%-1rem)] max-w-lg overflow-hidden rounded-2xl p-0 sm:w-full">
        <DialogHeader className="px-4 pb-3 pt-5 sm:px-6 sm:pt-6">
          <DialogTitle className="text-left">Misterios por la familia</DialogTitle>
          <DialogDescription className="text-left text-sm">
            Lista completa de los misterios y reflexiones de cada día.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] px-4 pb-5 sm:px-6 sm:pb-6">
          <div className="space-y-5">
            {GRUPOS_INFO.map(({ grupo, dias }) => (
              <section key={grupo}>
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-primary">
                    Misterios {grupo}
                  </h3>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    {dias}
                  </span>
                </div>
                <ol className="space-y-2">
                  {MISTERIOS_FAMILIAS[grupo].map((m) => (
                    <li
                      key={m.numero}
                      className="rounded-xl border bg-card p-3 text-sm"
                    >
                      <div className="font-medium">
                        {m.numero}. {m.titulo}
                      </div>
                      <p className="mt-0.5 leading-relaxed text-muted-foreground">
                        {m.descripcion}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
