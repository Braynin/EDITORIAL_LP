import styles from "./Message.module.css";
import arrayMessages from "../assets/MessageOptions";

const createMessage = (option: any) => (
  <a className={styles.message} href={option.linkto}>
    {option.text}
  </a>
);

export default function Message() {
  return arrayMessages.map(createMessage);
}
