import { useState } from "react";
import SearchButton from "./SearchButton";
import styles from "./SearchBar.module.css";
import normalizeText from "../assets/NormalizeText.js";
import arrayProducts from "../assets/ProductsOptions.js";
import Swal from "sweetalert2";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (searchText) => {
    const filtered = arrayProducts.filter((product) =>
      normalizeText(product.nombre).includes(normalizeText(searchText))
    );

    if (filtered.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Producto no encontrado",
        text: "No se encontraron productos con ese nombre. Intenta otra búsqueda.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });
    } else {
      // Construye la URL de búsqueda
      const query = encodeURIComponent(searchText.trim());
      window.location.href = `/search?q=${query}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(searchText); // Llama a la función de búsqueda si se presiona Enter
    }
  };

  return (
    <div className={styles["search-form"]}>
      
      <input
        className={styles["search-input"]}
        type="text"
        placeholder="Buscar libros"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
        
      />
      <SearchButton onClick={() => handleSearch(searchText)} />
    </div>
  );
};

export default SearchBar;
