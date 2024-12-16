import { Link } from "react-router-dom";
import "../index.css";
import styles from "./Card.module.css";

function CreateCard({ option }) {
  return (
    <div className={styles["card"]}>
      <Link to={`/details?id=${option.id}`} className={styles["product-card"]}>
        <img
          src={option.imagen[0]}
          alt={option.nombre}
          className={styles["product-img"]}
        />
        <div className={styles["product-info"]}>
          <span className={styles["brand"]}>{option.presentacion}</span>
          <p className={styles["product-title"]}>{option.nombre}</p>
          <div className={styles["product-price-block"]}>
            <p className={styles["current-price"]}>S/.{option.precioMenor}</p>
            {option.oldPrice && (
              <del className={styles["old-price"]}>S/.{option.oldPrice}</del>
            )}
            <div className={styles["icon"]}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className={styles["icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"]}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

  

function Template({ array }) {
  return array.map((option) => <CreateCard key={option.id} option={option} />);
}
function Cards({ array }) {
  return <div className={styles["products"]}>{Template({ array })}</div>;
}

export { Cards, Template };
