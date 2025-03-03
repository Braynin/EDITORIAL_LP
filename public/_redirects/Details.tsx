/*Components*/
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../../src/components/Layout.tsx";
import MainDetails from "../../src/components/MainDetails.tsx";
import Catalogos from "../../src/components/CatalogoBtn.tsx";

function Details() {
  const { id } = useParams(); // Obtiene el id de la ruta

  useEffect(() => {
    // Desplaza hacia la parte superior cada vez que cambia el id
    window.scrollTo(0, 0);
  }, [id]); // Escucha cambios en el id
  return (
    <>
      <Layout>
        <MainDetails />
        <Catalogos />
      </Layout>
    </>
  );
}
export default Details;
