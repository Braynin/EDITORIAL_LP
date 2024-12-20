class Separator {
  img: string;
  section: string;
  constructor(img:string, section:string) {
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

export const arraySeparators: Separator[] = [
  separator1,
  separator2,
  separator3,
  separator4,
  separator5,
  separator6,
];


const separatoMobile1 = new Separator(
  "public/BANNERS VISTA MOBILE/SEPARADORES MOBILE/separador de libros secciones_ADMIN.png",
  "Administrativo"
);
const separatoMobile2 = new Separator(
  "public/BANNERS VISTA MOBILE/SEPARADORES MOBILE/separador de libros secciones_CIV.png",
  "Civil"
);
const separatoMobile3 = new Separator(
  "public/BANNERS VISTA MOBILE/SEPARADORES MOBILE/separador de libros secciones_PEN.png",
  "Penal"
);
const separatoMobile4 = new Separator(
  "public/BANNERS VISTA MOBILE/SEPARADORES MOBILE/separador de libros secciones_FAM.png",
  "Familia"
);
const separatoMobile5 = new Separator(
  "public/BANNERS VISTA MOBILE/SEPARADORES MOBILE/separador de libros secciones_CONSTITUCIONALES.png",
  "Constitucional"
);
const separatoMobile6 = new Separator(
  "public/BANNERS VISTA MOBILE/SEPARADORES MOBILE/separador de libros secciones_OFERTA.png",
  "Ofertas"
);
export const arraySeparatorsMobile: Separator[] = [
  separatoMobile1,
  separatoMobile2,
  separatoMobile3,
  separatoMobile4,
  separatoMobile5,
  separatoMobile6,
];