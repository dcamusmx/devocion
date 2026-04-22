export interface LetaniaItem {
  v: string;
  r: string;
}

export interface LetaniaSection {
  titulo?: string;
  items: LetaniaItem[];
}

export const LETANIAS_LAURETANAS: LetaniaSection[] = [
  {
    items: [
      { v: "Señor, ten piedad", r: "Señor, ten piedad" },
      { v: "Cristo, ten piedad", r: "Cristo, ten piedad" },
      { v: "Señor, ten piedad", r: "Señor, ten piedad" },
      { v: "Cristo, óyenos", r: "Cristo, óyenos" },
      { v: "Cristo, escúchanos", r: "Cristo, escúchanos" },
    ],
  },
  {
    items: [
      { v: "Dios, Padre celestial", r: "Ten piedad de nosotros" },
      { v: "Dios, Hijo, Redentor del mundo", r: "Ten piedad de nosotros" },
      { v: "Dios, Espíritu Santo", r: "Ten piedad de nosotros" },
      { v: "Santísima Trinidad, un solo Dios", r: "Ten piedad de nosotros" },
    ],
  },
  {
    titulo: "Invocaciones a María",
    items: [
      "Santa María",
      "Santa Madre de Dios",
      "Santa Virgen de las Vírgenes",
      "Madre de Cristo",
      "Madre de la Iglesia",
      "Madre de la Misericordia",
      "Madre de la divina gracia",
      "Madre de esperanza",
      "Madre purísima",
      "Madre castísima",
      "Madre siempre virgen",
      "Madre inmaculada",
      "Madre amable",
      "Madre admirable",
      "Madre del buen consejo",
      "Madre del Creador",
      "Madre del Salvador",
      "Virgen prudentísima",
      "Virgen digna de veneración",
      "Virgen digna de alabanza",
      "Virgen poderosa",
      "Virgen clemente",
      "Virgen fiel",
      "Espejo de justicia",
      "Trono de la sabiduría",
      "Causa de nuestra alegría",
      "Vaso espiritual",
      "Vaso digno de honor",
      "Vaso insigne de devoción",
      "Rosa mística",
      "Torre de David",
      "Torre de marfil",
      "Casa de oro",
      "Arca de la Alianza",
      "Puerta del Cielo",
      "Estrella de la mañana",
      "Salud de los enfermos",
      "Refugio de los pecadores",
      "Consuelo de los migrantes",
      "Consoladora de los afligidos",
      "Auxilio de los cristianos",
      "Reina de los Ángeles",
      "Reina de los Patriarcas",
      "Reina de los Profetas",
      "Reina de los Apóstoles",
      "Reina de los Mártires",
      "Reina de los Confesores",
      "Reina de las Vírgenes",
      "Reina de todos los Santos",
      "Reina concebida sin pecado original",
      "Reina asunta a los Cielos",
      "Reina del Santísimo Rosario",
      "Reina de la familia",
      "Reina de la paz",
    ].map((v) => ({ v, r: "Ruega por nosotros" })),
  },
  {
    items: [
      { v: "Cordero de Dios, que quitas el pecado del mundo", r: "Perdónanos, Señor" },
      { v: "Cordero de Dios, que quitas el pecado del mundo", r: "Escúchanos, Señor" },
      { v: "Cordero de Dios, que quitas el pecado del mundo", r: "Ten misericordia de nosotros" },
      {
        v: "Ruega por nosotros, Santa Madre de Dios",
        r: "Para que seamos dignos de alcanzar las promesas divinas de nuestro Señor Jesucristo. Amén.",
      },
    ],
  },
];

export const LETANIAS_SAN_JOSE: LetaniaSection[] = [
  {
    items: [
      { v: "Señor, ten piedad", r: "Señor, ten piedad" },
      { v: "Cristo, ten piedad", r: "Cristo, ten piedad" },
      { v: "Señor, ten piedad", r: "Señor, ten piedad" },
      { v: "Cristo, óyenos", r: "Cristo, óyenos" },
      { v: "Cristo, escúchanos", r: "Cristo, escúchanos" },
    ],
  },
  {
    items: [
      { v: "Dios, Padre celestial", r: "Ten piedad de nosotros" },
      { v: "Dios, Hijo, Redentor del mundo", r: "Ten piedad de nosotros" },
      { v: "Dios, Espíritu Santo", r: "Ten piedad de nosotros" },
      { v: "Santísima Trinidad, un solo Dios", r: "Ten piedad de nosotros" },
    ],
  },
  {
    titulo: "Invocaciones a San José",
    items: [
      "Santa María",
      "San José",
      "Ilustre descendiente de David",
      "Luz de los Patriarcas",
      "Esposo de la Madre de Dios",
      "Casto guardián de la Virgen",
      "Padre adoptivo del Hijo de Dios",
      "Ferviente defensor de Cristo",
      "Jefe de la Sagrada Familia",
      "José, justísimo",
      "José, castísimo",
      "José, prudentísimo",
      "José, valentísimo",
      "José, obedientísimo",
      "José, fidelísimo",
      "Espejo de paciencia",
      "Amante de la pobreza",
      "Modelo de los trabajadores",
      "Gloria de la vida doméstica",
      "Custodio de Vírgenes",
      "Pilar de las familias",
      "Consuelo de los afligidos",
      "Esperanza de los enfermos",
      "Patrón de los moribundos",
      "Terror de los demonios",
      "Protector de la Santa Iglesia",
    ].map((v) => ({ v, r: "Ruega por nosotros" })),
  },
  {
    items: [
      { v: "Cordero de Dios, que quitas el pecado del mundo", r: "Perdónanos, Señor" },
      { v: "Cordero de Dios, que quitas el pecado del mundo", r: "Escúchanos, Señor" },
      { v: "Cordero de Dios, que quitas el pecado del mundo", r: "Ten misericordia de nosotros" },
      { v: "Lo hizo señor de su casa", r: "Y administrador de todas sus posesiones" },
    ],
  },
];

export const ORACION_FINAL_SAN_JOSE =
  "Oh Dios, que en tu amorosa providencia elegiste a San José para ser el esposo de tu Santísima Madre, concédenos el favor de tenerlo como nuestro intercesor en el cielo y al que veneramos como nuestro protector en la Tierra. Tú que vives y reinas por los siglos de los siglos. Amén.";
