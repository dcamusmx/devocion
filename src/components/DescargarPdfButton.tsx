import { Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generarRosarioPDF } from "@/lib/rosarioPdf";
import { grupoDelDia, type GrupoMisterio } from "@/data/misterios";

interface Props {
  variant: "maria" | "jose" | "familias";
}

const GRUPOS: GrupoMisterio[] = ["Gozosos", "Dolorosos", "Gloriosos", "Luminosos"];

export function DescargarPdfButton({ variant }: Props) {
  const hoy = grupoDelDia();
  return (
    <div className="flex justify-center pt-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
          >
            <Download className="size-3.5" />
            Descargar PDF del Rosario
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-56">
          <DropdownMenuLabel className="text-xs">
            Elige los misterios
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {GRUPOS.map((g) => (
            <DropdownMenuItem
              key={g}
              onClick={() => generarRosarioPDF(variant, g)}
              className="text-sm justify-between"
            >
              <span>
                Misterios {g}
                {g === hoy && (
                  <span className="ml-1 text-[10px] text-muted-foreground">
                    (hoy)
                  </span>
                )}
              </span>
              {g === hoy && <Check className="size-3.5 opacity-60" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
