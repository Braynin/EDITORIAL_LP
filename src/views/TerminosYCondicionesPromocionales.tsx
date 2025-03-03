import Layout from "../components/Layout.tsx";
import styles from "./TerminosYCondicionesPromocionales.module.css";

const TerminosYCondicionesPromocionales = () => {
  return (
    <>
      <Layout>
        <div className={styles["terminosYCondicionesPromocionales-container"]}>
          <h1>Terminos y condiciones promocionales</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default TerminosYCondicionesPromocionales;
