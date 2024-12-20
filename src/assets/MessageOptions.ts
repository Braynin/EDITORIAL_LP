export class Messages {
  text: string;
  linkto: string;

  constructor(text: string, linkto: string) {
    this.text = text;
    this.linkto = linkto;
  }
}

/* Objects */
const message1 = new Messages("Editorial LP", "#");
const message2 = new Messages("Aprovecha los descuentos", "#");
const message3 = new Messages("Contactanos para mas informacion", "#");

/* Array */
export const arrayMessages: Messages[] = [message1, message2, message3];
