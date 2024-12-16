import styles from "./Messages.module.css";
import Message from "./Message";

function Messages() {
  return (
    <>
      <div className={styles["messages-container"]}>
        <div className={styles.messages}>
          <Message />
        </div>
      </div>
    </>
  );
}
export default Messages;
