import styles from "./CatalogoBtn.module.css";

export default function Catalogos() {
  return (
    <div className={styles["catalogos"]}>
      <a
        href="/CATALOGOS-VENTA/CATÁLOGO LP -DIC2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles["btn-catalogo"]}
          src="/BANNERS VISTA MOBILE/BOTONES CATALOGO/SEPARADOR WEB catalogo minorista.png"
          loading="lazy"
        />
      </a>
      <a
        href="/CATALOGOS-VENTA/CATÁLOGO MAYORISTA LP - DICIEMBRE 2024.pdf  "
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles["btn-catalogo"]}
          loading="lazy"
          src="/BANNERS VISTA MOBILE/BOTONES CATALOGO/SEPARADOR WEB catalogo mayorista.png"
        />
      </a>
    </div>
  );
}
