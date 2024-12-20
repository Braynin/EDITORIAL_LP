import { useState, useEffect } from "react";
import { arrayOffers } from "../assets/OffersOptions.ts"; // Aquí está el array de tus productos (ofertas)
import styles from "./Offers.module.css"; // Estilos del componente
import { TemplateOffer } from "./OffersCard.tsx"; // Plantilla de producto (oferta)
import { arraySeparators, arraySeparatorsMobile } from "../assets/SeparatorsOptions.ts";

export default function Offers() {
  const visibleProducts = 4; // Número de productos visibles por "página" en el slider
  interface StartIndexes {
    [key: string]: number;
  }

  const [StartIndexes, setStartIndexes] = useState<StartIndexes>({});
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

  // Función para desplazarse por los productos
  const scrollTo = (direction: string, section: string) => {
    const sectionProducts = arrayOffers; // Usamos todos los productos, sin filtrar por sección
    const currentStartIndex = StartIndexes[section] || 0;
    let newStartIndex;
    if (direction === "prev") {
      // Desplazar hacia atrás, asegurándonos de que no sea menor que 0
      newStartIndex =
        currentStartIndex === 0
          ? Math.max(sectionProducts.length - visibleProducts, 0) // Si estamos al principio, saltamos al final
          : currentStartIndex - visibleProducts;
    } else {
      // Desplazar hacia adelante, asegurándonos de que no se exceda el número total de productos
      newStartIndex =
        currentStartIndex + visibleProducts >= sectionProducts.length
          ? 0 // Si hemos llegado al final, volvemos al principio
          : currentStartIndex + visibleProducts;
    }

    // Actualizamos el índice de inicio
    setStartIndexes((prevIndexes) => ({
      ...prevIndexes,
      [section]: newStartIndex,
    }));
  };

  // Usamos todos los productos del arrayOffers, no filtrados
  const sectionProducts = arrayOffers; // Todos los productos
  const startIndex = StartIndexes["all"] || 0;

  // Aseguramos que el número de productos visibles nunca se pase de la cantidad total
  const productsToDisplay = sectionProducts.slice(
    startIndex,
    startIndex + visibleProducts
  );

  // Selección del separador adecuado según el tamaño de la pantalla
  const separator = isMobile
    ? arraySeparatorsMobile.find((separator) => separator.section === "Ofertas")
    : arraySeparators.find((separator) => separator.section === "Ofertas");

  // Renderizar el componente
  if (arrayOffers.length <= visibleProducts) {
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
            <TemplateOffer array={productsToDisplay} />
          </div>
        </div>
      </div>
    );
  } else {
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
          <div className={styles["slider-container"]}>
            <div
              className={styles["leftArrow"]}
              onClick={() => scrollTo("prev", "all")}
              aria-label="Anterior"
            >
              &#8249;
            </div>

            <div className={styles["slider"]}>
              <TemplateOffer array={productsToDisplay} />
            </div>

            <div
              className={styles["rightArrow"]}
              onClick={() => scrollTo("next", "all")}
              aria-label="Siguiente"
            >
              &#8250;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
