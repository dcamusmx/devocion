import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generarRosarioPDF } from "@/lib/rosarioPdf";
import { grupoDelDia } from "@/data/misterios";

interface Props {
  variant: "maria" | "jose";
}

export function DescargarPdfButton({ variant }: Props) {
  const handle = () => {
    const grupo = grupoDelDia();
    generarRosarioPDF(variant, grupo);
  };
  return (
    <div className="flex justify-center pt-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={handle}
        className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
      >
        <Download className="size-3.5" />
        Descargar PDF del Rosario
      </Button>
    </div>
  );
}
