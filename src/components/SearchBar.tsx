import { useState } from "react";
import SearchButton from "./SearchButton";
import styles from "./SearchBar.module.css";
import normalizeText from "../assets/NormalizeText.ts";
import { arrayProducts } from "../assets/ProductsOptions.ts";
import Swal from "sweetalert2";
import { IconX } from "@tabler/icons-react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado de apertura del menú
  };
  const handleSearch = (searchText: string) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(searchText); // Llama a la función de búsqueda si se presiona Enter
    }
  };

  return (
    <>
      <div className={styles["menu-botton"]}>
        {menuOpen ? (
          <IconX stroke={3.5} onClick={() => toggleMenu()} />
        ) : (
          <SearchButton onClick={() => toggleMenu()} />
        )}
      </div>
      <div
        className={`${styles["search-form"]} ${menuOpen ? styles["open"] : ""}`}
      >
        <div className={styles["search-input-container"]}>
          <input
            className={styles["search-input"]}
            type="text"
            placeholder="Buscar libros"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className={styles["search-button-container"]}>
            <SearchButton onClick={() => handleSearch(searchText)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
