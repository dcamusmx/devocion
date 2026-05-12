export interface Misterio {
  numero: number;
  titulo: string;
  descripcion: string;
  meditacion?: string;
  cita?: string;
  oracion?: string;
}

export type GrupoMisterio = "Gozosos" | "Dolorosos" | "Gloriosos" | "Luminosos";

export const MISTERIOS: Record<GrupoMisterio, Misterio[]> = {
  Gozosos: [
    {
      numero: 1,
      titulo: "La Anunciación",
      descripcion: "El Ángel anuncia a María que será la Madre de Dios.",
      meditacion: "En el primer misterio contemplamos al ángel anunciando a María que será madre del Salvador.",
      cita: "El ángel le dijo: «No temas, María, porque has encontrado gracia ante Dios. Darás a luz un hijo, y le pondrás por nombre Jesús» (Lc 1,30-31).",
      oracion: "Igual que la Virgen María aceptó encarnar en su seno a tu Hijo, concédenos, Padre nuestro, la gracia de aceptar tus designios con humildad de corazón.",
    },
    {
      numero: 2,
      titulo: "La Visitación",
      descripcion: "María visita a su prima Isabel, portadora del Bautista.",
      meditacion: "En el segundo misterio contemplamos la visita de María a su prima Isabel.",
      cita: "En cuanto Isabel oyó el saludo de María, dijo: «¡Bendita tú entre las mujeres, y bendito el fruto de tu vientre! ¿Quién soy yo para que me visite la madre de mi Señor?» (Lc 1,41-43).",
      oracion: "Que al igual que María ensalzó tu nombre cuando visitó a su prima Isabel, concédenos también a nosotros, Señor, poder cantar tus maravillas durante toda nuestra vida, movidos por el Espíritu Santo.",
    },
    {
      numero: 3,
      titulo: "El Nacimiento de Jesús",
      descripcion: "Jesús nace en Belén, envuelto en pañales.",
      meditacion: "En el tercer misterio contemplamos a María dando a luz al Salvador del mundo.",
      cita: "Mientras estaba María en Belén, le llegó el tiempo del parto y dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no tenían sitio en la posada (Lc 2,6-7).",
      oracion: "Dios de bondad: Que el nacimiento de tu Hijo nos dé una fe tan sólida en tu amor, que podamos vivir siempre unidos a ti en la tierra y en el cielo.",
    },
    {
      numero: 4,
      titulo: "La Presentación en el Templo",
      descripcion: "Jesús es presentado en el Templo de Jerusalén.",
      meditacion: "En el cuarto misterio contemplamos a María presentando a Jesús en el Templo.",
      cita: "Cuando llegó el tiempo de la purificación, según la ley de Moisés, los padres de Jesús lo llevaron a Jerusalén, para presentarlo al Señor (Lc 2,22).",
      oracion: "Te pedimos, Señor, que así como tu Hijo fue presentado en el Templo, también nosotros podamos presentarnos ante ti con el alma limpia.",
    },
    {
      numero: 5,
      titulo: "El Niño Jesús en el Templo",
      descripcion: "Jesús es hallado dialogando con los doctores.",
      meditacion: "En el quinto misterio contemplamos a María que encuentra a Jesús en el Templo.",
      cita: "A los tres días, lo encontraron en el Templo, sentado en medio de los maestros, escuchándolos y haciéndoles preguntas. Él les dijo: «¿Por qué me buscabais? ¿No sabíais que yo debía estar en las cosas de mi Padre?» (Lc 2,46-49).",
      oracion: "Te pedimos, Padre, que nuestras familias se parezcan a la familia de Nazaret y sean fieles a ti en las alegrías y en las dificultades.",
    },
  ],
  Dolorosos: [
    {
      numero: 1,
      titulo: "La Oración en el Huerto",
      descripcion: "Jesús ora en Getsemaní y suda sangre.",
      meditacion: "En el primer misterio contemplamos a Jesús sufriendo la agonía de Getsemaní.",
      cita: "Jesús se postró en tierra y oraba. Decía: «¡Abba! (Padre), tú lo puedes todo; aparta de mí este cáliz. Pero no sea lo que yo quiero, sino lo que tú quieres» (Mc 14,35-36).",
      oracion: "Señor Jesús, mira nuestra debilidad y haz que, al contemplarte abrazando nuestro sufrimiento, encontremos en ti fuerza y consuelo.",
    },
    {
      numero: 2,
      titulo: "La Flagelación",
      descripcion: "Jesús es azotado cruelmente en la columna.",
      meditacion: "En el segundo misterio contemplamos a Jesús azotado en la columna.",
      cita: "Pilato, queriendo dar gusto a la gente, les soltó a Barrabás; y a Jesús, después de azotarlo, lo entregó para que lo crucificaran (Mc 15,15).",
      oracion: "Señor Jesús, tú que aceptaste sobre ti el castigo que nos trae la paz, ayúdanos a luchar contra el pecado y a vivir según tus mandatos.",
    },
    {
      numero: 3,
      titulo: "La Coronación de Espinas",
      descripcion: "Los soldados colocan una corona de espinas.",
      meditacion: "En el tercer misterio contemplamos a Jesús coronado de espinas.",
      cita: "Entonces los soldados vistieron a Jesús de púrpura y le pusieron una corona de espinas que habían trenzado (Mc 15,17).",
      oracion: "Dios de bondad: mira nuestra fragilidad, y llénanos con la fuerza de la Pasión de tu Hijo.",
    },
    {
      numero: 4,
      titulo: "Jesús con la Cruz",
      descripcion: "Jesús carga su Cruz camino al Calvario.",
      meditacion: "En el cuarto misterio contemplamos a Jesús, camino del calvario, con la cruz a cuestas.",
      cita: "Tomaron a Jesús, y él, cargando con la cruz, salió al sitio llamado «de la Calavera» (que en hebreo se dice Gólgota), donde lo crucificaron (Jn 19,16-18).",
      oracion: "Padre nuestro, que entregaste a tu Hijo a la muerte para salvarnos, ayúdanos a vivir las enseñanzas de la Pasión para participar un día con Cristo en su gloria.",
    },
    {
      numero: 5,
      titulo: "La Crucifixión y Muerte",
      descripcion: "Jesús muere en la Cruz para nuestra salvación.",
      meditacion: "En el quinto misterio contemplamos a Jesús muriendo en la cruz.",
      cita: "Jesús, cuando tomó el vinagre, dijo: «Está cumplido». E, inclinando la cabeza, entregó el espíritu (Jn 19,30).",
      oracion: "Señor Jesús, que desde la cruz nos diste a tu Madre como madre nuestra, concédenos que experimentemos cada día la presencia y la intercesión de María para que podamos seguir tus huellas con fidelidad de corazón.",
    },
  ],
  Gloriosos: [
    {
      numero: 1,
      titulo: "La Resurrección",
      descripcion: "Jesús resucita gloriosamente al tercer día.",
      meditacion: "En el primer misterio contemplamos la gloriosa resurrección de Cristo.",
      cita: "El ángel del Señor dijo a las mujeres: «No temáis; ya sé que buscáis a Jesús, el crucificado. No está aquí. Ha resucitado, como había dicho» (Mt 28,5-6).",
      oracion: "Padre nuestro, tú que has llenado el mundo de alegría con la resurrección de tu Hijo, ayúdanos a alcanzar un día los gozos eternos.",
    },
    {
      numero: 2,
      titulo: "La Ascensión",
      descripcion: "Jesús asciende al Cielo ante sus discípulos.",
      meditacion: "En el segundo misterio contemplamos la ascensión de Jesús al cielo.",
      cita: "Vieron a Jesús levantarse, hasta que una nube se lo quitó de la vista. Mientras miraban fijos al cielo, viéndole irse, se les presentaron dos hombres vestidos de blanco, que les dijeron: «Galileos, ¿qué hacéis ahí plantados mirando al cielo? El mismo Jesús que os ha dejado para subir al cielo volverá como le habéis visto marcharse» (Hch 1,9-11).",
      oracion: "Señor Dios nuestro, que al contemplar a tu Hijo victorioso, sentado a tu derecha, nos llenemos de la esperanza de ser llevados con él a la gloria del cielo.",
    },
    {
      numero: 3,
      titulo: "Pentecostés",
      descripcion: "El Espíritu Santo desciende sobre los Apóstoles.",
      meditacion: "En el tercer misterio contemplamos la venida del Espíritu Santo en Pentecostés.",
      cita: "El día de Pentecostés, estaban todos reunidos en el mismo lugar. Vieron aparecer unas lenguas, como llamaradas, que se repartían, posándose encima de cada uno. Se llenaron todos de Espíritu Santo (Hch 2,2-4).",
      oracion: "Señor, Padre nuestro, que inundaste el mundo con el fuego del Espíritu Santo, danos ese mismo Espíritu para que podamos llevar a nuestros hermanos el Evangelio de la salvación.",
    },
    {
      numero: 4,
      titulo: "La Asunción de María",
      descripcion: "María es llevada al Cielo en cuerpo y alma.",
      meditacion: "En el cuarto misterio contemplamos la asunción de María al cielo en cuerpo y alma.",
      cita: "Proclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi salvador; porque ha mirado la humillación de su esclava. Desde ahora me felicitarán todas las generaciones porque el Poderoso ha hecho obras grandes por mí (Lc 1,46-48).",
      oracion: "Padre nuestro, tú que has elevado en cuerpo y alma a los cielos a la Virgen María, concédenos buscar las cosas de allá arriba y participar con ella de su misma gloria en el cielo.",
    },
    {
      numero: 5,
      titulo: "La Coronación de María",
      descripcion: "María es coronada Reina del Cielo y la Tierra.",
      meditacion: "En el quinto misterio contemplamos a María coronada como Reina de cielos y tierra.",
      cita: "Se abrió en el cielo el santuario de Dios y en su santuario apareció el arca de la alianza. Después apareció una figura portentosa en el cielo: una mujer vestida de sol, la luna por pedestal, coronada con doce estrellas (Ap 11,19a-12,1).",
      oracion: "Señor Dios nuestro, tú que nos has dado a María como Reina y Madre, haz que ayudados por su poderosa intercesión, podamos entrar en el reino de los cielos.",
    },
  ],
  Luminosos: [
    {
      numero: 1,
      titulo: "El Bautismo de Jesús",
      descripcion: "Jesús es bautizado por Juan en el Jordán.",
      meditacion: "En el primer misterio contemplamos a Jesús bautizado en el Jordán.",
      cita: "Apenas se bautizó Jesús, vio que el Espíritu de Dios se posaba sobre él. Y vino una voz del cielo que decía: «Éste es mi Hijo, el amado, mi predilecto» (Mt 3,16-17).",
      oracion: "Dios Padre nuestro, tú que en el Bautismo de Jesús nos revelaste que él era tu Hijo amado, ayúdanos a saber que nosotros somos tus hijos y a permanecer siempre en tu amor.",
    },
    {
      numero: 2,
      titulo: "Las Bodas de Caná",
      descripcion: "Jesús realiza su primer milagro: agua en vino.",
      meditacion: "En el segundo misterio contemplamos a Jesús realizando su primer milagro en las bodas de Caná.",
      cita: "Con el agua convertida en vino Jesús comenzó sus milagros en Caná de Galilea, manifestó su gloria y creció la fe de sus discípulos en él (Jn 2,9.11).",
      oracion: "Señor Dios nuestro, tú que quisiste que María estuviese presente en el primer milagro de Jesús, ayúdanos a obedecer las palabras de la Virgen para que hagamos siempre lo que él nos diga.",
    },
    {
      numero: 3,
      titulo: "La Proclamación del Reino",
      descripcion: "Jesús proclama el Reino y llama a conversión.",
      meditacion: "En el tercer misterio contemplamos a Jesús predicando la conversión y anunciando el Reino de Dios.",
      cita: "Entonces Jesús comenzó a predicar diciendo: «Convertíos, porque está cerca el Reino de los cielos» (Mt 4,17).",
      oracion: "Padre bueno, convierte nuestros corazones para que te busquemos a ti por encima de todas las cosas y nos dediquemos a amarte en los hermanos.",
    },
    {
      numero: 4,
      titulo: "La Transfiguración",
      descripcion: "Jesús se transfigura ante Pedro, Santiago y Juan.",
      meditacion: "En el cuarto misterio contemplamos a Jesús transfigurado ante sus discípulos.",
      cita: "Jesús cogió a Pedro, a Juan y a Santiago y subió a lo alto de una montaña para orar. Mientras oraba, el aspecto de su rostro cambió, sus vestidos brillaban de blancos. Una nube los cubrió. Una voz desde la nube decía: «Éste es mi Hijo, el escogido, escuchadle» (Lc 9,28-29.34-35).",
      oracion: "Señor, tú que en la transfiguración nos has mandado escuchar a tu Hijo, haz que le sigamos fielmente en esta vida y le contemplemos lleno de gloria en el cielo.",
    },
    {
      numero: 5,
      titulo: "La Institución de la Eucaristía",
      descripcion: "Jesús instituye la Eucaristía en la Última Cena.",
      meditacion: "En el quinto misterio contemplamos a Jesús instituyendo la Eucaristía.",
      cita: "Durante la cena, Jesús tomó pan, pronunció la bendición, lo partió y lo dio a sus discípulos diciendo: «Tomad, comed: esto es mi cuerpo». Y, cogiendo una copa, pronunció la acción de gracias y se la dio, diciendo: «Bebed todos; porque ésta es mi sangre, sangre de la alianza, derramada por todos para el perdón de los pecados» (Mt 26,26-29).",
      oracion: "Padre bueno, tú que nos diste a Jesús, el verdadero pan del cielo, haz que, por la fuerza de ese alimento, vivamos unidos a ti y alcancemos la vida eterna.",
    },
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
