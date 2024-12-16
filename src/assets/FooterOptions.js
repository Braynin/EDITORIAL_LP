/*Class*/
class footerOption {
  constructor(title, option1, option2, option3, option4, option5, option6) {
    this.title = title;
    this.option1 = option1 || ["", "#"];
    this.option2 = option2 || ["", "#"];
    this.option3 = option3 || ["", "#"];
    this.option4 = option4 || ["", "#"];
    this.option5 = option5 || ["", "#"];
    this.option6 = option6 || ["", "#"];
  }
}

/*Objects*/
const footerOption1 = new footerOption(
  "Sobre Nosotros",
  ["Quienes Somos", "/quienes-somos"],
  ["", "#"],
  ["", "#"],
  ["", "#"]
);
const footerOption2 = new footerOption(
  "Servicio al cliente",
  ["Opiniones de clientes", "/opiniones-de-clientes"],
  ["Preguntas Frecuentes", "/preguntas-frecuentes"],
  ["Cambios y Devoluciones", "/cambios-y-devoluciones"]
);
const footerOption3 = new footerOption(
  "Política",
  ["Políticas de privacidad", "/politicas-de-privacidad"],
  ["Políticas de Cookies", "/politicas-de-cookies"],
  ["Términos y condiciones", "/terminos-y-condiciones"],
  [
    "Términos y condiciones Promocionales",
    "/terminos-y-condiciones-promocionales",
  ],
  ["Política de entrega", "/politicas-de-entrega"]
);

/*Array*/

const arrayFooterOptions = [footerOption1, footerOption2, footerOption3];

export default arrayFooterOptions;
