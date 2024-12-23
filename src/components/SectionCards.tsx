import { useState, useEffect } from "react";
import { arrayProducts, Products } from "../assets/ProductsOptions.ts";
import styles from "./SectionCards.module.css";
import { Template } from "./Card.tsx";
import normalizeText from "../assets/NormalizeText.ts";
import {
  arraySeparators,
  arraySeparatorsMobile,
} from "../assets/SeparatorsOptions.ts";
import { useLocation } from "react-router-dom";
import { arrayBannerSections } from "../assets/BannerSectionOption.ts";

// Definir los tipos de las propiedades
interface CardsSectionProps {
  section: string; // section debería ser un string
}

const CardsSection: React.FC<CardsSectionProps> = ({ section }) => {
  const [startIndexes, setStartIndexes] = useState<Record<string, number>>({});
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [visibleProducts, setVisibleProducts] = useState(5);

  // Actualizar las imágenes cuando el tamaño de la ventana cambia
  useEffect(() => {
    if (isMobile) {
      setVisibleProducts(filteredProducts.length);
    } else {
      setVisibleProducts(5);
    }
  }, [isMobile]);

  // Detectar si la pantalla es menor a 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Actualiza el estado si el ancho es menor a 768px
    };

    // Ejecutar la función de tamaño en el montaje del componente
    handleResize();

    // Agregar el event listener para el cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para filtrar los productos por sección
  const sectionProducts = (array: Products[], section: string): Products[] => {
    // Si la sección es "Ofertas", no se deben mostrar los productos
    if (normalizeText(section) === "ofertas") {
      return [];
    }
    return array.filter((product) =>
      normalizeText(product.section).includes(normalizeText(section))
    );
  };

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
  const separator = isMobile
    ? arraySeparatorsMobile.find(
        (separator) =>
          normalizeText(separator.section) === normalizeText(section)
      )
    : arraySeparators.find(
        (separator) =>
          normalizeText(separator.section) === normalizeText(section)
      );

  // Verifica la URL actual para determinar el estado de la navegación
  const location = useLocation();
  const verify = location.pathname.replace(/^\/|\/$/g, "");

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
        <>
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
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  }
};

export default CardsSection;
