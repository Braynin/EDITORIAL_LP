// SearchResults.jsx o SearchResults.tsx
import { useLocation } from "react-router-dom";
import arrayProducts from "../assets/ProductsOptions.js";
import normalizeText from "../assets/NormalizeText.js";
import Layout from "../components/Layout.js";
import { Cards } from "../components/Card.tsx";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

  // Filtra los productos usando el query
  const filteredProducts = arrayProducts.filter((product) =>
    normalizeText(product.nombre).includes(normalizeText(query))
  );
  return (
    <>
      <Layout>
        <h1 className={styles["Sresults-title"]}>
          Resultados de la búsqueda: "{query}"
        </h1>
        <div className={styles["container-result"]}>
        {filteredProducts.length > 0 ? (
          <Cards array={filteredProducts} />
        ) : (
          <p>No se encontraron productos con ese nombre.</p>
        )}
        </div>
      </Layout>
    </>
  );
};

export default SearchResults;
