export type RezoVariant =
  | "rosario-maria"
  | "rosario-jose"
  | "coronilla-jose"
  | "rosario-espiritu";

export interface RezoProgress {
  variant: RezoVariant;
  itemIdx: number;
  step: number;
  totalItems: number;
  updatedAt: number;
  /** Steps per item (defaults to 12 for older variants) */
  stepsPerItem?: number;
}

const KEY = "devocional.progress.v1";

export const VARIANT_META: Record<
  RezoVariant,
  { label: string; route: string; itemLabel: string }
> = {
  "rosario-maria": {
    label: "Rosario a María",
    route: "/rosario-maria/rosario",
    itemLabel: "Misterio",
  },
  "rosario-jose": {
    label: "Rosario a San José",
    route: "/rosario-jose/rosario",
    itemLabel: "Misterio",
  },
  "coronilla-jose": {
    label: "Coronilla a San José",
    route: "/coronilla-jose/coronilla",
    itemLabel: "Virtud",
  },
  "rosario-espiritu": {
    label: "Rosario al Espíritu Santo",
    route: "/rosario-espiritu/rosario",
    itemLabel: "Misterio",
  },
};

export function loadProgress(variant: RezoVariant): RezoProgress | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const all = JSON.parse(raw) as Record<string, RezoProgress>;
    return all[variant] ?? null;
  } catch {
    return null;
  }
}

export function loadAllProgress(): RezoProgress[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const all = JSON.parse(raw) as Record<string, RezoProgress>;
    return Object.values(all);
  } catch {
    return [];
  }
}

export function saveProgress(p: RezoProgress) {
  try {
    const raw = localStorage.getItem(KEY);
    const all = raw ? (JSON.parse(raw) as Record<string, RezoProgress>) : {};
    all[p.variant] = p;
    localStorage.setItem(KEY, JSON.stringify(all));
    window.dispatchEvent(new Event("devocional:progress"));
  } catch {}
}

export function clearProgress(variant: RezoVariant) {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;
    const all = JSON.parse(raw) as Record<string, RezoProgress>;
    delete all[variant];
    localStorage.setItem(KEY, JSON.stringify(all));
    window.dispatchEvent(new Event("devocional:progress"));
  } catch {}
}
