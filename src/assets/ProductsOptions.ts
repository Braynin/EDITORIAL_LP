/*Class*/
export class Products {
  id: string;
  nombre: string;
  precio: string;
  precioOferta: string;
  imagen: string[];

  section: string;
  sipnosis: string;
  isbn: string;
  autor: string;
  editorial: string;
  año: string;
  paginas: string;
  presentacion: string;
  peso: string;
  alto: string;
  ancho: string;
  private _supplier: string;
  nombreCard: string;
  indice: string;
  constructor(
    id: string,
    nombre: string,
    precio: string,
    precioOferta: string,
    imagen: string[],

    section: string,
    sipnosis: string,
    isbn: string,
    autor: string,
    editorial: string,
    año: string,
    paginas: string,
    presentacion: string,
    peso: string,
    alto: string,
    ancho: string,
    nombreCard: string,
    indice: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.precioOferta = precioOferta;
    this.imagen = imagen;

    this.section = section;
    this.sipnosis = sipnosis;
    this.isbn = isbn;
    this.autor = autor;
    this.editorial = editorial;
    this.año = año;
    this.paginas = paginas;
    this.presentacion = presentacion;
    this.peso = peso;
    this.alto = alto;
    this.ancho = ancho;
    this._supplier = ""; // Inicialización por defecto
    this.nombreCard = nombreCard;
    this.indice = indice;
  }
  get supplier(): string {
    return this._supplier;
  }
  set supplier(newName: string) {
    this._supplier = newName;
  }
}

/*Objects*/

