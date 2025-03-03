import Layout from "../../src/components/Layout.tsx";
import styles from "./OffersView.module.css";
import { Link } from "react-router-dom";
import { offerOptions, OfferOption } from "../../src/assets/OffersOptions.ts";
import Breadcrumb from "../../src/components/Breadcrumb.tsx";
import Catalogos from "../../src/components/CatalogoBtn.tsx";
import { useState, useEffect } from "react";
const OffersView = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerOffer = isMobile
    ? "/BANNERS VISTA MOBILE/SECTION MOBILE/BANNERS DE SECCIÓN_MOVIL_OFERTAS.png"
    : "/BANNER DE SECCION/BANNERS-DE-SECCIÓN_OFERTAS.jpg";

  return (
    <>
      <Layout>
        <Breadcrumb section="Ofertas" />
        <div className={styles.offers}>
          <div className={styles["offers-banner"]}>
            <img
              className={styles["offers-img"]}
              src={bannerOffer}
              alt="Ofertas"
              loading="lazy"
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
                    loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Catalogos />
      </Layout>
    </>
  );
};

export default OffersView;
