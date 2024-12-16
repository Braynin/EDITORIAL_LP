  /*Components*/

  import FooterSection from "./FooterSection";
  import styles from "./Footer.module.css";
  import SocialLinks from "./SocialLinks";

  function Footer() {
    return (
      <>
        <div className={styles["footer-container"]}>
        <div className={styles["footer-section"]}>
          <a className={styles["logo-container"]} href="">
          <img src="./public/logolp.webp" alt="lp" className={styles["logo-footer"]} />
          </a>
            
            <p className={styles["footer-text"]}>Visítanos en nuestras redes</p>
            <ul className={styles["social-links"]}>
              <SocialLinks />
            </ul>
            <p className={styles["footer-address"]}>Av. Faustino Sanchez Carrión 615 oficina 508 <br /> Jesús María - Lima, Perú</p>          
          </div>
      
          <FooterSection />
          <div className={styles["footer-section"]}>
            <h2 className={styles["libro-reclamaciones-title"]}>Libro de Reclamaciones</h2>
            <a  className={styles["libro-reclamaciones-link"]} href="https://docs.google.com/forms/d/e/1FAIpQLSci3i7TJ3irBrckbxqKKrdSMAnZRtDPySPbKtLnDZhLLPm20g/viewform">
              <img src="./public/Item_libro_de_reclamaciones_128x80.png" alt="" />
            </a>
          </div>
          
        </div>
        <div className={styles["footer-ruc"]}>
            <h2 className={styles["ruc"]}>
              <span className={styles["ruc-text"]}> EDITORAL LP S.A.C R.U.C: 20612237264</span> | Todos los Derechos Reservados.
            </h2>
          </div>
      </>
    );
  }

  export default Footer;
