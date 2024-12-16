import React, { useState } from "react";
import styles from "./ShareButton.module.css";
import { 
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const ShareButton: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  // URL actual de la página
  const currentUrl = window.location.href;

  // Función para copiar la URL al portapapeles
  const handleCopyUrl = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Evita la navegación del enlace
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("¡Enlace copiado al portapapeles!");
      })
      .catch(() => {
        alert("No se pudo copiar el enlace.");
      });
  };

  // Mostrar y ocultar menú
  const handleMouseEnter = () => setShowMenu(true);
  const handleMouseLeave = () => setShowMenu(false);

  return (
    <li
      className={styles["share-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles["share-button-wrapper"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a  href="#" onClick={handleCopyUrl} className={styles["policy-icon"]} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles["icon icon-tabler icons-tabler-outline icon-tabler-share"]}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M8.7 10.7l6.6 -3.4" />
            <path d="M8.7 13.3l6.6 3.4" />
          </svg>
        </a>

        {/* Texto "Compartir" que copia el enlace */}
        <a href="#" onClick={handleCopyUrl}>
          <p className={styles["policy-desc"]}>Compartir</p>
        </a>

        {/* Menú desplegable de iconos */}
        {showMenu && (
          <div className={styles["share-menu"]}>
            <a
              href={`https://wa.me/?text=Miren esto: ${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={24} stroke={2} className={styles.whatsappIcon} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebook size={24} stroke={2} className={styles.facebookIcon} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Miren esto: ${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTwitter size={24} stroke={2} className={styles.twitterIcon} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?url=${currentUrl}&text=Miren esto`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={24} stroke={2} className={styles.linkedinIcon} />
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default ShareButton;
