import { useState } from "react";
import arrayOffers from "../assets/OffersOptions.js"; // Aquí está el array de tus productos (ofertas)
import styles from "./Offers.module.css"; // Estilos del componente
import { TemplateOffer } from "./OffersCard.tsx"; // Plantilla de producto (oferta)
import arraySeparators from "../assets/SeparatorsOptions";

export default function Offers() {
  // Estado para mantener el índice de inicio de los productos
  const [startIndexes, setStartIndexes] = useState({});

  const visibleProducts = 4; // Número de productos visibles por "página" en el slider

  // Función para desplazarse por los productos
  const scrollTo = (direction: string, section: string) => {
    const sectionProducts = arrayOffers; // Usamos todos los productos, sin filtrar por sección
    const currentStartIndex = startIndexes[section] || 0; // Obtener el índice actual de inicio

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
  const startIndex = startIndexes["all"] || 0;

  // Aseguramos que el número de productos visibles nunca se pase de la cantidad total
  const productsToDisplay = sectionProducts.slice(
    startIndex,
    startIndex + visibleProducts
  );

  if (arrayOffers.length <= visibleProducts) {
    return (
      <div className={styles["offers-container"]}>
        {arraySeparators.find((separator) => separator.section === "Ofertas")
          ?.img && (
          <img
            src={
              arraySeparators.find(
                (separator) => separator.section === "Ofertas"
              )?.img
            }
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
  }else{return (
    <div className={styles["offers-container"]}>
      {arraySeparators.find((separator) => separator.section === "Ofertas")
        ?.img && (
        <img
          src={
            arraySeparators.find((separator) => separator.section === "Ofertas")
              ?.img
          }
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
  );}
  
}
