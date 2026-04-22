import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type FontSize = "s" | "m" | "l";
export type Theme = "light" | "dark";

export interface Settings {
  theme: Theme;
  fontSize: FontSize;
  sound: boolean;
  vibration: boolean;
}

const DEFAULTS: Settings = {
  theme: "light",
  fontSize: "m",
  sound: true,
  vibration: true,
};

const STORAGE_KEY = "devocional.settings.v1";

interface Ctx {
  settings: Settings;
  update: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  reset: () => void;
  playBeep: () => void;
  vibrate: (ms?: number) => void;
}

const SettingsContext = createContext<Ctx | null>(null);

let audioCtx: AudioContext | null = null;

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
    const root = document.documentElement;
    root.classList.toggle("dark", settings.theme === "dark");
    root.dataset.font = settings.fontSize;
  }, [settings, hydrated]);

  const update: Ctx["update"] = (key, value) =>
    setSettings((s) => ({ ...s, [key]: value }));

  const reset = () => setSettings(DEFAULTS);

  const playBeep = () => {
    if (!settings.sound) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const ctx = audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  };

  const vibrate = (ms = 30) => {
    if (!settings.vibration) return;
    try {
      navigator.vibrate?.(ms);
    } catch {}
  };

  return (
    <SettingsContext.Provider value={{ settings, update, reset, playBeep, vibrate }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
