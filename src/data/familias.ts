export interface MisterioFamilia {
  numero: number;
  titulo: string;
  descripcion: string;
  meditacion?: string;
  cita?: string;
  oracion?: string;
}

export const MISTERIOS_FAMILIAS: MisterioFamilia[] = [
  {
    numero: 1,
    titulo: "Jesús es concebido en una familia",
    descripcion: "El ángel Gabriel anuncia a María la venida del Salvador y la familia se convierte en lugar de gracia y misión.",
    meditacion:
      "Contemplamos la familia de Nazaret como signo del amor de Dios. En el seno de María y la entrega de José, comienza la historia de la salvación y se nos enseña que la familia es casa de comunión, escucha y obediencia.",
    cita:
      "«Alégrate, María, Dios está contigo; tendrás un hijo y le pondrás por nombre Jesús» (Lc 1,28-31).",
    oracion:
      "Señor, haz de nuestras familias un hogar donde tu amor habite, donde la humildad, la fe y el servicio nos hagan escuchar tus designios con alegría.",
  },
  {
    numero: 2,
    titulo: "María visita a una familia",
    descripcion: "María se acerca a Isabel y descubre la alegría de compartir la gracia recibida con otra familia.",
    meditacion:
      "Meditamos la visita de María a Isabel como ejemplo del amor que comparte la alegría, acompaña y fortalece a los demás. En cada familia debemos ser lugar de acogida, escucha y bendición.",
    cita:
      "«Eres bendita entre las mujeres y bendito es el fruto de tu vientre» (Lc 1,42).",
    oracion:
      "Padre bueno, concédenos celebrar las alegrías ajenas, acompañar a los que sufren y sembrar en nuestras casas un ambiente de paz y fraternidad.",
  },
  {
    numero: 3,
    titulo: "Jesús nace en Belén",
    descripcion: "En Belén nace el Salvador y la familia se convierte en refugio del Amor de Dios.",
    meditacion:
      "Trayendo a la mente el nacimiento de Jesús en un pesebre, contemplamos la pobreza, la sencillez y el amor gratuito. En la familia se ama a cada hijo sin condiciones y se acoge la vida como don del Padre.",
    cita:
      "«Y dio a luz a su hijo primogénito; lo envolvió en pañales y lo acostó en un pesebre» (Lc 2,7).",
    oracion:
      "Señor, enséñanos a amar a nuestros hijos y a todos los miembros de la familia como un don único, con ternura, paciencia y gratuidad.",
  },
  {
    numero: 4,
    titulo: "María y José llevan a Jesús al templo",
    descripcion: "Jesús es presentado al Señor y la familia participa de la misión de la Iglesia y la sociedad.",
    meditacion:
      "La familia es un primer lugar donde se aprende a vivir en comunidad, a cuidar del prójimo y a abrirse a la sociedad. María y José presentan a Jesús y nos enseñan a llevar la fe a la vida diaria.",
    cita:
      "«Los padres de Jesús lo llevaron a Jerusalén para presentarlo al Señor» (Lc 2,22).",
    oracion:
      "Concédenos, Señor, que nuestra familia sea un hogar abierto a los demás, humilde y solidario, capaz de crecer en comunión y servicio.",
  },
  {
    numero: 5,
    titulo: "María y José encuentran a Jesús en el Templo",
    descripcion: "Jesús, en su juventud, revela la misión de su Padre y la familia aprende a respetar la libertad y la vocación.",
    meditacion:
      "Meditamos la experiencia de María y José buscando a Jesús y descubriendo que Dios llama a cada persona a su misión. En la familia aprendemos a cuidar, acompañar y respetar la libertad de los hijos.",
    cita:
      "«¿Por qué me buscabais? ¿No sabíais que yo debía estar en la Casa de mi Padre?» (Lc 2,49).",
    oracion:
      "Señor, ayuda a nuestras familias a cuidar a sus hijos con amor y a acompañarlos con paciencia, respetando su libertad y su vocación.",
  },
];

export const OFRECIMIENTO_FAMILIAS =
  "Ofrecemos este rosario por las familias, por las que están y por las que no están, por la unión de las familias, por las familias que están separadas, por las familias que están en tribulación, por las familias que han perdido un familiar, por las familias migrantes, por las familias en situación de calle, por nuestras familias.\n\nPadre Nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día, perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden, no nos dejes caer en la tentación y líbranos del mal. Amén.";

export const AVES_MARIAS_FAMILIAS: string[] = [
  "Dios te salve, María Santísima, hija de Dios Padre, Virgen purísima y castísima antes del parto, en tus manos encomiendo mi fe para que la alumbres, llena eres de gracia, etc. R: Santa María",
  "Dios te salve, María Santísima, madre de Dios Hijo, Virgen purísima y castísima en el parto, en tus manos encomiendo mi esperanza para que la alientes, llena eres de gracia, etc. R: Santa María",
  "Dios te salve, María Santísima, esposa de Dios Espíritu Santo, Virgen purísima y castísima después del parto, en tus manos encomiendo mi caridad para que la inflames, llena eres de gracia, etc. R: Santa María",
  "Dios te salve, María Santísima, templo, trono y sagrario de la Santísima Trinidad, Virgen concebida sin la culpa original, Dios te salve Reina y Madre de misericordia, vida, dulzura y esperanza nuestra: Dios te salve; a ti llamamos los desterrados hijos de Eva; a ti suspiramos gimiendo y llorando en este valle de lágrimas. ¡Ea!, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre, ¡Oh clemente! ¡Oh piadosa! ¡Oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas divinas de nuestro Señor Jesucristo. Amén",
];

