import { Link } from "react-router-dom";
import styles from "./OffersCard.module.css";
function CreateOffersCard({ offer }) {
  return (
    <div className={styles["card"]}>
      <Link to={`/details?id=${offer.id}`} className={styles["product-card"]}>
        <img
          src={offer.imagen[0]}
          alt={offer.nombre}
          className={styles["product-img"]}
        />
        <div className={styles["product-info"]}>
          <span className={styles["brand"]}>{offer.presentacion}</span>
          <p className={styles["product-title"]}>{offer.nombre}</p>
          <div className={styles["product-price-block"]}>
            <p className={styles["current-price"]}>S/.{offer.precioOffer}</p>
            {offer.oldPrice && (
              <del className={styles["old-price"]}>S/.{offer.oldPrice}</del>
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

function TemplateOffer({ array }: { array: any[] }) {
  return array.map((offer) => (
    <CreateOffersCard key={offer.id} offer={offer} />
  ));
}
function OffersCards({ array }: any) {
  return <div className={styles["offers"]}>{TemplateOffer({ array })}</div>;
}
export { OffersCards, TemplateOffer };
