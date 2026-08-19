export interface MisterioFamilia {
  numero: number;
  titulo: string;
  descripcion: string;
  meditacion?: string;
  cita?: string;
  oracion?: string;
}

export type GrupoMisterioFamilia = "Gozosos" | "Dolorosos" | "Gloriosos" | "Luminosos";

const MISTERIOS_FAMILIA_POR_GRUPO: Record<GrupoMisterioFamilia, MisterioFamilia[]> = {
  Gozosos: [
    {
      numero: 1,
      titulo: "Jesús es concebido en una familia",
      descripcion: "El ángel Gabriel fue enviado a visitar a una joven, María, y le anuncia la venida del Salvador, mostrando que Dios entra en la historia a través de la familia.",
      meditacion:
        "Descubrimos que Dios mismo es familia: ‘El Dios Trinidad es comunión de amor, y la familia es su reflejo viviente’. La familia es un lugar de escucha, de ternura y de misión, porque en ella se vive la historia de la salvación.",
      cita: "«Alégrate, María, Dios está contigo; tendrás un hijo y le pondrás por nombre Jesús» (Lc 1, 28-32).",
      oracion:
        "Señor, haz de nuestras familias un hogar donde tu amor habite, donde la humildad, la fe y el servicio nos hagan escuchar tus designios con alegría.",
    },
    {
      numero: 2,
      titulo: "María visita a una familia",
      descripcion: "María visita a Isabel y comparte la alegría del Espíritu con otra familia, mostrando que la gracia se vive también en la cercanía.",
      meditacion:
        "Descubrimos que la alegría se comparte con las personas de nuestra familia: la verdadera fe se celebra con el otro y se convierte en un don que recibe y comparte. La familia debe ser siempre el lugar donde alguien, al ver el bien de otro, lo vive con alegría y da gloria a Dios.",
      cita: "«Eres bendita entre las mujeres y bendito es el fruto de tu vientre» (Lc 1, 39-45).",
      oracion:
        "Padre bueno, concédenos celebrar las alegrías ajenas, acompañar a los que sufren y sembrar en nuestras casas un ambiente de paz y fraternidad.",
    },
    {
      numero: 3,
      titulo: "Jesús nace en Belén",
      descripcion: "En Belén nace Jesús, y la familia se vuelve refugio de la esperanza y del amor gratuito.",
      meditacion:
        "Descubrimos que en la familia se ama a los hijos gratuitamente: cada hijo es un don único e irrepetible. El amor de los padres refleja el amor del Padre Dios, que acepta, acoge y protege sin condiciones.",
      cita: "«Y dio a luz a su hijo primogénito; lo envolvió en pañales y lo acostó en un pesebre» (Lc 2, 7).",
      oracion:
        "Señor, enséñanos a amar a nuestros hijos y a todos los miembros de la familia como un don único, con ternura, paciencia y gratuidad.",
    },
    {
      numero: 4,
      titulo: "María y José llevan a Jesús al templo",
      descripcion: "María y José presentan a Jesús en el templo, y la familia participa en la misión de la Iglesia y la sociedad.",
      meditacion:
        "Descubrimos que cada familia es parte de la sociedad y de la Iglesia: la familia es el primer lugar donde se despierta el sentido del mundo como hogar, y donde se aprende a vivir la vecindad, el cuidado y el amor a los demás.",
      cita: "«Los padres de Jesús lo llevaron a Jerusalén para presentarlo al Señor» (Lc 2, 22. 28. 36-38).",
      oracion:
        "Concédenos, Señor, que nuestra familia sea un hogar abierto a los demás, humilde y solidario, capaz de crecer en comunión y servicio.",
    },
    {
      numero: 5,
      titulo: "María y José encuentran a Jesús en el Templo",
      descripcion: "Jesús, a los doce años, revela la misión de su Padre, y la familia aprende a acompañar con respeto la libertad y la vocación.",
      meditacion:
        "Descubrimos que los padres cuidan a sus hijos y respetan su libertad: un buen amor no se impone, sino que acompaña, forma y deja crecer. En la familia aprende a madurar la libertad con paciencia y sabiduría.",
      cita: "«¿Por qué me buscabais? ¿No sabíais que yo debía estar en la Casa de mi Padre?» (Lc 2, 41-49).",
      oracion:
        "Señor, ayuda a nuestras familias a cuidar a sus hijos con amor y a acompañarlos con paciencia, respetando su libertad y su vocación.",
    },
  ],
  Dolorosos: [
    {
      numero: 1,
      titulo: "Jesús reza en el Monte de los Olivos",
      descripcion: "Jesús ora en Getsemaní y ofrece su voluntad al Padre, enseñando a la familia la fuerza de la oración y la confianza.",
      meditacion:
        "Jesús aprendió de María y José a orar y a confiar en su Padre. Los padres que quieren acompañar la fe de sus hijos saben que la experiencia espiritual no se impone, sino que se propone a la libertad, y la oración en familia es un gran camino de evangelización.",
      cita: "«Padre, si quieres, aparta de mí este cáliz; pero no se haga mi voluntad, sino la tuya» (Lc 22, 39-42).",
      oracion:
        "Señor, enséñanos a orar como Jesús, confiando en tu voluntad y poniendo en tus manos la vida de nuestras familias.",
    },
    {
      numero: 2,
      titulo: "Jesús es flagelado",
      descripcion: "Jesús sufre la flagelación por amor a nosotros, mostrándonos cómo se soportan las injusticias con humildad y fortaleza.",
      meditacion:
        "Jesús aprendió de María y José que por amor se pueden soportar las injusticias. En la vida familiar no puede reinar la lógica del dominio o de la competencia; el amor exige humildad, paciencia y respeto mutuo.",
      cita: "«Pilato, después de haberlo hecho azotar, lo entregó para que fuera crucificado» (Mt 27, 26).",
      oracion:
        "Padre, danos la fuerza para soportar las injusticias con paz, y la humildad para vivir en la familia como Cristo nos enseña.",
    },
    {
      numero: 3,
      titulo: "La coronación de espinas",
      descripcion: "Jesús es burlado y coronado de espinas, aprendiendo de María y José a sostener el dolor con paciencia.",
      meditacion:
        "Jesús aprendió de María y José a ser paciente y a soportar burlas por amor. El amor tiene compasión, acepta al otro como es y no se deja vencer por la ofensa ni por la incomprensión.",
      cita: "«Los soldados le pusieron una corona de espinas y le decían: ‘¡Salve, Rey de los judíos!’» (Mc 15, 16-18).",
      oracion:
        "Señor, ayúdanos a aceptar con paciencia el dolor, las burlas y las pruebas, y a vivir el amor con compasión y serenidad.",
    },
    {
      numero: 4,
      titulo: "Jesús camina con la cruz",
      descripcion: "Jesús lleva la cruz y descubre la fuerza del amor que se sostiene con la ayuda de los demás.",
      meditacion:
        "Jesús aprendió de María y José que para amar hay que ser fuerte, resiliente, y saber dejarse acompañar. El amor sobrelleva las contrariedades con esperanza, incluso cuando el entorno es hostil.",
      cita: "«Tomaron a Jesús, y él, cargando con su cruz, salió hacia el lugar llamado Calvario» (Jn 19, 17).",
      oracion:
        "Señor, ayúdanos a llevar nuestras cruces con paciencia y a aceptar la ayuda de los demás, sabiendo que en la familia el amor se fortalece en la unión.",
    },
    {
      numero: 5,
      titulo: "Jesús muere en la cruz",
      descripcion: "Jesús entrega su vida en la cruz y nos muestra el verdadero amor que da todo por los demás.",
      meditacion:
        "Jesús aprendió de María y José lo que es el verdadero amor. Si la familia logra concentrarse en Cristo, él unifica e ilumina toda la vida familiar, y los dolores se transforman en ofrenda de amor.",
      cita: "«Mujer, ahí tienes a tu hijo... ahí tienes a tu madre. Después dijo: ‘Padre, en tus manos pongo mi espíritu’» (Jn 19, 26-27; Lc 23, 44-46).",
      oracion:
        "Señor, en los días difíciles de la familia, acércanos a la cruz de Cristo para que el dolor se convierta en unión, entrega y amor.",
    },
  ],
  Gloriosos: [
    {
      numero: 1,
      titulo: "La Resurrección del Señor",
      descripcion: "Jesús resucita y transforma la tristeza en alegría, mostrando que el amor de Dios vence la muerte.",
      meditacion:
        "Que cada una de nuestras familias pueda ser Galilea: un lugar donde el amor, la verdad y la paz se abren paso. Si el amor anima la vida familiar, Jesús reina allí con su gozo y su paz.",
      cita: "«No temáis; ya sé que buscáis a Jesús, el crucificado. No está aquí. ¡Ha resucitado!» (Mt 28, 1. 5-7).",
      oracion:
        "Señor, haz de nuestras familias lugares de alegría, esperanza y paz, donde la resurrección de Cristo se viva en cada día.",
    },
    {
      numero: 2,
      titulo: "Ascensión de Jesús a los cielos",
      descripcion: "Jesús asciende al cielo y deja a la Iglesia y a la familia la misión de anunciar el Reino.",
      meditacion:
        "Cada familia está invitada a llevar su mensaje: la fe debe ser anunciada, sembrada y vivida con alegría. La obra del Reino es un trabajo de Dios que se realiza por la cooperación y la fe de la familia.",
      cita: "«Vayan y enseñen a todos los pueblos... Yo estaré siempre con ustedes hasta el fin del mundo» (Mt 28, 18-20).",
      oracion:
        "Señor, concédenos anunciar con alegría el Evangelio en nuestros hogares y en quienes nos rodean.",
    },
    {
      numero: 3,
      titulo: "La venida del Espíritu Santo",
      descripcion: "El Espíritu Santo habita en la familia y la fortalece para vivir la comunión y la misión.",
      meditacion:
        "Que en cada una de nuestras familias habite el Espíritu Santo. Bajo su impulso, la familia no se cierra en sí misma, sino que sale a acoger, cuidar y servir a otros con la gracia del Señor.",
      cita: "«Se les aparecieron lenguas como de fuego... y quedaron todos llenos del Espíritu Santo» (Hch 2, 1-4).",
      oracion:
        "Espíritu Santo, llena nuestros hogares de amor, de paz y de sabiduría; guía nuestras familias en la verdad y en la misión.",
    },
    {
      numero: 4,
      titulo: "Asunción de Santa María al cielo",
      descripcion: "María es llevada al cielo en cuerpo y alma y guarda en su corazón a todas las familias.",
      meditacion:
        "María tiene en su corazón a cada una de nuestras familias. En el tesoro de su corazón están todos los acontecimientos de la vida familiar, y por eso puede ayudarnos a interpretarlos con la mirada de Dios.",
      cita: "«La Inmaculada siempre Virgen María, concluida su vida terrena, fue ascendida en cuerpo y espíritu a la gloria celestial» (Pío XII).",
      oracion:
        "Santa María, madre nuestra, guarda y acompaña a nuestras familias, y enséñanos a vivir con serenidad, fe y esperanza en medio de los desafíos.",
    },
    {
      numero: 5,
      titulo: "La coronación de la Virgen María",
      descripcion: "La Virgen María es coronada Reina del cielo y de la tierra, y la familia se convierte en iglesia doméstica.",
      meditacion:
        "Podemos coronar a Nuestra Madre, Reina de cada familia. El hogar cristiano se convierte en lugar donde habita Dios, se vive la oración, la Palabra y la comunión, y la familia refleja la presencia del Señor.",
      cita: "«Una gran señal apareció en el cielo: una mujer vestida del sol... y una corona de doce estrellas sobre su cabeza» (Ap 12, 1).",
      oracion:
        "Reina de la familia, guía nuestras casas y haz que cada hogar sea un lugar de oración, de amor y de servicio a tu Hijo.",
    },
  ],
  Luminosos: [
    {
      numero: 1,
      titulo: "Jesús es bautizado",
      descripcion: "Jesús es bautizado en el Jordán y entra en la historia de la salvación como Hijo amado del Padre.",
      meditacion:
        "Aprendemos que mamá y papá pidieron nuestro Bautismo y somos hijos amados de Dios. Los padres participan del proyecto de Dios soñando a su hijo; dentro de ese sueño aparece el bautismo como don de gracia y pertenencia.",
      cita: "«Éste es mi Hijo, el amado, en quien me he complacido» (Mc 1, 9-11).",
      oracion:
        "Padre, gracias por el Bautismo que nos hace hijos tuyos; haz que nuestras familias vivan en la gracia y en el amor de tu Hijo.",
    },
    {
      numero: 2,
      titulo: "Primer milagro de Jesús, en las Bodas de Caná",
      descripcion: "Jesús cumple el primer milagro y muestra que el amor de Dios transforma la necesidad en alegría.",
      meditacion:
        "Aprendemos el valor del matrimonio: el amor entre esposos, el cuidado mutuo y la alegría de la vida son una manifestación de la belleza de la familia. En la familia se vive la unión, la ternura, la paternidad y la maternidad.",
      cita: "«No tienen vino... Hagan lo que él les diga» (Jn 2, 1-5. 11).",
      oracion:
        "Señor, bendice nuestros hogares, fortalece el amor conyugal y haz que la familia sea siempre un lugar de gracia y alegría.",
    },
    {
      numero: 3,
      titulo: "El anuncio del Reino y el llamado a la conversión",
      descripcion: "Jesús llama a la conversión y confirma que las familias también son llamadas a anunciar el amor de Dios.",
      meditacion:
        "Aprendemos que las familias también anunciamos que Dios nos ama. Con el testimonio y con la palabra, las familias hablan de Jesús, transmiten la fe y muestran la belleza del Evangelio en la sociedad.",
      cita: "«El tiempo ha llegado y el reino de Dios ya está cerca. Conviértanse y crean en el Evangelio» (Mc 1, 14-15).",
      oracion:
        "Señor, conviértanos y acércanos a tu Reino, para que nuestras familias sean testigos del amor y de la verdad de tu Evangelio.",
    },
    {
      numero: 4,
      titulo: "La transfiguración de Jesús",
      descripcion: "Jesús se transfigura y nos enseña que el amor entre padres e hijos debe ser vivido con claridad y cercanía.",
      meditacion:
        "Aprendemos que es necesario que entre padres e hijos expresemos nuestro amor. Las tecnologías y las distracciones no deben reemplazar el diálogo personal, el contacto y la voz del otro en la familia.",
      cita: "«Éste es mi Hijo, el amado; escúchenlo» (Lc 9, 29. 35).",
      oracion:
        "Señor, fortalece el vínculo entre padres e hijos, y haz que el amor en la familia sea claro, cercano y fiel al Evangelio.",
    },
    {
      numero: 5,
      titulo: "La institución de la Eucaristía",
      descripcion: "Jesús instituye la Eucaristía y muestra que la familia está llamada a compartir la oración y la comunión con Cristo.",
      meditacion:
        "Aprendemos que es hermoso compartir la Eucaristía en familia. El hogar puede ser también un lugar donde Cristo se hace presente en la mesa, en la lectura de la Palabra y en la oración común.",
      cita: "«Tomen, esto es mi cuerpo... beban todos de ella, porque es mi sangre» (Mt 26, 26-28).",
      oracion:
        "Señor, haz de nuestras familias un hogar donde la Eucaristía, la oración y la Palabra de Dios creen comunión, santidad y amor.",
    },
  ],
};

