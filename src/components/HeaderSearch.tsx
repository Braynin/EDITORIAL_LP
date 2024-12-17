import { Link } from "react-router-dom";
import styles from "./HeaderSearch.module.css";
import SearchBar from "./SearchBar.tsx";
import NavBar from "./NavBar.tsx";

function HeaderSearch() {
  return (
    <>
      <div className={styles["header-container"]}>
        <Link className={styles["logo-container"]} to="/">
          <img
            className={styles["header-logo"]}
            src="/public/LOGO EDITORIAL - ROJO.png"
            alt="Logo Lp"
          />
        </Link>
        <NavBar />
        <SearchBar />
      </div>
    </>
  );
}
export default HeaderSearch;
