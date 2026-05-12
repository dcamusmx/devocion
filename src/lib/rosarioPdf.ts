import { jsPDF } from "jspdf";
import {
  SENAL_CRUZ,
  ACTO_CONTRICION,
  CREDO,
  INVOCACIONES_INICIALES,
  PADRE_NUESTRO,
  AVE_MARIA,
  GLORIA,
  MARIA_MADRE_GRACIA,
  OH_JESUS_MIO,
  SAN_JOSE_TERROR,
  AVES_MARIAS_SALVE,
  CIERRE_AVE_MARIA_PURISIMA,
} from "@/data/common";
import { MISTERIOS, type GrupoMisterio } from "@/data/misterios";
import {
  LETANIAS_LAURETANAS,
  LETANIAS_SAN_JOSE,
  ORACION_FINAL_SAN_JOSE,
  type LetaniaSection,
} from "@/data/letanias";
import { CONCLUSION_MARIA, CONCLUSION_JOSE, SALVE_JOSE } from "@/data/conclusiones";

type Variant = "maria" | "jose";

interface Block {
  kind: "h1" | "h2" | "p" | "small" | "spacer" | "rule";
  text?: string;
}

function buildBlocks(variant: Variant, grupo: GrupoMisterio): Block[] {
  const b: Block[] = [];
  const titulo =
    variant === "maria"
      ? "Santo Rosario a la Santísima Virgen María"
      : "Santo Rosario a San José";
  b.push({ kind: "h1", text: titulo });
  b.push({ kind: "small", text: `Misterios ${grupo}` });
  b.push({ kind: "rule" });

  // Iniciales
  b.push({ kind: "h2", text: "Oraciones Iniciales" });
  b.push({ kind: "p", text: SENAL_CRUZ });
  b.push({ kind: "h2", text: "Acto de Contrición" });
  b.push({ kind: "p", text: ACTO_CONTRICION });
  b.push({ kind: "h2", text: "Credo" });
  b.push({ kind: "p", text: CREDO });
  b.push({ kind: "h2", text: "Invocaciones Iniciales" });
  b.push({ kind: "p", text: INVOCACIONES_INICIALES });

  // Misterios
  b.push({ kind: "rule" });
  b.push({ kind: "h1", text: `Misterios ${grupo}` });
  for (const m of MISTERIOS[grupo]) {
    b.push({ kind: "h2", text: `${m.numero}. ${m.titulo}` });
    if (m.meditacion) b.push({ kind: "p", text: m.meditacion });
    if (m.cita) b.push({ kind: "p", text: m.cita });
    if (m.oracion) b.push({ kind: "p", text: m.oracion });
    b.push({
      kind: "small",
      text:
        variant === "maria"
          ? "Padre Nuestro · 10 Avemarías · Gloria · María, Madre de gracia · Oh Jesús mío."
          : "Padre Nuestro · 10 Avemarías · Gloria · María, Madre de gracia · Oh Jesús mío · San José, terror de los demonios.",
    });
    b.push({ kind: "spacer" });
  }

  // Oraciones de cada decena (referencia)
  b.push({ kind: "rule" });
  b.push({ kind: "h2", text: "Padre Nuestro" });
  b.push({ kind: "p", text: PADRE_NUESTRO });
  b.push({ kind: "h2", text: "Ave María" });
  b.push({ kind: "p", text: AVE_MARIA });
  b.push({ kind: "h2", text: "Gloria" });
  b.push({ kind: "p", text: GLORIA });
  b.push({ kind: "h2", text: "María, Madre de gracia" });
  b.push({ kind: "p", text: MARIA_MADRE_GRACIA });
  b.push({ kind: "h2", text: "Oh Jesús mío" });
  b.push({ kind: "p", text: OH_JESUS_MIO });
  if (variant === "jose") {
    b.push({ kind: "h2", text: "Invocación a San José" });
    b.push({ kind: "p", text: SAN_JOSE_TERROR });
  }

  // Ofrecimiento
  b.push({ kind: "rule" });
  b.push({ kind: "h1", text: "Ofrecimiento" });
  b.push({ kind: "p", text: "Ofrece tus intenciones personales o de grupo." });

  // Aves Marías y Salve / Salve a San José
  if (variant === "maria") {
    b.push({ kind: "rule" });
    b.push({ kind: "h1", text: "Aves Marías y Salve" });
    AVES_MARIAS_SALVE.forEach((t, i) => {
      b.push({ kind: "h2", text: i < 3 ? `Avemaría ${i + 1}` : "Salve" });
      b.push({ kind: "p", text: t });
    });
  } else {
    b.push({ kind: "rule" });
    b.push({ kind: "h1", text: "Salve a San José" });
    b.push({ kind: "p", text: SALVE_JOSE });
  }

  // Letanías
  b.push({ kind: "rule" });
  b.push({
    kind: "h1",
    text: variant === "maria" ? "Letanías Lauretanas" : "Letanías a San José",
  });
  const letanias: LetaniaSection[] =
    variant === "maria" ? LETANIAS_LAURETANAS : LETANIAS_SAN_JOSE;
  for (const sec of letanias) {
    if (sec.titulo) b.push({ kind: "h2", text: sec.titulo });
    for (const it of sec.items) {
      b.push({ kind: "p", text: `V. ${it.v}   R. ${it.r}` });
    }
  }
  if (variant === "jose") {
    b.push({ kind: "h2", text: "Oración final" });
    b.push({ kind: "p", text: ORACION_FINAL_SAN_JOSE });
  }

  // Conclusión
  b.push({ kind: "rule" });
  b.push({ kind: "h1", text: "Conclusión" });
  if (variant === "maria") {
    CONCLUSION_MARIA.forEach((t) => b.push({ kind: "p", text: t }));
  } else {
    b.push({ kind: "p", text: CONCLUSION_JOSE });
  }
  b.push({ kind: "h2", text: "Despedida" });
  b.push({ kind: "p", text: CIERRE_AVE_MARIA_PURISIMA });

  return b;
}

