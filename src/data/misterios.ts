export interface Misterio {
  numero: number;
  titulo: string;
  descripcion: string;
}

export type GrupoMisterio = "Gozosos" | "Dolorosos" | "Gloriosos" | "Luminosos";

export const MISTERIOS: Record<GrupoMisterio, Misterio[]> = {
  Gozosos: [
    { numero: 1, titulo: "La Anunciación", descripcion: "El Ángel anuncia a María que será la Madre de Dios." },
    { numero: 2, titulo: "La Visitación", descripcion: "María visita a su prima Isabel, portadora del Bautista." },
    { numero: 3, titulo: "El Nacimiento de Jesús", descripcion: "Jesús nace en Belén, envuelto en pañales." },
    { numero: 4, titulo: "La Presentación en el Templo", descripcion: "Jesús es presentado en el Templo de Jerusalén." },
    { numero: 5, titulo: "El Niño Jesús en el Templo", descripcion: "Jesús es hallado dialogando con los doctores." },
  ],
  Dolorosos: [
    { numero: 1, titulo: "La Oración en el Huerto", descripcion: "Jesús ora en Getsemaní y suda sangre." },
    { numero: 2, titulo: "La Flagelación", descripcion: "Jesús es azotado cruelmente en la columna." },
    { numero: 3, titulo: "La Coronación de Espinas", descripcion: "Los soldados colocan una corona de espinas." },
    { numero: 4, titulo: "Jesús con la Cruz", descripcion: "Jesús carga su Cruz camino al Calvario." },
    { numero: 5, titulo: "La Crucifixión y Muerte", descripcion: "Jesús muere en la Cruz para nuestra salvación." },
  ],
  Gloriosos: [
    { numero: 1, titulo: "La Resurrección", descripcion: "Jesús resucita gloriosamente al tercer día." },
    { numero: 2, titulo: "La Ascensión", descripcion: "Jesús asciende al Cielo ante sus discípulos." },
    { numero: 3, titulo: "Pentecostés", descripcion: "El Espíritu Santo desciende sobre los Apóstoles." },
    { numero: 4, titulo: "La Asunción de María", descripcion: "María es llevada al Cielo en cuerpo y alma." },
    { numero: 5, titulo: "La Coronación de María", descripcion: "María es coronada Reina del Cielo y la Tierra." },
  ],
  Luminosos: [
    { numero: 1, titulo: "El Bautismo de Jesús", descripcion: "Jesús es bautizado por Juan en el Jordán." },
    { numero: 2, titulo: "Las Bodas de Caná", descripcion: "Jesús realiza su primer milagro: agua en vino." },
    { numero: 3, titulo: "La Proclamación del Reino", descripcion: "Jesús proclama el Reino y llama a conversión." },
    { numero: 4, titulo: "La Transfiguración", descripcion: "Jesús se transfigura ante Pedro, Santiago y Juan." },
    { numero: 5, titulo: "La Institución de la Eucaristía", descripcion: "Jesús instituye la Eucaristía en la Última Cena." },
  ],
};

export function grupoDelDia(d: Date = new Date()): GrupoMisterio {
  // 0 Domingo, 1 Lunes, 2 Martes, 3 Miércoles, 4 Jueves, 5 Viernes, 6 Sábado
  const day = d.getDay();
  if (day === 1 || day === 6) return "Gozosos";        // L, S
  if (day === 2 || day === 5) return "Dolorosos";      // M, V
  if (day === 3 || day === 0) return "Gloriosos";      // X, D
  return "Luminosos";                                   // J
}

export const NOMBRE_DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
