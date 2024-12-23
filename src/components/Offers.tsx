import { useState, useEffect } from "react";
import {
  OfferOption,
  offerOptions,
  offerOptionsMobile,
} from "../assets/OffersOptions.ts";
import styles from "./Offers.module.css"; // Estilos del componente
import {
  arraySeparators,
  arraySeparatorsMobile,
} from "../assets/SeparatorsOptions.ts";
import { Link } from "react-router-dom";

export default function Offers() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detectar si la pantalla es menor a 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Actualiza el estado si el ancho es menor a 768px
    };

    // Ejecutar la función de tamaño en el montaje del componente
    handleResize();

    // Agregar el event listener para el cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Selección del separador adecuado según el tamaño de la pantalla
  const separator = isMobile
    ? arraySeparatorsMobile.find((separator) => separator.section === "Ofertas")
    : arraySeparators.find((separator) => separator.section === "Ofertas");

  const arrayOffers = isMobile ? offerOptionsMobile : offerOptions;

  // Renderizar el componente

  return (
    <div className={styles["offers-container"]}>
      {separator?.img && (
        <img
          src={separator.img}
          alt="Ofertas"
          className={styles["separator"]}
        />
      )}
      <div className={styles["card-section"]}>
        <div className={styles["slider"]}>
          {arrayOffers.map((product: OfferOption) => (
            <div className={styles["img-container"]}>
              <Link to={product.link}>
                <img
                  src={product.imgUrl}
                  className={styles["offer-img"]}
                  alt={`Ofertas ${product.id}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