export function generarRosarioPDF(variant: Variant, grupo: GrupoMisterio) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "letter" });
  const pageW = doc.internal.pageSize.getWidth(); // ~279.4 mm
  const pageH = doc.internal.pageSize.getHeight(); // ~215.9 mm
  const marginX = 12;
  const marginTop = 16;
  const marginBottom = 12;
  const gap = 8;
  const colW = (pageW - marginX * 2 - gap) / 2;
  const colTop = marginTop;
  const colBottom = pageH - marginBottom;
  const colXs = [marginX, marginX + colW + gap];

  let col = 0;
  let y = colTop;
  let pageNum = 1;

  const titulo =
    variant === "maria"
      ? "Santo Rosario a la Santísima Virgen María"
      : "Santo Rosario a San José";

  const drawHeader = () => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(80);
    doc.text(titulo, marginX, 9);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(`Misterios ${grupo}`, pageW - marginX, 9, { align: "right" });
    doc.setDrawColor(200);
    doc.setLineWidth(0.2);
    doc.line(marginX, 11, pageW - marginX, 11);
    doc.setTextColor(20);
  };

  const drawFooter = () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text(`Página ${pageNum}`, pageW / 2, pageH - 5, { align: "center" });
    doc.setTextColor(20);
  };

  drawHeader();
  drawFooter();

  const newPage = () => {
    doc.addPage();
    pageNum++;
    drawHeader();
    drawFooter();
    col = 0;
    y = colTop;
  };

  const moveColumnOrPage = () => {
    if (col === 0) {
      col = 1;
      y = colTop;
    } else {
      newPage();
    }
  };

  const ensureSpace = (h: number) => {
    if (y + h > colBottom) moveColumnOrPage();
  };

  const writeBlock = (block: Block) => {
    const x = colXs[col];
    if (block.kind === "spacer") {
      y += 2;
      return;
    }
    if (block.kind === "rule") {
      ensureSpace(4);
      doc.setDrawColor(220);
      doc.setLineWidth(0.2);
      doc.line(x, y + 1.5, x + colW, y + 1.5);
      y += 4;
      return;
    }
    if (block.kind === "h1") {
      const size = 12;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(size);
      doc.setTextColor(30);
      const lines = doc.splitTextToSize(block.text || "", colW);
      const h = lines.length * (size * 0.45) + 2;
      ensureSpace(h + 2);
      doc.text(lines, colXs[col], y + size * 0.4);
      y += h + 1;
      return;
    }
    if (block.kind === "h2") {
      const size = 9.5;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(size);
      doc.setTextColor(60);
      const lines = doc.splitTextToSize(block.text || "", colW);
      const h = lines.length * (size * 0.45) + 1;
      ensureSpace(h + 2);
      doc.text(lines, colXs[col], y + size * 0.4);
      y += h + 0.5;
      return;
    }
    if (block.kind === "small") {
      const size = 7.5;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(size);
      doc.setTextColor(110);
      const lines = doc.splitTextToSize(block.text || "", colW);
      const lineH = size * 0.42;
      // Render line-by-line for column flow
      for (const ln of lines) {
        ensureSpace(lineH + 0.5);
        doc.text(ln, colXs[col], y + lineH * 0.85);
        y += lineH;
      }
      doc.setTextColor(20);
      y += 1;
      return;
    }
    // p
    const size = 8.2;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(20);
    const lines = doc.splitTextToSize(block.text || "", colW);
    const lineH = size * 0.45;
    for (const ln of lines) {
      ensureSpace(lineH + 0.5);
      doc.text(ln, colXs[col], y + lineH * 0.85);
      y += lineH;
    }
    y += 1.2;
  };

  const blocks = buildBlocks(variant, grupo);
  for (const block of blocks) writeBlock(block);

  const url = doc.output("bloburl");
  window.open(url, "_blank");
}
