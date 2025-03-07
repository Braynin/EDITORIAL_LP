/* Class */
class FooterOption {
  title: string;
  option1: [string, string];
  option2: [string, string];
  option3: [string, string];
  option4: [string, string];
  option5: [string, string];
  option6: [string, string];

  constructor(
    title: string,
    option1?: [string, string],
    option2?: [string, string],
    option3?: [string, string],
    option4?: [string, string],
    option5?: [string, string],
    option6?: [string, string]
  ) {
    this.title = title;
    this.option1 = option1 || ["", "#"];
    this.option2 = option2 || ["", "#"];
    this.option3 = option3 || ["", "#"];
    this.option4 = option4 || ["", "#"];
    this.option5 = option5 || ["", "#"];
    this.option6 = option6 || ["", "#"];
  }
}

/* Objects */
const footerOption1 = new FooterOption(
  "Sobre Nosotros",
  ["Quienes Somos", "/quienes-somos"],
  ["Preguntas Frecuentes", "/preguntas-frecuentes"],
  ["", "#"],
  ["", "#"]
);

const footerOption2 = new FooterOption(
  "Política",
  ["Políticas de privacidad", "/politicas-de-privacidad"],
  ["Términos y condiciones", "/terminos-y-condiciones"],
  // ["Términos y condiciones Promocionales", "/terminos-y-condiciones-promocionales"],
  ["Política de entrega", "/politicas-de-entrega"]
);

/* Array */

const arrayFooterOptions: FooterOption[] = [
  footerOption1,
  footerOption2
];

export default arrayFooterOptions;
