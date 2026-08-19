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
import { getGrupoFamiliaDelDia } from "@/data/familias";
import { grupoDelDia, type GrupoMisterio } from "@/data/misterios";

interface Props {
  variant: "maria" | "jose" | "familias";
}

const GRUPOS: GrupoMisterio[] = ["Gozosos", "Dolorosos", "Gloriosos", "Luminosos"];

export function DescargarPdfButton({ variant }: Props) {
  const hoy = variant === "familias" ? getGrupoFamiliaDelDia() : grupoDelDia();

  return (
    <div className="flex justify-center pt-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-full max-w-[260px] justify-center gap-1.5 rounded-full border-border/80 bg-background/80 px-3 text-[11px] font-medium text-muted-foreground shadow-sm hover:text-foreground sm:w-auto sm:text-xs"
          >
            <Download className="size-3.5" />
            Descargar PDF
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-[min(88vw,14rem)]">
          <DropdownMenuLabel className="text-xs">
            Elige los misterios
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => generarRosarioPDF(variant, hoy)}
            className="justify-between text-sm"
          >
            <span>
              Descargar hoy
              {hoy && (
                <span className="ml-1 text-[10px] text-muted-foreground">
                  ({hoy})
                </span>
              )}
            </span>
            <Check className="size-3.5 opacity-60" />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {GRUPOS.map((g) => (
            <DropdownMenuItem
              key={g}
              onClick={() => generarRosarioPDF(variant, g)}
              className="justify-between text-sm"
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
