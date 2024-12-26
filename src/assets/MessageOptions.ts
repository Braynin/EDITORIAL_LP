export class Messages {
  text: string;
  linkto: string;

  constructor(text: string, linkto: string) {
    this.text = text;
    this.linkto = linkto;
  }
}

/* Objects */
const message1 = new Messages("Editorial LP", "/");
const message2 = new Messages("Aprovecha los descuentos", "/Ofertas");
const message3 = new Messages(
  "Contactanos para mas informacion",
  "https://wa.me/939613209?text=Hola,%20visite%20su%20pagina%20y%20quiero%20más%20información"
);
/* Array */
export const arrayMessages: Messages[] = [message1, message2, message3];
