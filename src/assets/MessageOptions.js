/*Class*/
class message {
  constructor(text, linkto) {
    this.text = text;
    this.linkto = linkto;
  }
}

/*Objects*/
const message1 = new message("lp pasion por el derecho", "#");
const message2 = new message("contactanos para mas informacion", "#");
const message3 = new message("llamanos o escribenos", "#");

/*Array*/
const arrayMessages = [message1, message2, message3];

export default arrayMessages;
