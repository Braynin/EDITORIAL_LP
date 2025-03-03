import Layout from "../components/Layout";
import styles from "./TerminosYCondiciones.module.css";

const TerminosYCondiciones = () => {
  return (
    <>
      <Layout>
        <div className={styles["terminosYCondiciones-container"]}>
          <div className={styles["title-containerTerminos"]}>
            <h1 className={styles["title-terminos"]}>
              Términos y Condiciones
            </h1>
          </div>

          <div className={styles["text-containerTerminos"]}>
            <p className={styles["text-terminos"]}>
              En Editorial LP S.A.C., con RUC: 20612237264, nos complace ofrecerte acceso a nuestro sitio web. Antes de utilizar nuestros servicios, te invitamos a leer detenidamente estos Términos y Condiciones, ya que al acceder a nuestro sitio, aceptas todos los términos y condiciones establecidos en este acuerdo.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>1. Aceptación de los Términos</h3>
            <p className={styles["text-terminos"]}>
              Al acceder y utilizar el sitio web de Editorial LP S.A.C., el usuario acepta y se compromete a cumplir con los Términos y Condiciones aquí establecidos. Si no estás de acuerdo con alguno de los términos, te recomendamos no utilizar nuestro sitio.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>2. Modificaciones a los Términos</h3>
            <p className={styles["text-terminos"]}>
              Editorial LP S.A.C. se reserva el derecho de modificar, actualizar o cambiar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor en el momento en que sean publicados en nuestro sitio web.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>3. Uso del Sitio Web</h3>
            <p className={styles["text-terminos"]}>
              El usuario se compromete a utilizar el sitio web únicamente para fines lícitos y de acuerdo con las leyes vigentes en Perú. Queda prohibido el uso del sitio para realizar actividades que infrinjan derechos de propiedad intelectual, seguridad, privacidad o que de alguna manera afecten el buen funcionamiento del sitio.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>4. Propiedad Intelectual</h3>
            <p className={styles["text-terminos"]}>
              Todo el contenido del sitio web de Editorial LP S.A.C. (incluyendo textos, imágenes, logos, gráficos, íconos, etc.) está protegido por derechos de propiedad intelectual. El usuario se compromete a no reproducir, distribuir, modificar ni explotar el contenido del sitio sin autorización expresa de Editorial LP S.A.C.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>5. Limitación de Responsabilidad</h3>
            <p className={styles["text-terminos"]}>
              Editorial LP S.A.C. no será responsable por cualquier daño directo, indirecto, incidental, especial o consecuente que surja del uso o la incapacidad de usar el sitio web, ni por cualquier error u omisión en el contenido del sitio.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>6. Enlaces a Terceros</h3>
            <p className={styles["text-terminos"]}>
              Nuestro sitio puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados solo para tu conveniencia. Editorial LP S.A.C. no tiene control sobre el contenido de estos sitios y no asume ninguna responsabilidad por el mismo.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>7. Privacidad y Protección de Datos</h3>
            <p className={styles["text-terminos"]}>
              La privacidad y protección de tus datos personales es fundamental para nosotros. Al utilizar nuestro sitio, aceptas nuestra <a href="/politica-de-privacidad" className={styles["privacy-link"]}>Política de Privacidad</a>, que detalla cómo recopilamos, utilizamos y protegemos tu información personal.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>8. Resolución de Disputas</h3>
            <p className={styles["text-terminos"]}>
              Cualquier disputa relacionada con el uso de este sitio será resuelta bajo las leyes de la República del Perú. En caso de que surja una controversia, ambas partes se comprometen a resolverla de manera amistosa y, si no fuera posible, a someterse a la jurisdicción de los tribunales competentes en la ciudad de Lima, Perú.
            </p>

            <h3 className={styles["tit-txt-terminos"]}>9. Contacto</h3>
            <p className={styles["text-terminos"]}>
              Si tienes alguna pregunta sobre estos Términos y Condiciones, por favor, contáctanos a través de los siguientes medios:
            </p>
            <ul className={styles["list-terminos"]}>
              <li className={styles["li-terminos"]}><strong className={styles["bold"]}>Email:</strong> editorial@lpderecho.pe</li>
              <li className={styles["li-terminos"]}><strong className={styles["bold"]}>Teléfono:</strong> +51 931 133 139</li>
              <li className={styles["li-terminos"]}><strong className={styles["bold"]}>Dirección:</strong> Av. Faustino Sánchez Carrión Nro. 607 Int. 502 (Edificio) Lima - Lima - Jesús María, Perú</li>
            </ul>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default TerminosYCondiciones;