const product1 = new Products(
  "1",
  "Código Penal",
  "75",
  "",
  [
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-CENITAL-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-FRONT-DERECHA-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-BACK-IZQUIERDA-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-FRONT-IZQUIERDA-DURA.png",
  ],

  "Penal",
  "Este libro ofrece una recopilación exhaustiva y actualizada del Código Penal, integrando tanto las normas vigentes como la jurisprudencia relevante en el ámbito penal. A diferencia de los códigos tradicionales, que solo incluyen textos legislativos, este compendio incluye decisiones jurisprudenciales nacionales e internacionales que complementan y concretan la ley. Se seleccionan solo aquellos pronunciamientos que llenan vacíos legales, interpretan figuras jurídicas o crean doctrina, con el fin de ofrecer una herramienta útil y funcional. Además, se incorporan enlaces y códigos QR para facilitar la consulta y mantener al lector actualizado con los últimos fallos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Dura",
  "1.4kg",
  "21cm",
  "16cm",
  "Código Penal",
  "public/INDICES/INDICE-Código Penal índice.pdf"
);
const product2 = new Products(
  "2",
  "Código Penal",
  "50",
  "",
  [
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-CENITAL-RUSTICA.png",
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-FRONT-IZQUIERDA-RUSTICA.png",
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-FRONT-DERECHA-RUSTICA.png",
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-BACK-IZQUIERDA-RUSTICA.png",
  ],

  "Penal",
  "Este libro ofrece una recopilación exhaustiva y actualizada del Código Penal, integrando tanto las normas vigentes como la jurisprudencia relevante en el ámbito penal. A diferencia de los códigos tradicionales, que solo incluyen textos legislativos, este compendio incluye decisiones jurisprudenciales nacionales e internacionales que complementan y concretan la ley. Se seleccionan solo aquellos pronunciamientos que llenan vacíos legales, interpretan figuras jurídicas o crean doctrina, con el fin de ofrecer una herramienta útil y funcional. Además, se incorporan enlaces y códigos QR para facilitar la consulta y mantener al lector actualizado con los últimos fallos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Rústica",
  "1.3kg",
  "21cm",
  "16cm",
  "Código Penal",
  "public/INDICES/INDICE-Código Penal índice.pdf"
);
const product3 = new Products(
  "3",
  "Código Civil",
  "75",
  "",
  [
    "public/CÓDIGO CIVIL/TAPA DURA/CODIGO-CIVIL-CENITAL-DURA.png",
    "public/CÓDIGO CIVIL/TAPA DURA/CODIGO-CIVIL-FRONT-DERECHA-DURA.png",
    "public/CÓDIGO CIVIL/TAPA DURA/CODIGO-CIVIL-FRONT-DURA.png",

    "public/CÓDIGO CIVIL/TAPA DURA/CODIGO-CIVIL-BACK-IZQUIERDA-DURA.png",
  ],

  "Civil",
  "El libro Código Civil: Jurisprudencia relevante y actual celebra los 40 años del Código Civil peruano de 1984 con una propuesta innovadora. Recopila criterios jurisprudenciales clave, resumidos en titulares concisos y acompañados de enlaces cortos que permiten acceder rápidamente al texto completo de las resoluciones. Este enfoque facilita el acceso para litigantes, jueces y estudiantes, promoviendo debates enriquecedores en el ámbito académico y profesional. Además, integra jurisprudencia nacional e internacional, destacando casos relevantes de Italia, Francia, España, Colombia y Argentina. Con un diseño práctico y detallado, este Código es una herramienta útil para entender y aplicar el derecho civil, invitando a su constante mejora.",
  "978-61249574-7-4",
  "LP",
  "Editorial LP",
  "2024",
  "1007",
  "Tapa Dura",
  "1.4kg",
  "21cm",
  "16cm",
  "Código Civil",
  "public/INDICES/INDICE CODIGO CIVIL ACTUALIZADO.pdf"
);
const product4 = new Products(
  "4",
  "Código Civil ",
  "50",
  "",
  [
    "public/CÓDIGO CIVIL/TAPA RUSTICA/CODIGO-CIVIL-CENITAL-RUSTICA.png",
    "public/CÓDIGO CIVIL/TAPA RUSTICA/CODIGO-CIVIL-FRONT-DERECHA-RUSTICA.png",
    "public/CÓDIGO CIVIL/TAPA RUSTICA/CODIGO-CIVIL-BACK-DERECHA-RUSTICA.png",

    "public/CÓDIGO CIVIL/TAPA RUSTICA/CODIGO-CIVIL-FRONT-IZQUIERDA-RUSTICA.png",
  ],

  "Civil",
  "El libro Código Civil: Jurisprudencia relevante y actual celebra los 40 años del Código Civil peruano de 1984 con una propuesta innovadora. Recopila criterios jurisprudenciales clave, resumidos en titulares concisos y acompañados de enlaces cortos que permiten acceder rápidamente al texto completo de las resoluciones. Este enfoque facilita el acceso para litigantes, jueces y estudiantes, promoviendo debates enriquecedores en el ámbito académico y profesional. Además, integra jurisprudencia nacional e internacional, destacando casos relevantes de Italia, Francia, España, Colombia y Argentina. Con un diseño práctico y detallado, este Código es una herramienta útil para entender y aplicar el derecho civil, invitando a su constante mejora.",
  "978-61249574-7-4",
  "LP",
  "Editorial LP",
  "2024",
  "1007",
  "Tapa Rústica",
  "1.4kg",
  "21cm",
  "16cm",
  "Código Civil",
  "public/INDICES/INDICE CODIGO CIVIL ACTUALIZADO.pdf"
);
const product5 = new Products(
  "5",
  "Detención policial en flagrancia y proceso inmediato",
  "130",
  "",
  [
    "public/DETENCIÓN POLICIAL EN FLAGRANCIA Y PROCESO INMEDIATO/DETENCIÓN-POLICIAL-EN-FLAGRANCIA-Y-PROCESO-INMEDIATO.png",
    "public/DETENCIÓN POLICIAL EN FLAGRANCIA Y PROCESO INMEDIATO/DETENCIÓN-POLICIAL-EN-FLAGRANCIA-Y-PROCESO-INMEDIATO-FRONT-DERECHA.png",
    "public/DETENCIÓN POLICIAL EN FLAGRANCIA Y PROCESO INMEDIATO/DETENCIÓN-POLICIAL-EN-FLAGRANCIA-Y-PROCESO-INMEDIATO-BACK-IZQUIERDA.png",

    "public/DETENCIÓN POLICIAL EN FLAGRANCIA Y PROCESO INMEDIATO/DETENCIÓN-POLICIAL-EN-FLAGRANCIA-Y-PROCESO-INMEDIATO-FRONT-IZQUIERDA.png",
  ],

  "Penal",
  "Esta obra aborda de manera integral la detención policial en flagrancia, estructurada en 10 capítulos con 60 temas específicos y más de 600 casos jurisprudenciales. Diseñada para ser autosuficiente, analiza detalladamente las instituciones jurídicas vinculadas a la detención policial, un tema históricamente tratado de forma superficial en la doctrina nacional. Examina problemáticas como los supuestos de flagrancia extendida, la validez de pruebas derivadas de medidas restrictivas y el control judicial insuficiente. Es una herramienta valiosa para actores del sistema de justicia penal, especialmente en el contexto de la implementación de unidades de flagrancia y el equilibrio entre eficacia y derechos fundamentales.",
  "978-61249574-6-8",
  "Giammpol Taboada Pilco",
  "Editorial LP",
  "2024",
  "813",
  "Tapa Dura",
  "1.6kg",
  "25cm",
  "17cm",
  "Detención policial",
  "public/INDICES/INDICE DETENCIÓN POLICIAL EN FLAGRANCIA Y PROCESO INMEDIATO.pdf"
);
const product6 = new Products(
  "6",
  "Mini Código penal",
  "35",
  "",
  [
    "public/MINICODIGO PENAL/CODIGO-PENAL-MINI_CENITAL.png",
    "public/MINICODIGO PENAL/CODIGO-PENAL-MINI-FRONT-DERECHA.png",
    "public/MINICODIGO PENAL/CODIGO-PENAL-MINI-BACK-IZQUIERDA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "591",
  "Tapa Dura",
  "0.8kg",
  "18cm",
  "11cm",
  "Mini Código penal",
  "public/INDICES/INDICE-MINI CODIGO.pdf"
);
const product7 = new Products(
  "7",
  "El Defensor 2",
  "60",
  "",
  [
    "public/EL DEFENSOR 2/EL-DEFENSOR-2_CENITAL.png",
    "public/EL DEFENSOR 2/EL-DEFENSOR-2_FRONT_DERECHA.png",
    "public/EL DEFENSOR 2/EL-DEFENSOR-2_FRONT_IZQUIERDA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249720-2-7",
  "Jefferson Moreno Nieves",
  "Editorial LP",
  "2024",
  "238",
  "Tapa Rustica",
  "1kg",
  "23cm",
  "16cm",
  "El Defensor 2",
  "public/INDICES/INDICE-El defensor 2.pdf"
);
const product8 = new Products(
  "8",
  "Litigación Oral Civil",
  "100",
  "",
  [
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_CENITAL.png",
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_FRONT-IZQUIERDA.png",
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_FRONT-DERECHA.png",
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_BACK.png",
  ],

  "Civil",
  "La comunicación es esencial para la humanidad, y en los procesos judiciales, su forma (oral o escrita) impacta directamente la justicia. En el Perú, la oralidad en el proceso civil ha demostrado ser más eficiente, permitiendo al juez interactuar directamente con las partes, promover transparencia y agilizar decisiones. Este libro, Litigación oral civil del juez Carlos E. Polanco Gutiérrez, analiza la evolución histórica del proceso civil peruano, las ventajas de la oralidad y el papel crucial del juez. Es una obra indispensable para abogados, jueces y estudiantes, que reflexiona sobre la implementación y beneficios de este enfoque moderno y dinámico.",
  "978-61249574-5-1",
  "Carlos E. Polanco Gutiérrez",
  "Editorial LP",
  "2024",
  "383",
  "Tapa Rustica",
  "0.50kg",
  "24cm",
  "16cm",
  "Litigación Oral Civil",
  "public/INDICES/INDICE LITIGACIÓN ORAL CIVIL.pdf"
);

const product10 = new Products(
  "10",
  "Culpabilidad y Neurociencias",
  "80",
  "",
  [
    "public/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES_CENITAL.png",
    "public/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES_FRONT-DERECHA.png",
    "public/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES_BACK-IZQUIERDA.png",
    "public/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES/CULPABILIDAD-Y-NEUROCIENCIAS--CIENCIAS-PENALES_FRONT-IZQUIERDA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-612-49490-2-9",
  "Frank Alamanza Altamirano",
  "San Bernardo Libros Jurídicos",
  "2024",
  "325",
  "Tapa Rustica",
  "0.60kg",
  "24cm",
  "17cm",
  "Culpabilidad y Neurociencias",
  ""
);
const product11 = new Products(
  "11",
  "Derecho del Consumidor",
  "60",
  "",
  [
    "public/DERECHO DEL CONSUMIDOR/DERECHO-DEL-CONSUMIDOR_CENITAL.png",
    "public/DERECHO DEL CONSUMIDOR/DERECHO-DEL-CONSUMIDOR_FRONT-DERECHA.png",
    "public/DERECHO DEL CONSUMIDOR/DERECHO-DEL-CONSUMIDOR_BACK-IZQUIERDA.png",

    "public/DERECHO DEL CONSUMIDOR/DERECHO-DEL-CONSUMIDOR_FRONT-IZQUIERDA.png",
  ],

  "Administrativo",
  "La obra de Julio Baltazar Durand Carrión y Pavel Flores Flores ofrece un análisis profundo y didáctico del derecho del consumidor peruano. Aborda temas esenciales como los principios, derechos de los consumidores, contratos de consumo, cláusulas abusivas, y la responsabilidad objetiva en accidentes de consumo. Además, examina los mecanismos de protección, tanto judiciales como alternativos, y reflexiona sobre la relación de este derecho con otras ramas jurídicas. Con claridad y enfoque pedagógico, el libro contribuye al estudio del derecho del consumidor en Latinoamérica, destacando su impacto en el derecho privado y público, y proponiendo nuevas perspectivas para su comprensión y desarrollo.",
  "978-61249574-0-6",
  "Julio Baltazar Durand Carrión, Pavel FLores Flores",
  "Editorial LP",
  "2024",
  "285",
  "Tapa Rustica",
  "0.40kg",
  "23cm",
  "15cm",
  "Derecho del Consumidor",
  "public/INDICES/INDICE DERECHO DEL CONSUMIDOR.pdf"
);
const product12 = new Products(
  "12",
  "PAD",
  "120",
  "",
  [
    "public/PAD/PAD-PROCEDIMIENTO-ADMINISTRATIVO-DISCIPLINARIO-EN-LA-LEY-DEL-SERVICIO-CIVIL_CENITAL.png",
    "public/PAD/PAD-PROCEDIMIENTO-ADMINISTRATIVO-DISCIPLINARIO-EN-LA-LEY-DEL-SERVICIO-CIVIL_FRONT-DERECHA.png",
    "public/PAD/PAD-PROCEDIMIENTO-ADMINISTRATIVO-DISCIPLINARIO-EN-LA-LEY-DEL-SERVICIO-CIVIL_BACK-IZQUIERDA.png",

    "public/PAD/PAD-PROCEDIMIENTO-ADMINISTRATIVO-DISCIPLINARIO-EN-LA-LEY-DEL-SERVICIO-CIVIL_FRONT-IZQUIERDA.png",
  ],

  "Administrativo",
  "Este libro es una guía esencial sobre el Procedimiento Administrativo Disciplinario (PAD) en la administración pública peruana. Explica de forma clara y práctica los conceptos generales, principios rectores, y las instituciones clave establecidas por la Ley del Servicio Civil y su reglamento. Además, aborda los precedentes obligatorios, opiniones especializadas y estrategias para la gestión y defensa en procesos disciplinarios. Con diagramas y cuadros ilustrativos, ofrece una herramienta indispensable para servidores públicos, abogados y gestores interesados en comprender y aplicar eficientemente este modelo disciplinario. Una obra diseñada para cerrar brechas de conocimiento y fortalecer la profesionalización en el sector público.",
  "978-61248993-0-0",
  "Gustavo A. Rico Iberico",
  "Escuela de Derecho LP",
  "2022",
  "285",
  "Tapa Rustica",
  "0.40kg",
  "23cm",
  "15cm",
  "PAD",
  "public/INDICES/INDICE-PAD.pdf"
);
const product13 = new Products(
  "13",
  "La Constitución en las redes",
  "120",
  "",
  [
    "public/LA CONSTITUCIÓN EN LAS REDES/LA-CONSTITUCIÓN-EN-LAS-REDES_CENITAL.png",
    "public/LA CONSTITUCIÓN EN LAS REDES/LA-CONSTITUCIÓN-EN-LAS-REDES_FRONT-DERECHA.png",
    "public/LA CONSTITUCIÓN EN LAS REDES/LA-CONSTITUCIÓN-EN-LAS-REDES_BACK-IZQUIERDA.png",

    "public/LA CONSTITUCIÓN EN LAS REDES/LA-CONSTITUCIÓN-EN-LAS-REDES_FRONT-IZQUIERDA.png",
  ],

  "Constitucional",
  "La Constitución en las redes es el último libro de Omar Sar Suárez, basado en su exitoso programa #ElConstitucional, transmitido desde 2020 en redes sociales. A través de este espacio, Sar Suárez interactúa con estudiantes y profesionales del Derecho, explicando de manera accesible temas constitucionales y procesales de actualidad. El libro recopila los guiones de dichos programas, presentando una investigación rigurosa y selección de jurisprudencia del Tribunal Constitucional. A lo largo de sus páginas, aborda diversos temas del Código Procesal Constitucional, ofreciendo una guía bibliográfica y cuadros explicativos para facilitar el estudio y comprensión de los conceptos.",
  "978-61248993-3-1",
  "Omar Sar",
  "Escuela de Derecho LP",
  "2023",
  "542",
  "Tapa Rustica",
  "0.80kg",
  "23cm",
  "15cm",
  "La Constitución en las redes",
  "public/INDICES/INDICE-CONSTITUCION EN LAS REDES.pdf"
);
const product14 = new Products(
  "14",
  "Coleccion Litigación Oral en audiencias previas",
  "150",
  "",
  [
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/CAJA NARANJA/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_FRONT-DERECHA.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/CAJA NARANJA/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_FRONT.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/CAJA NARANJA/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_BACK-IZQUIERDA.png",

    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/CAJA NARANJA/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_FRONT-IZQUIERDA.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO AMARILLO/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_AMARILLO-CENITAL.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO NARANJA/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_NARANJA-CENITAL.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO ROJO/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_ROJO-CENITAL.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO VERDE/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_VERDE_CENITAL.png",
  ],

  "Penal",
  "Esta colección reúne cuatro obras fundamentales que abordan con profundidad y rigor aspectos esenciales del derecho procesal penal, combinando teoría, crítica y práctica. Los textos exploran temas como el derecho al plazo razonable, la fase de investigación preparatoria, la audiencia de inadmisión de diligencias y la tutela de derechos, ofreciendo análisis jurisprudenciales, dogmáticos y metodológicos. Cada libro destaca por su enfoque accesible y su relevancia tanto para estudiantes como para profesionales del derecho, brindando herramientas indispensables para mejorar la litigación penal y fortalecer el respeto por los derechos fundamentales. Una contribución invaluable al conocimiento y práctica del derecho penal contemporáneo.",
  "978-61248993-7-9",
  "Jefferson Moreno Nieves",
  "Escuela de Derecho LP",
  "2023",
  "231",
  "Con caja",
  "1kg",
  "20cm",
  "15cm",
  "Litigación Oral en audiencias previas",
  "public/INDICES/ÍNDICE AUDIENCIA DE CONTROL DE PLAZO.zip"
);
const product15 = new Products(
  "15",
  "Coleccion Litigación Oral en audiencias previas",
  "140",
  "",
  [
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/CONJUNTO DE LIBROS/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_CONJUNTO-DE-LIBROS.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO AMARILLO/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_AMARILLO-CENITAL.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO NARANJA/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_NARANJA-CENITAL.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO ROJO/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_ROJO-CENITAL.png",
    "public/LITIGACIÓN ORAL DE AUDIENCIAS PREVIAS/LIBRO VERDE/LITIGACIÓN-ORAL-DE-AUDIENCIAS-PREVIAS-DE-JEFFERSON-MORENO_VERDE_CENITAL.png",
  ],

  "Penal",
  "Esta colección reúne cuatro obras fundamentales que abordan con profundidad y rigor aspectos esenciales del derecho procesal penal, combinando teoría, crítica y práctica. Los textos exploran temas como el derecho al plazo razonable, la fase de investigación preparatoria, la audiencia de inadmisión de diligencias y la tutela de derechos, ofreciendo análisis jurisprudenciales, dogmáticos y metodológicos. Cada libro destaca por su enfoque accesible y su relevancia tanto para estudiantes como para profesionales del derecho, brindando herramientas indispensables para mejorar la litigación penal y fortalecer el respeto por los derechos fundamentales. Una contribución invaluable al conocimiento y práctica del derecho penal contemporáneo.",
  "978-61248993-7-9",
  "Jefferson Moreno Nieves",
  "Escuela de Derecho LP",
  "2023",
  "231",
  "Sin caja",
  "1kg",
  "20cm",
  "15cm",
  "Litigación Oral en audiencias previas",
  "public/INDICES/ÍNDICE AUDIENCIA DE CONTROL DE PLAZO.zip"
);
const product16 = new Products(
  "16",
  "El Nuevo Código Procesal Constitucional",
  "100",
  "",
  [
    "public/EL NUEVO CÓDIGO PROCESAL CONSTITUCIONAL/EL-NUEVO-CÓDIGO-PROCESAL-CONSTITUCIONAL_CENITAL.png",
    "public/EL NUEVO CÓDIGO PROCESAL CONSTITUCIONAL/EL-NUEVO-CÓDIGO-PROCESAL-CONSTITUCIONAL_FRONT DERECHA.png",
    "public/EL NUEVO CÓDIGO PROCESAL CONSTITUCIONAL/EL-NUEVO-CÓDIGO-PROCESAL-CONSTITUCIONAL_FRONT IZQUIERDA.png",
  ],

  "Constitucional",
  "Esta obra ofrece un análisis profundo del Nuevo Código Procesal Constitucional de 2021, explorando las reformas normativas que fortalecen la garantía de los derechos fundamentales y la supremacía de la Constitución. Basada en la experiencia directa del autor como integrante del grupo de trabajo legislativo encargado de estas modificaciones, la publicación detalla aspectos innovadores como el control de convencionalidad, la defensa pública constitucional y el uso de lenguas originarias. Con comentarios a cada artículo, gráficos explicativos y debates doctrinales, esta contribución se posiciona como una referencia esencial para jueces, académicos, abogados y estudiantes del derecho constitucional.",
  "978-61249315-5-0",
  "Luis Andrés Roel Alva",
  "Escuela de Derecho LP",
  "2023",
  "446",
  "Tapa Rustica",
  "0.6kg",
  "24cm",
  "16cm",
  "Cod. Procesal Constitucional",
  "public/INDICES/INDICE-Nuevo código Procesal constitucional _Roel Alva_índice.pdf"
);
const product17 = new Products(
  "17",
  "Curso de Redaccion Administrativa",
  "100",
  "",
  [
    "public/CURSO DE REDACCIÓN ADMINISTRATIVA/CURSO-DE-REDACCIÓN-ADMINISTRATIVA_CENITAL.png",
    "public/CURSO DE REDACCIÓN ADMINISTRATIVA/CURSO-DE-REDACCIÓN-ADMINISTRATIVA_FRONT-DERECHA.png",
    "public/CURSO DE REDACCIÓN ADMINISTRATIVA/CURSO-DE-REDACCIÓN-ADMINISTRATIVA_BACK-IZQUIERDA.png",

    "public/CURSO DE REDACCIÓN ADMINISTRATIVA/CURSO-DE-REDACCIÓN-ADMINISTRATIVA_FRONT-IZQUIERDA.png",
  ],

  "Administrativo",
  "Este libro destaca la importancia de la redacción administrativa en el derecho administrativo, abordando la práctica forense administrativa esencial para el ordenamiento jurídico peruano. Dividido en 11 capítulos, analiza desde escritos de petición administrativa hasta modelos de demandas contra entidades públicas. Incluye guías para redactar actos administrativos individuales y generales, contratos laborales, demandas judiciales, y documentos esenciales en procedimientos sancionadores y disciplinarios. Diseñado para abogados, estudiantes, servidores públicos y ciudadanos, ofrece herramientas prácticas para elaborar documentos legales claros y precisos. Es un recurso accesible para quienes buscan entender o aplicar la redacción legal en diferentes contextos.",
  "978-61248993-2-4",
  "José María Pacori Cari",
  "Escuela de Derecho LP",
  "2023",
  "479",
  "Tapa Rustica",
  "0.65kg",
  "24cm",
  "15cm",
  "Redacción Administrativa",
  "public/INDICES/INDICE CURSO REDACCIÓN ADMINISTRATIVO.pdf"
);
const product18 = new Products(
  "18",
  "Derecho penal: parte general",
  "120",
  "80",
  [
    "public/DERECHO PENAL PARTE GENERAL/DERECHO-PENAL-PARTE-GENERAL_CENITAL.png",
    "public/DERECHO PENAL PARTE GENERAL/DERECHO-PENAL-PARTE-GENERAL_FRONT-DERECHA.png",
    "public/DERECHO PENAL PARTE GENERAL/DERECHO-PENAL-PARTE-GENERAL_BACK-IZQUIERDA.png",

    "public/DERECHO PENAL PARTE GENERAL/DERECHO-PENAL-PARTE-GENERAL_FRONT-IZQUIERDA.png",
    "public/OFERTAS/OFFER_DPPG_DETAILS.jpeg",
  ],

  "Penal",
  "El libro analiza la evolución del Código Penal de 1991, afectado por reformas excepcionales que desdibujaron su carácter garantista. Examina las doctrinas de Roxin y Jakobs, destacando sus enfoques sobre criminalidad organizada y derecho penal económico, así como su impacto en la dogmática penal contemporánea. Aborda problemas como la instrumentalización del derecho penal y plantea una exposición coherente de la parte general, basada en principios constitucionales como legalidad, claridad normativa y responsabilidad subjetiva. Con un enfoque crítico, busca ofrecer herramientas prácticas y teóricas para comprender el derecho penal vigente y reflexionar sobre su desarrollo en contextos locales y comparados.",
  "978-61249315-0-5",
  "Dino Carlos Caro Coria, Luis Miguel Reyna Alfaro",
  "Escuela de Derecho LP",
  "2023",
  "718",
  "Tapa Dura",
  "1.15kg",
  "24cm",
  "17cm",
  "Derecho penal: parte general",
  "public/INDICES/INDICE DERECHO PENAL PARTE GENERAL.pdf"
);
const product19 = new Products(
  "19",
  "Mi primer juicio de familia. ¿Qué le digo al juez?",
  "100",
  "",
  [
    "public/MI PRIMER JUICIO DE FAMILIA/MI-PRIMER-JUICIO-DE-FAMILIA_CENITAL.png",
    "public/MI PRIMER JUICIO DE FAMILIA/MI-PRIMER-JUICIO-DE-FAMILIA_FRONT-DERECHA.png",
    "public/MI PRIMER JUICIO DE FAMILIA/MI-PRIMER-JUICIO-DE-FAMILIA_BACK-IZQUIERDA.png",

    "public/MI PRIMER JUICIO DE FAMILIA/MI-PRIMER-JUICIO-DE-FAMILIA_FRONT-IZQUIERDA.png",
  ],

  "Familia",
  "Este libro del doctor Juan Carlos Del Aguila Llanos ofrece una guía práctica y accesible para abordar conflictos familiares, tanto para abogados como para quienes no están familiarizados con el derecho. A través de explicaciones claras y ejemplos sencillos, el autor proporciona herramientas para comprender cómo enfrentar estas situaciones y tomar decisiones informadas. Además, incluye valiosos consejos para elegir al abogado adecuado y reflexionar sobre las instituciones relevantes en el derecho de familia. Una obra diseñada para facilitar el entendimiento, promover soluciones efectivas y mejorar la calidad de vida familiar.",
  "978-61248993-9-3",
  "Juan Carlos Del Aguila LLanos",
  "Escuela de Derecho LP",
  "2023",
  "382",
  "Tapa Rustica",
  "0.55kg",
  "23cm",
  "15cm",
  "Mi primer juicio de familia",
  "public/INDICES/INDICE MI PRIMER JUICIO DE FAMILIA.pdf"
);
const product20 = new Products(
  "20",
  "El Defensor",
  "60",
  "",
  [
    "public/EL DEFENSOR 1/EL-DEFENSOR-1_CENITAL.png",
    "public/EL DEFENSOR 1/EL-DEFENSOR-1_FRONT-DERECHA.png",
    "public/EL DEFENSOR 1/EL-DEFENSOR-1_FRONT-IZQUIERDA.png",
    "public/EL DEFENSOR 1/EL-DEFENSOR-1_BACK_IZQUIERDA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978- 61248629-6-0",
  "Jefferson Moreno Nieves",
  "Editorial LP",
  "2022",
  "221",
  "Tapa Rustica",
  "0.8kg",
  "21cm",
  "16cm",
  "El Defensor",
  "public/INDICES/INDICE EL DEFENSOR.pdf"
);
const product21 = new Products(
  "21",
  "El derecho a la prueba en la investigacion preparatoria",
  "130",
  "",
  [
    "public/EL DERECHO A LA PRUEBA EN LA INVESTIGACIÓN PREPARATORIA/EL-DERECHO-A-LA-PRUEBA-EN-LA-INVESTIGACIÓN-PREPARATORIA_CENITAL.png",
    "public/EL DERECHO A LA PRUEBA EN LA INVESTIGACIÓN PREPARATORIA/EL-DERECHO-A-LA-PRUEBA-EN-LA-INVESTIGACIÓN-PREPARATORIA_FRONT-DERECHA.png",
    "public/EL DERECHO A LA PRUEBA EN LA INVESTIGACIÓN PREPARATORIA/EL-DERECHO-A-LA-PRUEBA-EN-LA-INVESTIGACIÓN-PREPARATORIA_BACK.png",
    "public/EL DERECHO A LA PRUEBA EN LA INVESTIGACIÓN PREPARATORIA/EL-DERECHO-A-LA-PRUEBA-EN-LA-INVESTIGACIÓN-PREPARATORIA_BACK-IZQUIERDA.png",
    "public/EL DERECHO A LA PRUEBA EN LA INVESTIGACIÓN PREPARATORIA/EL-DERECHO-A-LA-PRUEBA-EN-LA-INVESTIGACIÓN-PREPARATORIA_FRONT-IZQUIERDA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-612-322-411-0",
  "Jose Luis Castillo Alva",
  "Instituto Pacífico",
  "2023",
  "608",
  "Tapa Dura",
  "1kg",
  "24cm",
  "17cm",
  "El derecho a la prueba",
  ""
);
const product22 = new Products(
  "22",
  "La fe se da no se vende",
  "45",
  "",
  [
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_CENITAL.png",
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_FRONT-DERECHA.png",
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_BACK.png",

    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_FRONT-IZQUIERDA.png",
  ],

  "Penal",
  "En un contexto marcado por la inmediatez de las redes sociales y la complejidad de los textos académicos, el autor busca transmitir sus vivencias y reflexiones a través de Cuatro Cuentos. Esta obra se aleja del estilo técnico y académico, presentando relatos que reflejan experiencias personales, entrelazadas con sueños, decisiones audaces, y lecciones de vida. Los cuentos cubren distintas etapas del autor como letrado, abordando tanto sus logros como desafíos. Cada cuento va acompañado de un colofón, donde se explica la figura del notario en el contexto peruano, fusionando narrativa y reflexión profesional.",
  "978-612-49720-5-8",
  "Víctor Raúl Tinageros Loza",
  "Editorial LP",
  "2024",
  "608",
  "Tapa Rústica",
  "0.2kg",
  "20cm",
  "14cm",
  "La fe se da no se vende",
  "public/INDICES/INDICE-La fe se da no se vende_indice.pdf"
);

const product23 = new Products(
  "23",
  "Código Penal y Código Civil",
  "100",
  "90",
  [
    "public/OFERTAS/OFFER_CCTR_CPTR_CENITAL.png",
    "public/OFERTAS/OFFER_CCTR_CPTR_FRONT.png",
    "public/OFERTAS/OFFER_CCTR_CPTR_FRONT_IZQUIERDA.png",
    "public/OFERTAS/OFFER_CCTR_CPTR_BACK_IZQUIERDA.png",
    "public/OFERTAS/OFFER_CPTR_CCTR_DETAILS.jpeg",
  ],

  "Ofertas",
  "Los libros Código Penal y Código Civil: Jurisprudencia relevante y actual ofrecen una recopilación exhaustiva y actualizada de normas y jurisprudencia esencial en derecho peruano. El Código Penal integra los textos vigentes con la jurisprudencia más relevante, facilitando la aplicación práctica de la ley. Por su parte, el Código Civil se distingue por resumir pronunciamientos clave con titulares concisos, proporcionando acceso directo a las resoluciones completas. Ambas obras son herramientas fundamentales para estudiantes, abogados y jueces, promoviendo un análisis profundo y actualizado del derecho y favoreciendo la comprensión de la evolución normativa y jurisprudencial.",
  "978-61249574-6-8 ; 978-61249574-7-4",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Rústica",
  "1.3kg",
  "21cm",
  "16cm",
  "Código Penal y Código Civil",
  "public/INDICES/INDICE-CP Y CC.zip"
);

const product24 = new Products(
  "24",
  "Fernández Sessarego. La vocación por la libertad",
  "80",
  "",
  [
    "public/FERNÁNDEZ SESSAREGO LA VOCACIÓN POR LA LIBERTAD/FERNÁNDEZ-SESSAREGO-LA-VOCACIÓN-POR-LA-LIBERTAD_CENITAL.png",
    "public/FERNÁNDEZ SESSAREGO LA VOCACIÓN POR LA LIBERTAD/FERNÁNDEZ-SESSAREGO-LA-VOCACIÓN-POR-LA-LIBERTAD_FRONT-DERECHA.png",
    "public/FERNÁNDEZ SESSAREGO LA VOCACIÓN POR LA LIBERTAD/FERNÁNDEZ-SESSAREGO-LA-VOCACIÓN-POR-LA-LIBERTAD_BACK-IZQUIERDA.png",
    "public/FERNÁNDEZ SESSAREGO LA VOCACIÓN POR LA LIBERTAD/FERNÁNDEZ-SESSAREGO-LA-VOCACIÓN-POR-LA-LIBERTAD_FRONT-IZQUIERDA.png",
  ],

  "Penal",
  "El texto es un prólogo en el que el autor relata la relación entre dos figuras académicas y profesionales, Carlos Fernández Sessarego y Carlos Calderón Puertas, destacando la profundidad de sus conversaciones y la admiración mutua. En este prólogo, se menciona la dedicación intelectual de Calderón Puertas, su pasión por el conocimiento, y cómo esta relación condujo a una entrevista profunda sobre la vida y obra de Fernández Sessarego, un destacado jurista peruano. El autor reflexiona sobre la contribución de Calderón Puertas y la importancia de este trabajo, subrayando la riqueza de la entrevista y su valor para el entendimiento de la vida y obra del homenajeado.",
  "978-612-49720-6-5",
  "Carlos Calderón Puertas ",
  "Editorial LP",
  "2024",
  "366",
  "Tapa Rústica",
  "1kg",
  "20cm",
  "12cm",
  "Fernández Sessarego",
  "public/INDICES/INDICE-Fernandez Sessarego_INDICE.pdf"
);
/*Array*/

export const arrayProducts: Products[] = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
];
