export interface MisterioEspiritu {
  numero: number;
  titulo: string;
  descripcion: string;
}

export const ORACION_REPETIDA_VERSO =
  "Ven, Espíritu Santo, llena los corazones de tus fieles.";
export const ORACION_REPETIDA_RESP =
  "Y enciende en ellos el fuego de tu amor.";

export const PADRE_NUESTRO_BREVE =
  "Padre Nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden, no nos dejes caer en la tentación y líbranos del mal.";

export const JACULATORIA_ESPIRITU =
  "Padre, envíanos al Paráclito prometido por nuestro Señor Jesucristo. Amén.";

export const INVOCACIONES_INICIALES_ESPIRITU = [
  "Ven Espíritu Santo y envía desde el cielo un rayo de tu luz.",
  "Ven Padre de los pobres, ven a darnos tus dones, ven a darnos tu luz.",
  "Consolador lleno de bondad, dulce huésped del alma.",
  "Suave alivio para el hombre, descanso en el trabajo.",
  "Templanza en las pasiones, alegría en nuestro llanto.",
  "Penetra con tu Santa Luz, en lo más íntimo del corazón de tus fieles, sin tu ayuda divina, no hay nada en el hombre, nada que sea inocente.",
  "Lava nuestras manchas, riega nuestra aridez, cura nuestras heridas, suaviza nuestra dureza.",
  "Enciende nuestra frialdad, corrige nuestros desvíos, concede a tus fieles que en Ti confían tus siete sagrados dones.",
  "Premia nuestro esfuerzo, salva nuestras almas, danos tu eterna alegría, Amén.",
];

export const MISTERIOS_ESPIRITU: MisterioEspiritu[] = [
  {
    numero: 1,
    titulo: "Primer misterio",
    descripcion:
      "Honramos al Espíritu Santo y adoremos al amor sustancial que procede del Padre y del Hijo y los une en una Caridad infinita y eterna.\n\nContemplamos el Don del Temor de Dios, que nos llena de respeto por Nuestro Dios y nos aparta de los pecados.",
  },
  {
    numero: 2,
    titulo: "Segundo misterio",
    descripcion:
      "Honramos la operación del Espíritu Santo y adorémosle, porque hizo inmaculada a María en su Concepción y la santificó con la plenitud de su gracia.\n\nContemplamos el Don de Piedad, que nos hace amar a Dios y a todo lo relacionado con Él.",
  },
  {
    numero: 3,
    titulo: "Tercer misterio",
    descripcion:
      "Honremos la operación del Espíritu Santo y adorémosle, porque hizo a la Santísima Virgen Madre del Verbo divino en el Misterio de la Encarnación.\n\nContemplamos el Don de la Fortaleza, la cual nos mantiene firmes ante las adversidades y nos ayuda a perseverar hasta el final.",
  },
  {
    numero: 4,
    titulo: "Cuarto misterio",
    descripcion:
      "Honramos la operación del Espíritu Santo y adorémosle, porque dio la vida a la Iglesia en el día glorioso de Pentecostés.\n\nContemplamos el Don de la Ciencia, que nos permite ver y sentir la importancia de todo lo creado por Nuestro Señor, nos permite alabarlo por todo lo que ha hecho por nosotros y siempre guiarnos con su luz.",
  },
  {
    numero: 5,
    titulo: "Quinto misterio",
    descripcion:
      "Honremos la operación del Espíritu Santo y adorémosle, porque reside de una manera permanente en la Iglesia y la asiste, según la promesa divina, hasta la consumación de los siglos.\n\nContemplamos el Don del Consejo, para que siempre podamos tomar las mejores decisiones y nunca olvides que siempre lo harás tomado de la mano de Nuestro Dios.",
  },
  {
    numero: 6,
    titulo: "Sexto misterio",
    descripcion:
      "Honramos la operación del Espíritu Santo y adorémosle, porque creó en la Iglesia al nuevo Cristo, que es el sacerdote, y confirmó la plenitud del sacerdocio a sus obispos.\n\nContemplamos el Don del Entendimiento, porque gracias al entendimiento podemos comprobar que todas las verdades que conocemos como cristianos, son ciertas.",
  },
  {
    numero: 7,
    titulo: "Séptimo misterio",
    descripcion:
      "Honremos la operación del Espíritu Santo y adorémosle en la virtud de los santos en la Iglesia, obra secreta y maravillosa del Santificador Omnipotente.\n\nContemplamos el Don de la Sabiduría, el más perfecto de todos los dones; la sabiduría es capaz de reforzar nuestra fe y esperanza, haciendo que amemos aún más a Nuestro Dios.",
  },
];

export const OFRECIMIENTO_ESPIRITU = [
  "Oh Dios que con la luz del Espíritu Santo enseñas a los fieles la verdad, concédenos conocerla en el mismo Espíritu y gozar siempre de sus consuelos celestiales. Por Jesucristo Nuestro Señor. Que así sea.",
  "Señor, que la fortaleza del Espíritu Santo venga en nuestra ayuda para que se digne lavar las manchas de nuestros corazones y protegernos contra nuestros enemigos. Por Cristo Nuestro Señor. Amén.",
];

