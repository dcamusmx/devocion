import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";
import { clearProgress, loadProgress, saveProgress } from "@/lib/progress";
import {
  MISTERIOS_ESPIRITU,
  ORACION_REPETIDA_VERSO,
  ORACION_REPETIDA_RESP,
  JACULATORIA_ESPIRITU,
} from "@/data/espiritu";
import { GLORIA } from "@/data/common";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const STEPS_PER_ITEM = 8; // 7 oraciones + 1 cierre (Gloria + Jaculatoria)
const VARIANT = "rosario-espiritu" as const;
const TOTAL = MISTERIOS_ESPIRITU.length; // 7

export function RezoEspiritu({ continueTo }: { continueTo: string }) {
  const { playBeep, vibrate } = useSettings();
  const [itemIdx, setItemIdx] = useState(0);
  const [step, setStep] = useState(0);
  const hydrated = useRef(false);

  useEffect(() => {
    const saved = loadProgress(VARIANT);
    if (saved && saved.totalItems === TOTAL) {
      setItemIdx(Math.min(saved.itemIdx, TOTAL - 1));
      setStep(Math.min(saved.step, STEPS_PER_ITEM - 1));
    }
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    const isFinished = itemIdx === TOTAL - 1 && step === STEPS_PER_ITEM - 1;
    if (isFinished || (itemIdx === 0 && step === 0)) {
      clearProgress(VARIANT);
      return;
    }
    saveProgress({
      variant: VARIANT,
      itemIdx,
      step,
      totalItems: TOTAL,
      stepsPerItem: STEPS_PER_ITEM,
      updatedAt: Date.now(),
    });
  }, [itemIdx, step]);

  const current = MISTERIOS_ESPIRITU[itemIdx];
  const oracionCount = step >= 1 && step <= 7 ? step : step === 0 ? 0 : 7;
  const faltan = Math.max(0, 7 - oracionCount);
  const isClosing = step === 7;
  const isLastItem = itemIdx === TOTAL - 1;
  const finished = isLastItem && isClosing;

  const goNext = () => {
    if (step < STEPS_PER_ITEM - 1) {
      setStep(step + 1);
      playBeep();
      vibrate(30);
    } else if (!isLastItem) {
      setItemIdx(itemIdx + 1);
      setStep(0);
      vibrate(50);
    }
  };

  const goPrev = () => {
    if (step > 0) setStep(step - 1);
    else if (itemIdx > 0) {
      setItemIdx(itemIdx - 1);
      setStep(STEPS_PER_ITEM - 1);
    }
  };

  const reset = () => {
    setItemIdx(0);
    setStep(0);
    vibrate(20);
  };

  return (
    <div className="space-y-5">
      <div className="-mx-4 px-4 py-3 sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="flex items-center justify-between gap-3">
          <div className="text-base sm:text-lg">
            <span className="font-semibold">
              Misterio {itemIdx + 1}/{TOTAL}
            </span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span>
              Oración: <strong>{oracionCount}</strong> de 7
            </span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span className="text-muted-foreground">Faltan: {faltan}</span>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium border hover:bg-accent transition shrink-0"
          >
            <RotateCcw className="size-3.5" />
            Reiniciar
          </button>
        </div>
      </div>

      {/* Misterio actual */}
      <section className="rounded-2xl border bg-card p-5 shadow-sm">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          Misterio
        </div>
        <h2 className="text-xl font-semibold text-primary leading-snug">
          {current.titulo}
        </h2>
        <p className="mt-2 text-foreground leading-relaxed whitespace-pre-line">
          {current.descripcion}
        </p>
      </section>

      {/* Tablero de cuentas: 7 líneas × 7 cuentas. Solo la línea actual está activa. */}
      <section className="rounded-2xl border bg-card p-4 shadow-sm">
        <div className="space-y-2">
          {Array.from({ length: TOTAL }, (_, row) => {
            const isActiveRow = row === itemIdx;
            const isPastRow = row < itemIdx;
            return (
              <div
                key={row}
                className={cn(
                  "flex items-center gap-2 justify-between rounded-lg px-2 py-1.5 transition",
                  isActiveRow && "bg-primary/5 ring-1 ring-primary/20"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-semibold w-5 text-center shrink-0",
                    isActiveRow ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {row + 1}
                </span>
                <div className="flex items-center gap-1.5 flex-1 justify-center flex-wrap">
                  {Array.from({ length: 7 }, (_, i) => {
                    const idx = i + 1;
                    const filled = isPastRow || (isActiveRow && (step > idx || step === STEPS_PER_ITEM - 1 || step === 7 ? true : step >= idx + 1));
                    const active = isActiveRow && step === idx;
                    return (
                      <Bead
                        key={i}
                        active={active}
                        filled={
                          isPastRow ||
                          (isActiveRow && (step > idx || step >= 7))
                        }
                        dim={!isActiveRow && !isPastRow}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 text-center text-xs text-muted-foreground">
          7 misterios · 7 oraciones por misterio
        </div>
      </section>

      {/* Oración del momento */}
      {step >= 1 && step <= 7 && (
        <section className="rounded-2xl border bg-primary/5 p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1.5">
            Oración {step} de 7
          </div>
          <p className="leading-relaxed">
            <strong>V.</strong> {ORACION_REPETIDA_VERSO}
          </p>
          <p className="leading-relaxed mt-1">
            <strong>R.</strong> {ORACION_REPETIDA_RESP}
          </p>
        </section>
      )}

      {isClosing && (
        <section className="rounded-2xl border bg-card p-5 shadow-sm space-y-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
              Gloria
            </div>
            <p className="leading-relaxed">{GLORIA}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
              Jaculatoria
            </div>
            <p className="leading-relaxed">{JACULATORIA_ESPIRITU}</p>
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-3 pt-2">
        <Button
          variant="outline"
          size="lg"
          onClick={goPrev}
          disabled={itemIdx === 0 && step === 0}
          className="rounded-full h-12"
        >
          <ArrowLeft className="size-4" />
          Anterior
        </Button>
        <Button
          size="lg"
          onClick={goNext}
          disabled={finished}
          className="rounded-full h-12"
        >
          Siguiente
          <ArrowRight className="size-4" />
        </Button>
      </div>

      {finished && (
        <div className="rounded-2xl border bg-primary/10 p-5 text-center space-y-3">
          <p className="font-medium">Has completado los 7 misterios.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link to={continueTo}>
              Continuar al Ofrecimiento
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

function Bead({
  active = false,
  filled = false,
  dim = false,
}: {
  active?: boolean;
  filled?: boolean;
  dim?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full transition-all duration-200 border size-4",
        filled
          ? "bg-primary border-primary"
          : "bg-[var(--bead-empty)] border-transparent",
        dim && "opacity-40",
        active && "ring-4 ring-primary/30 scale-110 shadow"
      )}
    />
  );
}
