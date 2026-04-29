## Cambios

### 1) `src/components/RezoEspiritu.tsx` — Mostrar solo la línea del misterio activo

En la sección del tablero de cuentas, reemplazar el render de las 7 filas por una sola fila correspondiente al `itemIdx` actual.

- Quitar el `Array.from({ length: TOTAL }, (_, row) => …)`.
- Renderizar una única fila con:
  - El número del misterio activo (`itemIdx + 1`).
  - 7 cuentas (`Bead`), donde `active = step === idx` y `filled = step > idx || step >= 7`.
- Mantener el texto inferior "7 misterios · 7 oraciones por misterio" para que el usuario siga viendo el contexto global (el contador del header ya indica "Misterio X/7").

### 2) `src/components/Rezo.tsx` — Cuenta grande más pequeña y sin guion separador

En la sección del tablero de cuentas (`<section className="rounded-2xl border bg-card p-5 shadow-sm">` con los `Bead`):

- Eliminar el `<span className="text-muted-foreground">—</span>` que separa la cuenta grande de las pequeñas.
- En el componente `Bead`, reducir el tamaño cuando `big`: cambiar `big ? "size-7" : "size-4"` a `big ? "size-6" : "size-4"` (de 28px a 24px, una reducción sutil pero perceptible).
- Ajustar el `gap` del contenedor de `gap-3` a `gap-2` para que la cuenta grande quede visualmente unida al grupo de cuentas pequeñas sin el guion.

Esto afecta a las 3 pantallas (`/rosario-maria/rosario`, `/rosario-jose/rosario`, `/coronilla-jose/coronilla`) ya que todas usan el mismo componente `Rezo`.

## Archivos a modificar

- `src/components/RezoEspiritu.tsx`
- `src/components/Rezo.tsx`

Sin cambios de datos, rutas ni persistencia.