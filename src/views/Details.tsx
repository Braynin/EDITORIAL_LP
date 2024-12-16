/*Components*/
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout.tsx";
import MainDetails from "../components/MainDetails.tsx";

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
      </Layout>
    </>
  );
}
export default Details;
