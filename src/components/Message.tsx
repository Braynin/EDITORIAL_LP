import styles from "./Message.module.css";
import { Messages, arrayMessages } from "../assets/MessageOptions";

const createMessage = (option: Messages) => (
  <a className={styles.message} href={option.linkto} target="_blank">
    {option.text}
  </a>
);

export default function Message() {
  return arrayMessages.map(createMessage);
}
