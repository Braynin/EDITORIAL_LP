import { useState } from "react";
import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./SectionCards.module.css";
import { Template } from "./Card.tsx";
import normalizeText from "../assets/NormalizeText";
import arraySeparators from "../assets/SeparatorsOptions";
import { useLocation } from "react-router-dom";
import arrayBannerSections from "../assets/BannerSectionOption";
import arrayNavOptions from "../assets/NavOptions";  // Asegúrate de importar este array

// Definir los tipos de las propiedades
interface CardsSectionProps {
  section: string; // section debería ser un string
}

interface Product {
  id: string;
  text: string;
  section: string;
  imagen: string;
  nombre: string;
  precioMenor: number;
}

const CardsSection: React.FC<CardsSectionProps> = ({ section }) => {
  const [startIndexes, setStartIndexes] = useState<Record<string, number>>({});

  // Función para filtrar los productos por sección
  const sectionProducts = (array: Product[], section: string): Product[] => {
    // Si la sección es "Ofertas", no se deben mostrar los productos
    if (normalizeText(section) === "ofertas") {
      console.log("Sección 'Ofertas' detectada, no se muestran productos.");
      return [];
    }
    return array.filter((product) =>
      normalizeText(product.section).includes(normalizeText(section))
    );
  };

  const visibleProducts = 4; // Número de productos visibles a la vez
  const filteredProducts = sectionProducts(arrayProducts, section);

  // Función para manejar el desplazamiento
  const scrollTo = (direction: string, section: string) => {
    const currentStartIndex = startIndexes[section] || 0;

    let newStartIndex;
    if (direction === "prev") {
      newStartIndex =
        currentStartIndex === 0
          ? filteredProducts.length - visibleProducts
          : currentStartIndex - 1;
    } else {
      newStartIndex =
        currentStartIndex + visibleProducts >= filteredProducts.length
          ? 0
          : currentStartIndex + 1;
    }

    // Actualiza el estado solo para la sección específica
    setStartIndexes((prevIndexes) => ({
      ...prevIndexes,
      [section]: newStartIndex,
    }));
  };

  const startIndex = startIndexes[section] || 0;

  // Busca el separador asociado con la sección actual
  const separator = arraySeparators.find(
    (separator) => normalizeText(separator.section) === normalizeText(section)
  );

  // Verifica la URL actual para determinar el estado de la navegación
  const location = useLocation();
  const verify = location.pathname.replace(/^\/|\/$/g, "");

  // Verifica si la sección en la barra de navegación es "Ofertas"
  const navOption = arrayNavOptions.find(
    (nav) => normalizeText(nav.text) === "ofertas"
  );

  // Si la sección es "Ofertas", no se debe mostrar el banner ni los productos
  if (normalizeText(section) === "ofertas") {
    return null; // Aquí retornamos null para no renderizar nada si la sección es "Ofertas"
  }

  if (verify === "") {
    if (filteredProducts.length <= 4) {
      return (
        <div className={styles["card-section"]}>
          <img
            className={styles["separator"]}
            src={separator?.img}
            alt={separator?.section}
          />
          <div className={styles["slider-container"]}>
            <div className={styles["slider"]}>
              <Template array={sectionProducts(arrayProducts, section)} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles["card-section"]}>
          <img
            className={styles["separator"]}
            src={separator?.img}
            alt={separator?.section}
          />
          <div className={styles["slider-container"]}>
            <div
              className={styles["leftArrow"]}
              onClick={() => scrollTo("prev", section)}
              aria-label="Anterior"
            >
              &#8249;
            </div>
            <div className={styles["slider"]}>
              <Template
                array={sectionProducts(arrayProducts, section).slice(
                  startIndex,
                  startIndex + visibleProducts
                )}
              />
            </div>
            <div
              className={styles["rightArrow"]}
              onClick={() => scrollTo("next", section)}
              aria-label="Siguiente"
            >
              &#8250;
            </div>
          </div>
        </div>
      );
    }
  } else {
    const bannerSection = arrayBannerSections.find(
      (banner) => normalizeText(banner.section) === normalizeText(section)
    );

    if (filteredProducts.length <= 4) {
      return (
        <div className={styles["card-section"]}>
          <img
            className={styles["banner-section"]}
            src={bannerSection?.img}
            alt={bannerSection?.section}
          />
          <div className={styles["slider-container"]}>
            <div className={styles["slider"]}>
              <Template array={sectionProducts(arrayProducts, section)} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles["card-section"]}>
          <img
            className={styles["banner-section"]}
            src={bannerSection?.img}
            alt={bannerSection?.section}
          />
          <div className={styles["slider-container"]}>
            <div
              className={styles["leftArrow"]}
              onClick={() => scrollTo("prev", section)}
              aria-label="Anterior"
            >
              &#8249;
            </div>
            <div className={styles["slider"]}>
              <Template
                array={sectionProducts(arrayProducts, section).slice(
                  startIndex,
                  startIndex + visibleProducts
                )}
              />
            </div>
            <div
              className={styles["rightArrow"]}
              onClick={() => scrollTo("next", section)}
              aria-label="Siguiente"
            >
              &#8250;
            </div>
          </div>
        </div>
      );
    }
  }
};

export default CardsSection;
