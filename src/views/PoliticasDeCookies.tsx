import Layout from "../components/Layout";
import styles from "./PoliticasDePrivacidad.module.css";

const PoliticasDeCookies = () => {
  return (
    <>
      <Layout>
        <div className={styles["politicasDePrivacidad-container"]}>
          <div className={styles["title-containerPoliticas"]}>
            <h1 className={styles["title-politicas"]}>
              Política de Cookies
            </h1>
          </div>

          <div className={styles["text-containerPoliticas"]}>
            <p className={styles["text-politicas"]}>
              En EDITORIAL LP S.A.C. (RUC: 20612237264) utilizamos cookies para
              mejorar la experiencia de usuario, analizar el tráfico de nuestro
              sitio web y personalizar el contenido que te mostramos. Al
              continuar navegando en nuestro sitio web, aceptas el uso de
              cookies según lo dispuesto en esta Política de Cookies.
            </p>

            <p className={styles["text-politicas"]}>
              Te invitamos a leer esta política cuidadosamente para comprender
              nuestras prácticas en relación con las cookies. Al acceder y
              utilizar nuestro sitio web, aceptas los términos de esta política.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>
              ¿Qué son las cookies?
            </h3>
            <p className={styles["text-politicas"]}>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo (ordenador, teléfono móvil o tablet) cuando visitas un
              sitio web. Estos archivos permiten que el sitio web reconozca tu
              dispositivo y te ofrezca una experiencia más personalizada y
              eficiente.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>
              ¿Para qué usamos las cookies?
            </h3>
            <p className={styles["text-politicas"]}>
              Utilizamos las cookies para los siguientes fines:
            </p>
            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>
                  Cookies estrictamente necesarias:
                </strong>{" "}
                Son esenciales para que puedas navegar por el sitio web y
                utilizar sus funciones. Estas cookies no recopilan información
                personal sobre ti.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>
                  Cookies de rendimiento:
                </strong>{" "}
                Recogen información sobre cómo los usuarios interactúan con
                nuestro sitio web (por ejemplo, páginas más visitadas, errores
                de carga, etc.) para mejorar el rendimiento y la funcionalidad.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Cookies funcionales:</strong>
                Permiten recordar tus preferencias (como el idioma o la región)
                y ofrecerte características mejoradas y personalizadas.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>
                  Cookies publicitarias:
                </strong>{" "}
                Se utilizan para mostrarte anuncios relevantes según tus
                intereses y comportamientos en línea, tanto en nuestro sitio
                como en otros sitios web.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Cookies de análisis:</strong>{" "}
                Nos ayudan a analizar el uso que los usuarios hacen de nuestro
                sitio para mejorar su experiencia y funcionalidad.
              </li>
            </ul>

            <h3 className={styles["tit-txt-politicas"]}>
              ¿Qué cookies utilizamos?
            </h3>
            <p className={styles["text-politicas"]}>
              A continuación, te mostramos una lista de las cookies que usamos
              en nuestro sitio web:
            </p>
            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>_ga:</strong> Esta cookie es
                instalada por Google Analytics. Se utiliza para calcular datos
                acerca de los usuarios, sesiones, y campañas de marketing. La
                cookie guarda información de forma anónima y asigna un número
                generado aleatoriamente para identificar a los usuarios
                visitantes. Duración: 2 años.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>_gid:</strong> Instalada por
                Google Analytics, esta cookie almacena y actualiza un valor
                único para cada página visitada. Duración: 24 horas.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>_gat:</strong> También es
                instalada por Google Analytics para ayudar a la tasa de
                solicitud de los usuarios. Duración: 1 minuto.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>_fbp:</strong> Utilizada por
                Facebook para ofrecer una serie de productos publicitarios, como
                ofertas en tiempo real de terceros anunciantes. Duración: 3
                meses.
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>IDE:</strong> Esta cookie
                está asociada con Google DoubleClick y se usa para registrar y
                reportar las acciones del usuario después de ver o hacer clic en
                los anuncios del proveedor, con el fin de medir la efectividad
                de un anuncio y presentar anuncios dirigidos al usuario.
                Duración: 1 año.
              </li>
            </ul>

            <h3 className={styles["tit-txt-politicas"]}>
              ¿Cómo controlar las cookies?
            </h3>
            <p className={styles["text-politicas"]}>
              Puedes controlar y gestionar las cookies a través de la
              configuración de tu navegador. A continuación, te mostramos cómo
              hacerlo en algunos de los navegadores más comunes:
            </p>
            <ul className={styles["list-politicas"]}>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Google Chrome:</strong> Para
                gestionar las cookies en Google Chrome, abre el menú de Chrome y
                ve a "Configuración". Luego, haz clic en "Privacidad y
                seguridad" y selecciona "Cookies y otros datos de sitio". Desde
                allí podrás gestionar las cookies.{" "}
                <a
                  className={styles["link-politicas"]}
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Más información.
                </a>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Mozilla Firefox:</strong> En
                Mozilla Firefox, abre el menú de opciones y selecciona
                "Privacidad y seguridad". Desde ahí podrás gestionar las
                cookies.{" "}
                <a
                  className={styles["link-politicas"]}
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Más información.
                </a>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Safari:</strong> En Safari,
                abre el menú de "Preferencias" y ve a la pestaña "Privacidad",
                donde podrás gestionar las cookies.{" "}
                <a
                  className={styles["link-politicas"]}
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Más información.
                </a>
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Microsoft Edge:</strong> Abre
                "Configuración" y selecciona "Privacidad, búsqueda y servicios".
                Desde ahí podrás gestionar las cookies.{" "}
                <a
                  className={styles["link-politicas"]}
                  href="https://support.microsoft.com/es-es/microsoft-edge/manage-cookies-and-site-data-in-microsoft-edge-9a51f38f-b2a8-4748-8a8b-3d1a84413f2e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Más información.
                </a>
              </li>
            </ul>

            <p className={styles["text-politicas"]}>
              Si decides bloquear las cookies, algunas funciones del sitio web
              pueden verse afectadas y algunas partes de la página podrían no
              funcionar correctamente.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>Consentimiento</h3>
            <p className={styles["text-politicas"]}>
              Al utilizar nuestro sitio web, aceptas el uso de cookies según lo
              descrito en esta política. Si no estás de acuerdo con el uso de
              cookies, te recomendamos que ajustes las preferencias de tu
              navegador o que dejes de utilizar el sitio.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>
              Cambios en nuestra Política de Cookies
            </h3>
            <p className={styles["text-politicas"]}>
              Nos reservamos el derecho de modificar esta Política de Cookies en
              cualquier momento. Cualquier cambio será publicado en esta página
              con una nueva fecha de actualización. Te recomendamos que revises
              regularmente esta política para estar informado sobre cómo
              utilizamos las cookies.
            </p>

            <h3 className={styles["tit-txt-politicas"]}>Contacto</h3>
            <p className={styles["text-politicas"]}>
              Si tienes alguna pregunta sobre nuestra Política de Cookies, no
              dudes en ponerte en contacto con nosotros en:
            </p>
            <ul className={styles["list-politicas"]}>
            <li className={styles["li-terminos"]}><strong className={styles["bold"]}>Email:</strong> editorial@lpderecho</li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Teléfono:</strong> +51
                931 133 139
              </li>
              <li className={styles["li-politicas"]}>
                <strong className={styles["bold"]}>Dirección:</strong> Av.
                Faustino Sánchez Carrión Nro. 607 Int. 502 (Edificio) Lima -
                Lima - Jesús María, Perú
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PoliticasDeCookies;