export const LETANIAS_ESPIRITU: { titulo?: string; items: { v: string; r: string }[] }[] = [
  {
    items: [
      { v: "Señor", r: "ten piedad de nosotros." },
      { v: "Cristo", r: "ten piedad de nosotros." },
      { v: "Señor", r: "ten piedad de nosotros." },
      { v: "Padre omnipotente", r: "ten piedad de nosotros." },
      { v: "Jesús, Hijo eterno del Padre y redentor del mundo", r: "sálvanos." },
      { v: "Espíritu del Padre y del Hijo y amor infinito del uno y del otro", r: "santifícanos." },
      { v: "Santísima Trinidad", r: "óyenos." },
    ],
  },
  {
    titulo: "Ven a nosotros",
    items: [
      { v: "Espíritu Santo que procedes del Padre y del Hijo", r: "ven a nosotros." },
      { v: "Promesa del Padre", r: "ven a nosotros." },
      { v: "Don de Dios altísimo", r: "ven a nosotros." },
      { v: "Rayo de luz celeste", r: "ven a nosotros." },
      { v: "Fuente de agua viva", r: "ven a nosotros." },
      { v: "Espíritu de amor y de verdad", r: "ven a nosotros." },
      { v: "Fuego abrasador", r: "ven a nosotros." },
      { v: "Autor de todo bien", r: "ven a nosotros." },
      { v: "Unción espiritual", r: "ven a nosotros." },
      { v: "Caridad ardiente", r: "ven a nosotros." },
      { v: "Espíritu de sabiduría", r: "ven a nosotros." },
      { v: "Espíritu de consejo y de fuerza", r: "ven a nosotros." },
      { v: "Espíritu de ciencia y de piedad", r: "ven a nosotros." },
      { v: "Espíritu de temor del Señor", r: "ven a nosotros." },
      { v: "Espíritu de gracia y de oración", r: "ven a nosotros." },
      { v: "Espíritu de paz y de dulzura", r: "ven a nosotros." },
      { v: "Espíritu de modestia y de inocencia", r: "ven a nosotros." },
      { v: "Espíritu consolador", r: "ven a nosotros." },
      { v: "Espíritu santificador", r: "ven a nosotros." },
      { v: "Espíritu que gobiernas la Iglesia", r: "ven a nosotros." },
      { v: "Espíritu que llenas el universo", r: "ven a nosotros." },
      { v: "Espíritu de adopción de los hijos de Dios", r: "ven a nosotros." },
    ],
  },
  {
    titulo: "Te rogamos, óyenos",
    items: [
      { v: "Espíritu Santo, imprime en nosotros el horror al pecado", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, ven a renovar la faz de la tierra", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, derrama tus luces en nuestra inteligencia", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, graba tu ley en nuestros corazones", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, enciéndenos en el fuego de tu amor", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, ábrenos el tesoro de tus gracias", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, enséñanos a orar como se debe", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, ilumínanos con tus inspiraciones celestiales", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, concédenos la única ciencia necesaria", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, inspíranos la práctica de las virtudes", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, haz que perseveremos en tu justicia", r: "te rogamos, óyenos." },
      { v: "Espíritu Santo, sé tú mismo nuestra recompensa", r: "te rogamos, óyenos." },
    ],
  },
  {
    titulo: "Cordero de Dios",
    items: [
      { v: "Cordero de Dios que quitas el pecado del mundo", r: "envíanos tu Espíritu Santo." },
      { v: "Cordero de Dios que quitas el pecado del mundo", r: "derrama en nuestras almas los dones del Espíritu Santo." },
      { v: "Cordero de Dios que quitas el pecado del mundo", r: "infúndenos el Espíritu de sabiduría y devoción." },
    ],
  },
  {
    items: [
      { v: "Ven Espíritu Santo, llena de tus dones los corazones de tus fieles", r: "y enciende en ellos el fuego de tu amor." },
      { v: "Envía tu Espíritu y todo será creado", r: "y renovarás la faz de la tierra." },
    ],
  },
];

export const CONSAGRACION_ESPIRITU = [
  "Oh, Espíritu Santo, recibe la consagración perfecta y absoluta de todo mi ser, dígnate ser en adelante, en cada uno de los instantes de mi vida y en cada una de mis acciones, mi director, mi luz, mi guía, mi fuerza y el amor en mi corazón.",
  "Yo me abandono sin reserva a tus operaciones divinas y quiero ser siempre dócil a tus inspiraciones.",
  "Oh, Espíritu Santo, transfórmame con María y en María, en Cristo Jesús para gloria del Padre y salvación del mundo. Amén.",
  "En nombre del Padre, y del Hijo y del Espíritu Santo. Amén.",
];
