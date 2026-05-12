import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/lib/settings";
import { cn } from "@/lib/utils";
import { clearProgress, loadProgress, saveProgress } from "@/lib/progress";
import { MeditacionDialog } from "@/components/MeditacionDialog";
import {
  PADRE_NUESTRO,
  AVE_MARIA,
  GLORIA,
  MARIA_MADRE_GRACIA,
  OH_JESUS_MIO,
  SAN_JOSE_TERROR,
  AVE_JOSE,
  JACULATORIA_JOSE,
} from "@/data/common";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

export interface RezoItem {
  numero: number;
  titulo: string;
  descripcion: string;
}

interface RezoProps {
  variant: "rosario-maria" | "rosario-jose" | "coronilla-jose";
  items: RezoItem[];
  itemLabel: string;
  continueTo: string;
  continueLabel?: string;
}

const STEPS_PER_ITEM = 12;

export function Rezo({
  variant,
  items,
  itemLabel,
  continueTo,
  continueLabel = "Continuar al Ofrecimiento",
}: RezoProps) {
  const { playBeep, vibrate } = useSettings();
  const [itemIdx, setItemIdx] = useState(0);
  const [step, setStep] = useState(0);
  const hydrated = useRef(false);

  // Restore progress on mount
  useEffect(() => {
    const saved = loadProgress(variant);
    if (saved && saved.totalItems === items.length) {
      setItemIdx(Math.min(saved.itemIdx, items.length - 1));
      setStep(Math.min(saved.step, STEPS_PER_ITEM - 1));
    }
    hydrated.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist progress
  useEffect(() => {
    if (!hydrated.current) return;
    const isFinished = itemIdx === items.length - 1 && step === STEPS_PER_ITEM - 1;
    if (isFinished) {
      clearProgress(variant);
      return;
    }
    if (itemIdx === 0 && step === 0) {
      clearProgress(variant);
      return;
    }
    saveProgress({
      variant,
      itemIdx,
      step,
      totalItems: items.length,
      updatedAt: Date.now(),
    });
  }, [itemIdx, step, variant, items.length]);

  const isCoronilla = variant === "coronilla-jose";
  const aveText = isCoronilla ? AVE_JOSE : AVE_MARIA;
  const aveLabel = isCoronilla ? "Ave José" : "Ave María";

  const current = items[itemIdx];
  const aveCount = step >= 1 && step <= 10 ? step : step === 11 ? 10 : 0;
  const faltan = Math.max(0, 10 - aveCount);
  const isClosing = step === 11;
  const isLastItem = itemIdx === items.length - 1;

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
    if (step > 0) {
      setStep(step - 1);
    } else if (itemIdx > 0) {
      setItemIdx(itemIdx - 1);
      setStep(STEPS_PER_ITEM - 1);
    }
  };

  const reset = () => {
    setItemIdx(0);
    setStep(0);
    vibrate(20);
  };

  const finished = isLastItem && isClosing;

  const currentPrayer = useMemo(() => {
    if (step === 0) return { label: "Padre Nuestro", text: PADRE_NUESTRO };
    if (step >= 1 && step <= 10) return { label: aveLabel, text: aveText };
    return null;
  }, [step, aveLabel, aveText]);

  return (
    <div className="space-y-5">
      <div className="-mx-4 px-4 py-3 sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="flex items-center justify-between gap-3">
          <div className="text-base sm:text-lg">
            <span className="font-semibold">
              {itemLabel} {current.numero}/{items.length}
            </span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span>
              Avemarías: <strong>{aveCount}</strong> de 10
            </span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span className="text-muted-foreground">Faltan: {faltan}</span>
          </div>
          <button
            onClick={reset}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium border hover:bg-accent transition shrink-0"
            aria-label="Reiniciar"
          >
            <RotateCcw className="size-3.5" />
            Reiniciar
          </button>
        </div>
      </div>

      <section className="rounded-2xl border bg-card p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              {itemLabel}
            </div>
            <h2 className="text-xl font-semibold text-primary leading-snug">{current.titulo}</h2>
          </div>
          {variant !== "coronilla-jose" && (
            <MeditacionDialog misterio={current} itemLabel={itemLabel} />
          )}
        </div>
        <p className="mt-2 text-foreground leading-relaxed">{current.descripcion}</p>
      </section>

      <section className="rounded-2xl border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Bead big active={step === 0} filled={step >= 1} />
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {Array.from({ length: 10 }, (_, i) => {
              const idx = i + 1;
              return (
                <Bead
                  key={i}
                  active={step === idx}
                  filled={step > idx || (step === 11 && idx <= 10)}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-3 text-center text-xs text-muted-foreground">
          Cuenta grande: Padre Nuestro &nbsp;·&nbsp; cuentas pequeñas: {aveLabel}
        </div>
      </section>

      {currentPrayer && (
        <section className="rounded-2xl border bg-primary/5 p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1.5">
            {currentPrayer.label}
          </div>
          <p className="leading-relaxed text-foreground">{currentPrayer.text}</p>
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
          {variant === "rosario-maria" && (
            <>
              <p className="leading-relaxed">{MARIA_MADRE_GRACIA}</p>
              <p className="leading-relaxed">{OH_JESUS_MIO}</p>
            </>
          )}
          {variant === "rosario-jose" && (
            <>
              <p className="leading-relaxed">{MARIA_MADRE_GRACIA}</p>
              <p className="leading-relaxed">{OH_JESUS_MIO}</p>
              <p className="leading-relaxed font-medium">{SAN_JOSE_TERROR}</p>
            </>
          )}
          {variant === "coronilla-jose" && (
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                Jaculatoria
              </div>
              <p className="leading-relaxed">{JACULATORIA_JOSE}</p>
            </div>
          )}
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
          <p className="font-medium">Has completado los {items.length} {itemLabel.toLowerCase()}s.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link to={continueTo}>
              {continueLabel}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

function Bead({
  big = false,
  active = false,
  filled = false,
}: {
  big?: boolean;
  active?: boolean;
  filled?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full transition-all duration-200 border",
        big ? "size-6" : "size-4",
        filled ? "bg-primary border-primary" : "bg-[var(--bead-empty)] border-transparent",
        active && "ring-4 ring-primary/30 scale-110 shadow"
      )}
    />
  );
}
