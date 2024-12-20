import { Link } from "react-router-dom";
import "../index.css";
import styles from "./Card.module.css";
import { Products } from "../assets/ProductsOptions";
import { IconShoppingBagCheck } from "@tabler/icons-react";

interface TemplateProps {
  array: Products[];
}
const whatsapp = "939613209";
const mensaje = "Hola, quiero comprar este libro:";
const mensajeCodificado = encodeURIComponent(mensaje);
function CreateCard({ option }: { option: Products }) {
  // Aquí estamos creando el mensaje completo con el nombre del producto
  const mensajeCompleto = `${mensajeCodificado}${encodeURIComponent(
    option.nombre
  )}`;
  // Función para prevenir la acción de redirección cuando se hace clic en el ícono de WhatsApp
  const handleWhatsAppClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Evitar que el clic se propague y active el Link
  };

  return (
    <div className={styles["card"]}>
      <Link to={`/details?id=${option.id}`} className={styles["product-card"]}>
        <img
          src={option.imagen[0]}
          alt={option.nombre}
          className={styles["product-img"]}
        />
        <div className={styles["product-info"]}>
          <p className={styles["product-title"]}>{option.nombreCard}</p>
          <span className={styles["brand"]}>{option.presentacion}</span>
          <div className={styles["product-price-block"]}>
            <p className={styles["current-price"]}>S/.{option.precioMenor}</p>
            <a
              className={styles["case-icon"]}
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
  );
}

function Template({ array }: TemplateProps) {
  return array.map((option) => <CreateCard key={option.id} option={option} />);
}
function Cards({ array }: TemplateProps) {
  return <div className={styles["products"]}>{Template({ array })}</div>;
}

export { Cards, Template };
