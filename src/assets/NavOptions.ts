class NavOption {
  text: string;
  linkto: string;

  constructor(text: string, linkto: string) {
    this.text = text;
    this.linkto = linkto;
  }
}

/* Objects */
const navOption1 = new NavOption("Penal", "/Penal");
const navOption2 = new NavOption("Civil", "/Civil");
const navOption3 = new NavOption("Familia", "/Familia");
const navOption4 = new NavOption("Administrativo", "/Administrativo");
const navOption5 = new NavOption("Constitucional", "/Constitucional");
const navOption6 = new NavOption("Ofertas", "/Ofertas");

/* Array */
const arrayNavOptions: NavOption[] = [
  navOption1,
  navOption2,
  navOption3,
  navOption4,
  navOption5,
  navOption6,
];

export default arrayNavOptions;
