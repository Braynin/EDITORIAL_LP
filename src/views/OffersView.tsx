import Layout from "../components/Layout";
import styles from "./OffersView.module.css";
import { Link } from "react-router-dom";
import { offerOptions, OfferOption } from "../assets/OffersOptions";
import Breadcrumb from "../components/Breadcrumb";

const OffersView = () => {
  return (
    <>
      <Layout>
        <Breadcrumb section="Ofertas" />
        <div className={styles.offers}>
          <div className={styles["offers-banner"]}>
            <img
              className={styles["offers-img"]}
              src="/BANNER DE SECCION/BANNERS-DE-SECCIÓN_OFERTAS.jpg"
              alt="Ofertas"
            />
          </div>

          {/* Contenedor para los banners de colores */}
          <div className={styles["offers-placeholder-container"]}>
            {offerOptions.map((product: OfferOption) => (
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
      </Layout>
    </>
  );
};

export default OffersView;
