import Layout from "../components/Layout";
import styles from "./OffersView.module.css";

const OffersView = () => {
  return (
    <Layout>
      <div className={styles.offers}>
        <div className={styles["offers-container"]}>
          {/* Banner principal con imagen */}
          <div className={styles["offers-banner"]}>
            <img
              className={styles["offers-img"]}
              src="/BANNER DE SECCION/BANNERS-DE-SECCIÓN_OFERTAS.jpg"
              alt="Ofertas"
            />
          </div>
        </div>

        {/* Contenedor para los banners de colores */}
        <div className={styles["offers-placeholder-container"]}>
          <div className={`${styles["offers-banner"]} ${styles["placeholder-banner"]} ${styles["color-1"]}`}></div>
          <div className={`${styles["offers-banner"]} ${styles["placeholder-banner"]} ${styles["color-2"]}`}></div>
          <div className={`${styles["offers-banner"]} ${styles["placeholder-banner"]} ${styles["color-3"]}`}></div>
          <div className={`${styles["offers-banner"]} ${styles["placeholder-banner"]} ${styles["color-4"]}`}></div>
        </div>
      </div>
    </Layout>
  );
};

export default OffersView;
