import styles from "./Messages.module.css";
import Message from "./Message";
import { useState } from "react";

function Messages() {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className={styles["messages-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${styles["messages"]} ${styles["messages-1"]} ${
          isPaused ? styles["paused"] : ""
        }`}
      >
        <Message />
      </div>
      <div
        className={`${styles["messages"]} ${styles["messages-2"]} ${
          isPaused ? styles["paused"] : ""
        }`}
      >
        <Message />
      </div>
    </div>
  );
}

export default Messages;
