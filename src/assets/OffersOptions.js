class Offers {
  constructor(
    id,
    nombre,
    precioBase,
    precioOffer,
    imagen,

    section,
    sipnosis,
    isbn,
    autor,
    editorial,
    año,
    paginas,
    presentacion,
    peso,
    alto,
    ancho
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precioBase = precioBase;
    this.precioOffer = precioOffer;
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
  }
  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }
}

/*Objects*/

const offer1 = new Offers(
  "1",
  "Código Penal Tapa Dura",
  "75",
  "50",
  [
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-CENITAL-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-BACK-IZQUIERDA-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-FRONT-DERECHA-DURA.png",
    "public/CÓDIGO PENAL/TAPA DURA/CODIGO-PENAL-FRONT-IZQUIERDA-DURA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vid transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Dura",
  "1.4kg",
  "21cm",
  "16cm"
);
const offer2 = new Offers(
  "2",
  "Código Penal Tapa Rústica",
  "50",
  "40",
  [
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-CENITAL-RUSTICA.png",
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-BACK-IZQUIERDA-RUSTICA.png",
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-FRONT-DERECHA-RUSTICA.png",
    "public/CÓDIGO PENAL/TAPA RUSTICA/CODIGO-PENAL-FRONT-IZQUIERDA-RUSTICA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-6-8",
  "LP",
  "Editorial LP",
  "2024",
  "1004",
  "Tapa Rústica",
  "1.3kg",
  "21cm",
  "16cm"
);

const offer3 = new Offers(
  "22",
  "La fe se da no se vende",
  "130",
  "100",
  [
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_CENITAL.png",
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_BACK.png",
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_FRONT-DERECHA.png",
    "public/LA FE SE DA NO SE VENDE/LA-FE-SE-DA-NO-SE-VENDE_FRONT-IZQUIERDA.png",
  ],

  "Penal",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-612-49720-5-8",
  "Víctor Raúl Tinageros Loza",
  "Editorial LP",
  "2024",
  "608",
  "Tapa Rústica",
  "0.2kg",
  "20cm",
  "14cm"
);

const offer4 = new Offers(
  "8",
  "Litigacion Oral Civil",
  "100",
  "90",
  [
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_CENITAL.png",
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_BACK.png",
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_FRONT-DERECHA.png",
    "public/LITIGACIÓN ORAL CIVIL/LITIGACIÓN-ORAL-CIVIL_FRONT-IZQUIERDA.png",
  ],

  "Civil",
  "En un pequeño pueblo rodeado de montañas, la vida transcurría con la serenidad de un río que fluye lentamente. Los habitantes, con rostros amigables y sonrisas sinceras, se reunían cada tarde en la plaza principal, donde los niños jugaban y los ancianos compartían historias de tiempos pasados. Las flores de colores vibrantes adornaban cada esquina, mientras el aroma del pan recién horneado se mezclaba con el canto de los pájaros. Era un lugar donde el tiempo parecía detenerse, invitando a todos a disfrutar de la simplicidad de la vida y a encontrar belleza en los pequeños momentos.",
  "978-61249574-5-1",
  "Carlos E. Polanco Gutiérrez",
  "Editorial LP",
  "2024",
  "383",
  "Tapa Rustica",
  "0.50kg",
  "24cm",
  "16cm"
);

/*Arrays*/

const arrayOfers = [offer1, offer2, offer3, offer4];

export default arrayOfers;
