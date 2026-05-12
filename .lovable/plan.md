## Cambios

### 1) `PageShell.tsx` — Reordenar header
Reemplazar la estructura del header. En lugar de tener `Inicio` y `headerExtra` apilados a la derecha, mostrar una sola fila horizontal:

`[Regresar]   ...   [headerExtra (Misterios)] [Inicio]`

Es decir: `headerExtra` se renderiza como hermano de `Inicio`, a su izquierda, en la misma fila. Si no hay `headerExtra`, todo queda igual visualmente.

### 2) Misterios meditados — nuevo dato + diálogo

**`src/data/misterios.ts`**: Extender cada `Misterio` con campos opcionales:
- `meditacion: string` (frase introductoria "En el primer misterio contemplamos…")
- `cita: string` (la cita bíblica con referencia)
- `oracion: string` (oración final)

Rellenar los 20 misterios con los textos provistos por el usuario.

**`src/components/MeditacionDialog.tsx`** (nuevo): Pequeño botón con ícono `BookText`/`Sparkles` (lucide), discreto, dentro de la card del misterio actual en `Rezo.tsx`. Al pulsarlo abre `Dialog` con título = `Misterio N — Título`, y secciones "Meditación", "Cita", "Oración".

**`src/components/Rezo.tsx`**: En la card de descripción del misterio, agregar el botón `MeditacionDialog` (esquina superior derecha de la card o junto al título). Solo se muestra cuando `variant !== "coronilla-jose"` y el item tiene `meditacion`.

### 3) Descarga PDF — botón en Conclusión

Agregar `jspdf` como dependencia (pure JS, funciona en navegador, sin SSR).

**`src/lib/rosarioPdf.ts`** (nuevo): Función `generarRosarioPDF(variant: "maria" | "jose", grupo: GrupoMisterio)` que arma un PDF carta horizontal (`letter`, `landscape`) a 2 columnas con jsPDF:

- Encabezado: título ("Santo Rosario a la Virgen María" o "…a San José") + subtítulo con grupo de misterios + fecha.
- Layout: 2 columnas con margen 12mm, gap 8mm, fuente Helvetica 9pt body / 11pt títulos.
- Secciones, en orden:
  1. Oraciones Iniciales (Señal de la Cruz, Acto de Contrición, Credo, Invocaciones)
  2. Misterios (los 5 del grupo, cada uno con título, meditación, cita, oración + indicación "Padre Nuestro, 10 Avemarías, Gloria, María Madre de gracia, Oh Jesús mío" + para José añadir "San José terror de los demonios")
  3. Ofrecimiento (Padre Nuestro)
  4. Aves Marías y Salve (solo María) / Salve a San José (solo José)
  5. Letanías (Lauretanas / a San José) en formato compacto V/R
  6. Oración final (solo José) / Conclusión María
  7. Despedida (Ave María Purísima)
- Flujo de columnas: cuando una columna se llena, salta a la columna derecha; cuando ambas se llenan, `addPage()`.
- Apertura: `doc.output('bloburl')` y abrir en nueva pestaña (`window.open`) → vista previa nativa del navegador con opción de descargar.

**`src/components/DescargarPdfButton.tsx`** (nuevo): Botón discreto (`variant="ghost"` o `"link"`, tamaño pequeño, ícono `Download`), texto "Descargar PDF del Rosario". Llama a `generarRosarioPDF`. Recibe prop `variant` y obtiene `grupo` con `grupoDelDia()`.

**`rosario-maria.conclusion.tsx`** y **`rosario-jose.conclusion.tsx`**: Agregar el botón debajo del botón "Volver al Inicio".

## Archivos

- editar `src/components/PageShell.tsx`
- editar `src/data/misterios.ts` (extender datos)
- crear `src/components/MeditacionDialog.tsx`
- editar `src/components/Rezo.tsx` (insertar botón meditación)
- crear `src/lib/rosarioPdf.ts`
- crear `src/components/DescargarPdfButton.tsx`
- editar `src/routes/rosario-maria.conclusion.tsx`
- editar `src/routes/rosario-jose.conclusion.tsx`
- agregar dependencia: `jspdf`

Sin cambios en la lógica de progreso ni en rutas.
