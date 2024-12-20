import { useState } from "react";
import styles from "./ButtonNavBar.module.css";
import arrayNavOptions from "../assets/NavOptions.ts";
import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

export default function ButtonNavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado de apertura del menú
  };

  const pdfUrl1 = "#";
  const pdfUrl2 = "#";

  return (
    <>
      <div className={styles["hamburger-btn"]}>
        {menuOpen ? (
          <IconX stroke={3.5} onClick={() => toggleMenu()} />
        ) : (
          <IconMenu2 stroke={3.5} onClick={() => toggleMenu()} />
        )}
      </div>

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
        <div className={styles["catalogos"]}>
          <a href={pdfUrl1} download>
            <button className={styles["btn-catalogo"]}>Catalogo</button>
          </a>
          <a href={pdfUrl2} download>
            <button className={styles["btn-catalogo"]}>
              Catalogo al por mayor
            </button>
          </a>
        </div>
      </ul>
    </>
  );
}
