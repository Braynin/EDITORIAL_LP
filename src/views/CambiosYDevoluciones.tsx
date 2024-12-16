import styles from "./CambiosYDevoluciones.module.css";
import Layout from "../components/Layout.tsx";

const CambiosYDevoluciones = () => {
  return (
    <>
      <Layout>
        <div className={styles["cambiosYDevoluciones-container"]}>
          <h1>Cambios y Devoluciones</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default CambiosYDevoluciones;
