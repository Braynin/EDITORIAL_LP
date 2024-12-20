import styles from "./Messages.module.css";
import Message from "./Message";

function Messages() {
  return (
    <div className={styles["messages-container"]}>
      <div className={`${styles["messages"]} ${styles["messages-1"]}`}>
        <Message />
      </div>
      <div className={`${styles["messages"]} ${styles["messages-2"]}`}>
        <Message />
      </div>
    </div>
  );
}

export default Messages;
