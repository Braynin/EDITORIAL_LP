import styles from "./ButtonNavBar.module.css";
import arrayNavOptions from "../assets/NavOptions";
import React from "react";

export default function ButtonNavBar() {
  return (
    <ul className={styles["nav-options"]}>
      {arrayNavOptions.map((option, index) => (
        <React.Fragment key={index}>
          <li className={styles["nav-option"]}>
            <a className={styles["nav-link"]} href={option.linkto}>
              {option.text}
            </a>
          </li>
          {index < arrayNavOptions.length - 1 && (
            <span className={styles["separator"]}></span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