export const LETANIAS_FAMILIAS = [
  {
    items: [
      { v: "Jesús, Salvador del mundo", r: "Ten piedad de nosotros" },
      { v: "Jesús, Hijo de María y hermano nuestro", r: "Ten piedad de nosotros" },
      { v: "Jesús, tesoro y delicia de la Sagrada Familia", r: "Ten piedad de nosotros" },
    ],
  },
  {
    items: [
      { v: "Santa María, Reina de los cielos", r: "Ruega por nosotros" },
      { v: "Santa María, Madre de Jesús y nuestra dulce Madre", r: "Ruega por nosotros" },
      { v: "Santa María, ornamento y gozo de la Sagrada Familia", r: "Ruega por nosotros" },
      { v: "San José, Padre legal de Jesús", r: "Ruega por nosotros" },
      { v: "San José, casto esposo de María", r: "Ruega por nosotros" },
      { v: "San José, guía y amparo de la Sagrada Familia", r: "Ruega por nosotros" },
    ],
  },
  {
    titulo: "Sagrada Familia",
    items: [
      { v: "Sagrada Familia, bajo cuya protección nos hemos consagrado a Dios", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, que hemos tomado por modelo", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, predilecta del Padre celestial", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, conducida por el Espíritu Santo", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, santificada por la presencia del Hijo de Dios", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, terror del infierno", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, asilo de todas las virtudes", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, santuario de la Divina Trinidad", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, precioso Tabernáculo de Dios vivo", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, oscura e ignorada sobre la tierra", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, pobre y laboriosa", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, modelo de paciencia y resignación", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, gozosa en las tribulaciones", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, venerada de los pastores", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, honrada por los Magos", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, por Herodes perseguida", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, de los judíos despreciada", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, deseada de los Patriarcas", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, de los Ángeles respetada", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, modelo de todos los Santos", r: "Está siempre con nosotros" },
      { v: "Sagrada Familia, ornamento de la celestial Jerusalén", r: "Está siempre con nosotros" },
    ],
  },
  {
    titulo: "Intercesión",
    items: [
      { v: "Sednos propicia", r: "Te lo rogamos, óyenos" },
      { v: "Socórrenos en todos los peligros de alma y cuerpo", r: "Te lo rogamos, óyenos" },
      { v: "Se nuestro refugio contra los males que nos aquejan", r: "Te lo rogamos, óyenos" },
      { v: "Se nuestra fuerza en los combates y pruebas", r: "Te lo rogamos, óyenos" },
      { v: "Sednos fuerte muro contra los ataques del enemigo de nuestra salud", r: "Te lo rogamos, óyenos" },
      { v: "Sed nuestra esperanza en esta vida y nuestro consuelo en la hora de la muerte", r: "Te lo rogamos, óyenos" },
      { v: "Sed eficaz protectora de aquellos que os invocan con verdadera confianza", r: "Te lo rogamos, óyenos" },
      { v: "Sed medianera de los que mueren en el Señor y Abogada de los pecadores cerca del Soberano Jesús", r: "Te lo rogamos, óyenos" },
      { v: "Sed liberadora de las almas detenidas en el purgatorio y salud de los que esperan en Vos", r: "Te lo rogamos, óyenos" },
      { v: "Sed siempre sostén de los débiles y ayuda de los imperfectos", r: "Te lo rogamos, óyenos" },
      { v: "Sed siempre protectora de nuestra familia y de toda la sociedad", r: "Te lo rogamos, óyenos" },
      { v: "Sed siempre espejo de los cristianos, imán de los justos", r: "Te lo rogamos, óyenos" },
      { v: "Sed siempre consoladora de los afligidos y refugio de vuestros devotos", r: "Te lo rogamos, óyenos" },
      { v: "Sed siempre apoyo y defensa de los que se han consagrado a vuestro servicio", r: "Te lo rogamos, óyenos" },
    ],
  },
  {
    items: [
      { v: "Sagrada Familia, sed glorificada en todos los siglos", r: "Reina para siempre en todos los corazones" },
      { v: "Cordero de Dios que quitas el pecado del mundo", r: "Sálvanos, Señor" },
      { v: "Cordero de Dios que quitas el pecado del mundo", r: "Óyenos, Señor" },
      { v: "Cordero de Dios que quitas el pecado del mundo", r: "Ten piedad y misericordia de nosotros" },
    ],
  },
];

export const CONCLUSION_FAMILIAS =
  "Sagrada Familia de Nazaret; enséñanos el recogimiento, la interioridad; danos la disposición de escuchar las buenas inspiraciones y las palabras de los verdaderos maestros. Enséñanos la necesidad del trabajo de reparación, del estudio, de la vida interior personal, de la oración, que sólo Dios ve en los secreto; enséñanos lo que es la familia, su comunión de amor, su belleza simple y austera, su carácter sagrado e inviolable. Amén.\n\nAve maría purísima, sin pecado concebida: Por la señal de la Santa Cruz, de nuestros enemigos, libranos Señor Dios nuestro, en el nombre del Padre, del Hijo, del Espíritu Santo.";
