import { Link } from "react-router-dom";
import "../index.css";
import styles from "./Card.module.css";
import { Products } from "../assets/ProductsOptions";
import { IconShoppingBagCheck } from "@tabler/icons-react";
import { useState } from "react";

interface TemplateProps {
  array: Products[];
}
const whatsapp = "939613209";
const mensaje = "Hola, visite su pagina y quiero comprar este libro: ";

function CreateCard({ option }: { option: Products }) {
  // Codificar el nombre y la presentación por separado antes de construir el mensaje
  const nombreCodificado = encodeURIComponent(option.nombre);
  const presentacionCodificada = encodeURIComponent(
    option.presentacion || "No disponible"
  );

  // Construir el mensaje completo con los valores codificados
  const mensajeCompleto = `${mensaje}${nombreCodificado}%0A ${presentacionCodificada}`;

  // Función para prevenir la acción de redirección cuando se hace clic en el ícono de WhatsApp
  const handleWhatsAppClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Evitar que el clic se propague y active el Link
  };
  const [currentImage, setCurrentImage] = useState(option.imagen[0]);
  const handleMouseEnter = () => {
    if (option.imagen.length > 1) {
      setCurrentImage(option.imagen[1]);
    }
  };
  const handleMouseLeave = () => {
    setCurrentImage(option.imagen[0]);
  };
  return (
    <>
      <div className={styles["card"]}>
        <Link
          to={`/details?id=${option.id}`}
          className={styles["product-card"]}
        >
          <img
            src={currentImage}
            alt={option.nombre}
            className={styles["product-img"]}
            loading="lazy"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className={styles["product-info"]}>
            <p className={styles["product-title"]}>{option.nombreCard}</p>
            <span className={styles["brand"]}>{option.presentacion}</span>
            <div className={styles["product-price-block"]}>
              <div className={styles["prices"]}>
                {Number(option.precioOferta) !== 0 && (
                  <h2 className={styles["price-offer"]}>
                    S/.{option.precioOferta}
                  </h2>
                )}
                <h2
                  className={
                    Number(option.precioOferta) !== 0
                      ? styles["price-strikethrough"]
                      : styles["price"]
                  }
                >
                  S/.{option.precio}
                </h2>
              </div>
              <a
                className={styles["case-icon"]}
                title="A COMPRAR!!"
                href={`https://wa.me/${whatsapp}?text=${mensajeCompleto}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <div className={styles["icon"]}>
                  <IconShoppingBagCheck stroke={2} />
                </div>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

function Template({ array }: TemplateProps) {
  return array.map((option) => <CreateCard key={option.id} option={option} />);
}
function Cards({ array }: TemplateProps) {
  return <div className={styles["products"]}>{Template({ array })}</div>;
}

export { Cards, Template };
