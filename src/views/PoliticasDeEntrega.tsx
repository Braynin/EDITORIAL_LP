
import Layout from "../components/Layout";
import styles from "./PoliticasDeEntrega.module.css";

const PoliticasDeEntrega = () => {
  return (
    <Layout>
      <div className={styles["politicasDeEntrega-container"]}>
        <div className={styles["title-containerEntrega"]}>
          <h1 className={styles["title-entrega"]}>Políticas de Entrega</h1>
        </div>

        <div className={styles["text-containerEntrega"]}>
          <p className={styles["text-entrega"]}>
            En Editorial LP S.A.C., nos complace ofrecer a nuestros clientes
            diversos métodos de entrega para asegurar que recibas tus productos
            de manera rápida y conveniente. A continuación, te detallamos nuestras
            políticas de entrega:
          </p>

          <h3 className={styles["tit-txt-entrega"]}>1. Entregas a Provincia</h3>
          <p className={styles["text-entrega"]}>
            Realizamos envíos a todas las provincias de Perú, diferenciando dos
            modalidades según la dirección proporcionada por el cliente:
          </p>
          
          <h4 className={styles["tit-txt-entrega-h4"]}>- Envíos a Domicilio</h4>
          <p className={styles["text-entrega"]}>
            Para aquellos clientes que prefieren recibir sus productos en la comodidad de su hogar o negocio,
            ofrecemos el servicio de envío a domicilio. Este servicio es realizado a través de Olva Courier
            para envíos al por menor y Marvisur para envíos al por mayor. El tiempo de entrega generalmente
            varía entre 3 a 7 días hábiles, dependiendo de la ubicación y la disponibilidad de los productos.
          </p>

          <h4 className={styles["tit-txt-entrega-h4"]}>- Envíos a Agencia</h4>
          <p className={styles["text-entrega"]}>
            Si el cliente opta por recoger su pedido en una agencia, el envío se realiza también a través de
            Olva Courier o Marvisur, según corresponda. El tiempo estimado de entrega a las agencias es
            de 3 a 7 días hábiles, y el cliente podrá recoger su paquete en la agencia más cercana,
            según la disponibilidad y la ubicación proporcionada al momento de realizar el pedido.
          </p>

          <h3 className={styles["tit-txt-entrega"]}>2. Entregas a Lima Metropolitana</h3>
          <p className={styles["text-entrega"]}>
            Para los envíos dentro de los distritos de Lima Metropolitana, contamos con un servicio de Courier propio,
            lo que nos permite ofrecer entregas rápidas y personalizadas.
          </p>
          
          <h4 className={styles["tit-txt-entrega-h4"]}>- Tiempo de entrega</h4>
          <p className={styles["text-entrega"]}>
            Los pedidos realizados para Lima Metropolitana generalmente se entregan en un plazo de 1 a 3 días hábiles
            después de la confirmación del pedido. El tiempo exacto dependerá de la dirección de entrega y la
            disponibilidad de los productos en nuestro inventario.
          </p>

          <h3 className={styles["tit-txt-entrega"]}>3. Recojo en Oficina</h3>
          <p className={styles["text-entrega"]}>
            Si prefieres recoger tu pedido directamente en nuestras oficinas, puedes hacerlo en el siguiente horario:
          </p>
          <ul className={styles["list-entrega"]}>
            <li className={styles["li-entrega"]}><span className={styles["bold"]}>Lunes a Viernes:</span> 9:00 a.m. a 5:00 p.m.</li>
            <li className={styles["li-entrega"]}><span className={styles["bold"]}>Sábados:</span> 9:00 a.m. a 1:00 p.m.</li>
          </ul>
          <p className={styles["text-entrega"]}>
            Los recojos están sujetos a la disponibilidad de los productos en nuestro inventario.
            Para evitar inconvenientes, te recomendamos que confirmes la disponibilidad de los productos antes
            de acudir a la oficina, ya sea por teléfono o correo electrónico.
          </p>

          <h3 className={styles["tit-txt-entrega"]}>4. Dirección de la Oficina</h3>
          <p className={styles["text-entrega"]}>
            La dirección de nuestra oficina para recojos es la siguiente:
          </p>
          <p className={styles["text-entrega"]}>
            Av. Faustino Sánchez Carrión Nro. 607 Int. 502 (Edificio), Lima - Lima - Jesús María, Perú
          </p>

          <h3 className={styles["tit-txt-entrega"]}>5. Costos de Envío</h3>
          <p className={styles["text-entrega"]}>
            - Envíos a Lima Metropolitana: El costo de envío dentro de Lima Metropolitana depende de la distancia
            y el peso del paquete. Te informaremos el costo exacto del envío antes de completar la compra.
          </p>
          <p className={styles["text-entrega"]}>
            - Envíos a Provincias: Los costos de envío a las provincias variarán dependiendo de la modalidad
            de entrega seleccionada (a domicilio o a agencia) y la ubicación de destino. Te informaremos el costo
            específico del envío al momento de la compra.
          </p>

          <h3 className={styles["tit-txt-entrega"]}>6. Condiciones Generales</h3>
          <p className={styles["text-entrega"]}>
            - Tiempo estimado de entrega: Los plazos de entrega son aproximados. Factores externos como condiciones
            climáticas o situaciones imprevistas pueden afectar el tiempo de entrega.
          </p>
          <p className={styles["text-entrega"]}>
            - Retrasos o problemas con la entrega: En caso de que se produzca un retraso o cualquier inconveniente
            con la entrega, por favor, comunícate con nuestro servicio de atención al cliente. Estamos disponibles
            para ayudarte a resolver cualquier problema lo más rápido posible.
          </p>
          <p className={styles["text-entrega"]}>
            - Entrega fallida: Si no puedes recibir el paquete en el primer intento de entrega, es necesario que
            te pongas en contacto con nosotros lo antes posible para coordinar una nueva entrega o reprogramar la
            recogida. Puedes contactarnos a través de nuestros canales de atención:
          </p>
          <ul className={styles["list-entrega"]}>
            <li className={styles["li-entrega"]}><span className={styles["bold"]}>Email:</span> editorial@lpderecho.com</li>
            <li className={styles["li-entrega"]}><span className={styles["bold"]}>Teléfono:</span> 931 133 139</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PoliticasDeEntrega;
