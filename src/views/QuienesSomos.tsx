import Layout from "../components/Layout";
import styles from "./QuienesSomos.module.css";

const QuienesSomos = () => {
  return (
    <Layout>
      <div className={styles["quienes-somos-container"]}>
        <div className={styles["titulo-principal"]}>
          <img  className={styles["img-quienesSomos"]} src="public/QUIENES SOMOS BANNER.png" alt="Quienes Somos"  />
        </div>
        <div className={styles["mision-container"]}>
          <div className={styles["imagen-container"]}>
            <img className={styles["img-mision"]} src="public/METAS-ICON_WEB.png"  alt="Misión" />
          </div>
          <div className={styles["text-container"]}>
            <h2 className={styles["titulo"]}>Misión</h2>
            <p className={styles["texto"]}>
              Contribuir con la producción y difusión de las obras jurídicas que
              ayudan en el fortalecimiento y desarrollo del conocimiento de
              nuestra sociedad inmersa en el ámbito jurídico.
            </p>
          </div>
        </div>
        <div className={styles["vision-container"]}>
          <div className={styles["imagen-container"]}>
            <img className={styles["img-vision"]} src="public/VISIÓN-ICON_WEB.png" alt="Visión" />
          </div>
          <div className={styles["text-container"]}>
            <h2 className={styles["titulo"]}>Visión</h2>
            <p className={styles["texto"]}>
              Convertirnos en una editorial referente en la producción, edición
              y distribución de obras de gran calidad, a través del trabajo
              conjunto de los mejores autores y colaboradores, con el fin de que
              nuestro público pueda disfrutar de la lectura. Buscando la
              excelencia en todo lo que hacemos, desde el momento de la creación
              hasta su edición y distribución.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuienesSomos;