export function getMisteriosFamiliasDelDia(d: Date = new Date()): MisterioFamilia[] {
  const day = d.getDay();
  if (day === 1 || day === 6) return MISTERIOS_FAMILIA_POR_GRUPO.Gozosos;
  if (day === 2 || day === 5) return MISTERIOS_FAMILIA_POR_GRUPO.Dolorosos;
  if (day === 3 || day === 0) return MISTERIOS_FAMILIA_POR_GRUPO.Gloriosos;
  return MISTERIOS_FAMILIA_POR_GRUPO.Luminosos;
}

export const MISTERIOS_FAMILIAS = {
  Gozosos: MISTERIOS_FAMILIA_POR_GRUPO.Gozosos,
  Dolorosos: MISTERIOS_FAMILIA_POR_GRUPO.Dolorosos,
  Gloriosos: MISTERIOS_FAMILIA_POR_GRUPO.Gloriosos,
  Luminosos: MISTERIOS_FAMILIA_POR_GRUPO.Luminosos,
};

export function getGrupoFamiliaDelDia(d: Date = new Date()): GrupoMisterioFamilia {
  const day = d.getDay();
  if (day === 1 || day === 6) return "Gozosos";
  if (day === 2 || day === 5) return "Dolorosos";
  if (day === 3 || day === 0) return "Gloriosos";
  return "Luminosos";
}

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
