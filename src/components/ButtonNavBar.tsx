import { useState } from "react";
import styles from "./ButtonNavBar.module.css";
import arrayNavOptions from "../assets/NavOptions.ts";
import React from "react";

export default function ButtonNavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado de apertura del menú
  };

  return (
    <>
      {/* Botón de hamburguesa */}
      <button className={styles["hamburger-btn"]} onClick={toggleMenu}>
        <span
          className={`${styles["bar"]} ${menuOpen ? styles["open"] : ""}`}
        ></span>
        <span
          className={`${styles["bar"]} ${menuOpen ? styles["open"] : ""}`}
        ></span>
        <span
          className={`${styles["bar"]} ${menuOpen ? styles["open"] : ""}`}
        ></span>
      </button>

      {/* Opciones de navegación */}
      <ul
        className={`${styles["nav-options"]} ${menuOpen ? styles["open"] : ""}`}
      >
        {arrayNavOptions.map((option, index) => (
          <React.Fragment key={index}>
            <li className={styles["nav-option"]}>
              <a className={styles["nav-link"]} href={option.linkto}>
                {option.text}
              </a>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
