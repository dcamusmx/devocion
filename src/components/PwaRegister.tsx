import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const isInIframe = (() => {
      try {
        return window.self !== window.top;
      } catch {
        return true;
      }
    })();

    const host = window.location.hostname;
    const isPreviewHost =
      host.includes("id-preview--") ||
      host.includes("lovableproject.com") ||
      host.includes("lovable.app") === false && host.includes("lovable.dev");

    const isLocalhost = host === "localhost" || host === "127.0.0.1";

    if (isInIframe || isPreviewHost || isLocalhost || import.meta.env.DEV) {
      // Limpiar SW residuales en contextos de preview/desarrollo
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((r) => r.unregister()))
        .catch(() => undefined);
      return;
    }

    const onLoad = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          registration.update();
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: "PREFETCH_ROUTES" });
          }
        })
        .catch(() => undefined);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
  }, []);

  return null;
}
