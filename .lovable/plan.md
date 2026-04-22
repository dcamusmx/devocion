
# Plan: App "Devocional" — Guía de Rosarios y Coronilla

App devocional móvil-first con 3 devociones interactivas, ajustes y créditos. Diseño profesional inspirado en las referencias (tarjetas redondeadas, headers con color por sección, contador fijo durante el rezo).

## Estructura de pantallas (rutas separadas)

**Home `/`** — Pantalla de bienvenida con header azul "A Cristo con María y José · Reza con guía interactiva" y 5 tarjetas grandes:
- Rosario a María (acento azul)
- Rosario a San José (acento morado)
- Coronilla a San José (acento naranja)
- Ajustes
- Créditos

**Cada devoción** tiene su menú interno con 6 secciones numeradas + botones "Inicio" y "Regresar":

### Rosario a María `/rosario-maria` (tema azul)
1. Oraciones Iniciales — Señal de la Cruz, Acto de Contrición, Credo, Invocaciones
2. Rosario Interactivo — 5 misterios según el día actual (Gozosos L/S, Dolorosos M/V, Gloriosos X/D, Luminosos J)
3. Ofrecimiento
4. Avemarías y Salve
5. Letanías Lauretanas
6. Conclusión

### Rosario a San José `/rosario-jose` (tema morado)
Misma estructura, con sus oraciones, letanías a San José y conclusión propias.

### Coronilla a San José `/coronilla-jose` (tema naranja)
- 5 Virtudes × (1 Padre Nuestro + 10 Aves José + 1 Gloria + 1 Jaculatoria)
- Pantalla con virtud actual, texto fijo del Ave José visible debajo de las cuentas
- 6 secciones: Iniciales, Coronilla, Ofrecimiento, Salve José, Letanías, Conclusión

### Ajustes `/ajustes`
- Tema claro/oscuro
- Tamaño de fuente (S/M/L)
- Sonido (beep) on/off al avanzar cuenta
- Vibración háptica on/off
- Color de cuentas rezadas / sin rezar (presets)

### Créditos `/creditos`
Información sobre la aplicación, propósito devocional, atribuciones.

## Componente clave: Rezo Interactivo

Reutilizable para los 3 rosarios/coronilla:

- **Header sticky superior** con color del tema, título de devoción, botón "Regresar" y "Reiniciar"
- **Contador fijo** (no se desplaza con scroll): "Misterio/Virtud X/5 · Avemarías: N de 10 · Faltan: M" + indicador de puntos
- **Tarjeta del misterio/virtud actual** con título, número y descripción meditativa
- **Línea de cuentas**: 1 cuenta grande (Padre Nuestro) + 10 cuentas pequeñas alineadas horizontalmente
  - Color "sin rezar" (gris) → "rezada" (color del tema) al avanzar
  - Cuenta actual destacada (más grande / glow)
- **Texto de oración actual** debajo (Padre Nuestro, Ave María / Ave José, Gloria, Jaculatoria) — siempre visible
- **Al terminar misterio**: muestra Gloria + María Madre de gracia + Oh Jesús mío (rosario) o Gloria + Jaculatoria (coronilla), botón "Siguiente misterio/virtud"
- **Al terminar el 5º**: botón "Continuar a Ofrecimiento"
- **Botones inferiores**: ← Anterior · Siguiente → (grandes, fáciles para móvil)
- **Feedback**: beep suave (Web Audio API) y `navigator.vibrate(30)` al avanzar (respetando ajustes)

## Estado y persistencia

- Context global para Ajustes (tema, sonido, vibración, tamaño fuente) persistido en `localStorage`
- Estado local del rezo (cuenta actual, misterio actual) por sesión, con opción "Reiniciar"
- Detección automática del día de la semana para misterios del Rosario a María

## Diseño

- Mobile-first, max-width contenedor centrado en tablet/desktop con marco tipo "phone"
- Tipografía legible (Inter), tamaños amplios para lectura devocional
- Paleta semántica con tokens en `styles.css`:
  - Azul `--maria` para María
  - Morado `--jose` para San José
  - Naranja `--coronilla` para Coronilla
- Tarjetas con sombra suave, bordes redondeados (xl), ícono circular a la izquierda
- Modo oscuro completo
- Animaciones sutiles al marcar cuenta (scale + color transition)

## Contenido

Todos los textos litúrgicos del documento `Rosarios.txt` se almacenan como datos estructurados en `src/data/` (oraciones, misterios por día, letanías, virtudes con sus oraciones específicas), separados de los componentes UI para mantenerlo limpio y editable.

## Navegación consistente

En todas las subpantallas: header con "← Regresar" (al menú de la devoción) y "🏠 Inicio" (al Home). Cada sección con badge numerado (1-6) como en la referencia.
