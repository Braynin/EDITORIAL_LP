import styles from "./CatalogoBtn.module.css";

export default function Catalogos() {
  return (
    <div className={styles["catalogos"]}>
      <a
        href="public/CATALOGOS-VENTA/CATÁLOGO LP -DIC2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles["btn-catalogo"]}
          src="public/BANNERS VISTA MOBILE/BOTONES CATALOGO/SEPARADOR WEB catalogo minorista.png"
        />
      </a>
      <a
        href="public/CATALOGOS-VENTA/CATÁLOGO MAYORISTA LP - DICIEMBRE 2024.pdf  "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles["btn-catalogo"]}
          src="public/BANNERS VISTA MOBILE/BOTONES CATALOGO/SEPARADOR WEB catalogo mayorista.png"
        />
      </a>
    </div>
  );
}
