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
import { MISTERIOS, type GrupoMisterio } from "@/data/misterios";

const GRUPOS_INFO: { grupo: GrupoMisterio; dias: string }[] = [
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
        <button className="inline-flex items-center gap-1.5 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur px-3 py-1.5 text-sm font-medium transition">
          <BookOpen className="size-4" />
          Misterios
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-3">
          <DialogTitle>Misterios del Rosario</DialogTitle>
          <DialogDescription>
            Lista completa de los misterios de cada día.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] px-6 pb-6">
          <div className="space-y-5">
            {GRUPOS_INFO.map(({ grupo, dias }) => (
              <section key={grupo}>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-primary">
                    Misterios {grupo}
                  </h3>
                  <span className="text-xs text-muted-foreground">{dias}</span>
                </div>
                <ol className="space-y-2">
                  {MISTERIOS[grupo].map((m) => (
                    <li
                      key={m.numero}
                      className="rounded-xl border bg-card p-3 text-sm"
                    >
                      <div className="font-medium">
                        {m.numero}. {m.titulo}
                      </div>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">
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
