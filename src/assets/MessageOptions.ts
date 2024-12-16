class Message {
  text: string;
  linkto: string;

  constructor(text: string, linkto: string) {
    this.text = text;
    this.linkto = linkto;
  }
}

/* Objects */
const message1 = new Message("lp pasion por el derecho", "#");
const message2 = new Message("contactanos para mas informacion", "#");
const message3 = new Message("llamanos o escribenos", "#");

/* Array */
const arrayMessages: Message[] = [message1, message2, message3];

export default arrayMessages;
