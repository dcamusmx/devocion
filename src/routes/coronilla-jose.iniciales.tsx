import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ContinueLink, PrayerCard } from "@/components/Prayer";
import {
  INVOCACION_ESPIRITU_SANTO,
  ORACION_SAN_JOSE,
  SENAL_CRUZ,
  ACTO_CONTRICION,
  CREDO,
  INVOCACIONES_INICIALES,
} from "@/data/common";

export const Route = createFileRoute("/coronilla-jose/iniciales")({
  component: Page,
  head: () => ({ meta: [{ title: "Oraciones Iniciales — Coronilla" }] }),
});

const ORACION_ESPIRITU_SANTO_2 =
  "Ven, Espíritu Santo, llena los corazones de tus fieles; enciende en ellos el fuego de tu Divino Amor y todo será creado; y se renovará la faz de la tierra. Oh Dios, que aleccionaste los corazones de tus fieles con la luz del Espíritu Santo, concédenos que, animados y guiados por ese mismo Espíritu, aprendamos a obrar rectamente siempre, y gocemos la dulzura del bien y sus divinos consuelos; por Jesucristo, nuestro Señor. Amén.";

function Page() {
  return (
    <PageShell theme="coronilla" title="Oraciones Iniciales" subtitle="Etapa: Oraciones iniciales" backTo="/coronilla-jose">
      <div className="space-y-4">
        <PrayerCard title="1. Invocación al Espíritu Santo">{INVOCACION_ESPIRITU_SANTO}</PrayerCard>
        <PrayerCard title="2. Oración a San José">{ORACION_SAN_JOSE}</PrayerCard>
        <PrayerCard title="3. Oración al Espíritu Santo">{ORACION_ESPIRITU_SANTO_2}</PrayerCard>
        <PrayerCard title="4. Señal de la Cruz">{SENAL_CRUZ}</PrayerCard>
        <PrayerCard title="5. Acto de Contrición">{ACTO_CONTRICION}</PrayerCard>
        <PrayerCard title="6. Credo">{CREDO}</PrayerCard>
        <PrayerCard title="Invocaciones">{INVOCACIONES_INICIALES}</PrayerCard>
        <ContinueLink to="/coronilla-jose/coronilla" label="Continuar a la Coronilla" />
      </div>
    </PageShell>
  );
}
