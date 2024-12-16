import Layout from "../components/Layout";
import styles from "./QuienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <>
      <Layout>
        <div className={styles["quienes-somos-container"]}>
          <h1>Quiénes Somos</h1>
          <div className={styles["imagen-footer"]}></div>
          <div className={styles["imagen-footer"]}></div>
        </div>
      </Layout>
    </>
  );
};

export default QuienesSomos;
