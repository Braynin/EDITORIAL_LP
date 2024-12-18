export class Messages {
  text: string;
  linkto: string;

  constructor(text: string, linkto: string) {
    this.text = text;
    this.linkto = linkto;
  }
}

/* Objects */
const message1 = new Messages("lp pasion por el derecho", "#");
const message2 = new Messages("contactanos para mas informacion", "#");
const message3 = new Messages("llamanos o escribenos", "#");

/* Array */
export const arrayMessages: Messages[] = [message1, message2, message3];
