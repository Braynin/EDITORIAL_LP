import Layout from "../components/Layout";
import styles from "./PoliticasDePrivacidad.module.css";

const PoliticasDePrivacidad = () => {
  return (
    <>
      <Layout>
        <div className={styles["politicasDePrivacidad-container"]}>
          <div className={styles["title-containerPoliticas"]}>
            <h1 className={styles["title-politicas"]}>
              Política de Privacidad
            </h1>
          </div>

          <div className={styles["text-containerPoliticas"]}>
            <p className={styles["text-politicas"]}>
              En Editorial LP SAC, con RUC 20612237264, estamos comprometidos
              con la protección de la privacidad y los datos personales de nuestros
              usuarios. Esta Política de Privacidad describe cómo recopilamos,
              usamos, almacenamos, protegemos y compartimos la información
              personal de los usuarios que interactúan con nuestro sitio web.
            </p>

            <p className={styles["text-politicas"]}>
              Te invitamos a leer esta política cuidadosamente para comprender
              nuestras prácticas en relación con tus datos personales. Al acceder
              y utilizar nuestro sitio web, aceptas los términos de esta política.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>1. Información que recopilamos</h3>

            <p className={styles["text-politicas"]}>
              Recopilamos varios tipos de información para proporcionarte una
              experiencia personalizada y mejorar nuestros servicios. Esta
              información incluye:
            </p>

            <h3 className={styles["tit-txt-politicas"]}>Datos proporcionados directamente por el usuario:</h3>
            <p className={styles["text-politicas"]}>
              Cuando interactúas con nosotros, ya sea registrándote,
              suscribiéndote a nuestro boletín o contactándonos, podemos recopilar
              la siguiente información personal:
            </p>
            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Nombre completo</strong>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Dirección de correo electrónico</strong>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Dirección física (si aplica)</strong>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Número de teléfono</strong>
              </li>
            </ul>

            <h3 className={styles["tit-txt-politicas"]}>Datos de navegación y uso del sitio web:</h3>
            <p className={styles["text-politicas"]}>
              Al visitar nuestro sitio, podemos recopilar automáticamente ciertos
              datos relacionados con tu uso del mismo, tales como:
            </p>
            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Dirección IP</strong>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Tipo de navegador</strong>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Tiempo que pasas en el sitio</strong>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Ubicación geográfica aproximada</strong>
              </li>
            </ul>

            <h3 className={styles["tit-txt-politicas"]}>2. Uso de la información</h3>
            <p className={styles["text-politicas"]}>
              La información que recopilamos tiene diversas finalidades, entre las
              cuales se incluyen:
            </p>

            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Mejorar nuestros servicios:</strong> Para
                proporcionarte una experiencia más personalizada y optimizada al
                navegar por nuestro sitio.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Comunicaciones:</strong>
                <p className={styles["text-politicas"]}>
                  Para enviarte actualizaciones, noticias, promociones y otros
                  mensajes relacionados con nuestros servicios, siempre y cuando
                  hayas dado tu consentimiento para recibirlos.
                </p>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Seguridad y administración del sitio:</strong> Para
                mejorar la seguridad de nuestro sitio web y asegurarnos de que
                funcione correctamente.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Cumplimiento legal:</strong> Para cumplir
                con cualquier requisito legal aplicable, proteger nuestros derechos
                y resolver disputas.
              </li>
            </ul>

            <h3 className={styles["tit-txt-politicas"]}>3. Compartir y divulgar la información</h3>
            <p className={styles["text-politicas"]}>
              Nos comprometemos a no vender, alquilar ni compartir tus datos
              personales con terceros para fines comerciales. Sin embargo, podemos
              compartir tu información en los siguientes casos:
            </p>

            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Proveedores de servicios:</strong> Podemos compartir
                datos con proveedores de servicios externos que nos ayudan en la
                operación de nuestro sitio web.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Cumplimiento de la ley:</strong> Podemos
                divulgar tus datos personales cuando sea necesario para cumplir con
                una obligación legal.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>En caso de reorganización o venta:</strong> Si Editorial
                LP SAC participa en una fusión, adquisición o venta de activos, podemos
                transferir tu información personal a la entidad adquirente.
              </li>
            </ul>

            <h3 className={styles["tit-txt-politicas"]}>4. Seguridad de la información</h3>
            <p className={styles["text-politicas"]}>
              Nos tomamos muy en serio la seguridad de tus datos personales.
              Utilizamos medidas de seguridad razonables para proteger tu información.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>5. Derechos del usuario</h3>
            <p className={styles["text-politicas"]}>
              En todo momento, tienes derecho a controlar tus datos personales.
              Estos derechos incluyen:
            </p>

            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Acceso:</strong> Puedes solicitar una copia
                de los datos personales que tenemos sobre ti.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Rectificación:</strong> Puedes corregir
                cualquier dato incorrecto o desactualizado.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Eliminación:</strong>
                <p className={styles["text-politicas"]}>
                  Puedes solicitarnos que eliminemos tus datos personales si ya no
                  son necesarios para los fines por los que fueron recogidos.
                </p>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Oposición al procesamiento:</strong>
                <p className={styles["text-politicas"]}>
                  Puedes oponerte al procesamiento de tus datos personales en
                  circunstancias particulares.
                </p>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Revocación del consentimiento:</strong>
                <p className={styles["text-politicas"]}>
                  Si nos has dado tu consentimiento para procesar tus datos, puedes
                  revocar ese consentimiento en cualquier momento.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PoliticasDePrivacidad;
