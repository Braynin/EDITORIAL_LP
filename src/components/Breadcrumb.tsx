import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import { Products } from "../assets/ProductsOptions.ts";

interface BreadcrumbsProps {
  section: string | undefined; // section debería ser un string
  Product?: Products;
}

const Breadcrumb: React.FC<BreadcrumbsProps> = ({ section, Product }) => {
  return (
    <div className={styles["breadcrumb"]}>
      <Link to="/">Inicio</Link>
      <IconChevronRight stroke={2} className={styles["icon"]} />
      <Link to={`/${section}`}>{section}</Link>
      {Product && (
        <>
          <IconChevronRight stroke={2} className={styles["icon"]} />{" "}
          {Product.nombreCard}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
