class Separator {
  constructor(img, section) {
    this.img = img;
    this.section = section;
  }
}
/*Objects*/
const separator1 = new Separator(
  "public/SEPARADORES/SEPARADOR-WEB_ADMINISTRATIVO.jpg",
  "Administrativo"
);
const separator2 = new Separator(
  "public/SEPARADORES/SEPARADOR-WEB_CIVIL.jpg",
  "Civil"
);
const separator3 = new Separator(
  "public/SEPARADORES/SEPARADOR-WEB_PENAL.jpg",
  "Penal"
);
const separator4 = new Separator(
  "public/SEPARADORES/SEPARADOR-WEB_FAMILIA.jpg",
  "Familia"
);
const separator5 = new Separator(
  "public/SEPARADORES/SEPARADOR-WEB_CONSTITUCIONAL.jpg",
  "Constitucional"
);
const separator6 = new Separator(
  "../public/SEPARADORES/SEPARADOR-WEB-OFERTAS.jpg",
  "Ofertas"
);

const arraySeparators = [
  separator1,
  separator2,
  separator3,
  separator4,
  separator5,
  separator6,
];

export default arraySeparators;
