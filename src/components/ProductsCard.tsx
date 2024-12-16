import React from "react";
import styles from "./ProductsCards.module.css";
import arrayNavOptions from "../assets/NavOptions.js";
import CardsSection from "./SectionCards";

interface ProductsCardProps {
  section: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ section }) => {
  if (section === "") {
    return (
      <div className={styles["products-container"]}>
        {arrayNavOptions.map((option) => (
          <CardsSection section={option.text} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles["products-container"]}>
        <CardsSection section={section} />
      </div>
    );
  }
};

export default ProductsCard;
