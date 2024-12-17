import React from "react";
import styles from "./ProductsCards.module.css";
import arrayNavOptions from "../assets/NavOptions.js";
import CardsSection from "./SectionCards";
import { AdsOptions } from "../assets/HeroOptions.js";
interface ProductsCardProps {
  section: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ section }) => {
  if (section === "") {
    let imageIndex = 0;
    return (
      <div className={styles["products-container"]}>
        {arrayNavOptions.map((option, index) => {
          const shouldShowImage = (index + 1) % 2 === 0;
          let image = "";
          if (shouldShowImage) {
            const heroOption = AdsOptions[imageIndex];
            image = heroOption.imgUrl;
            imageIndex++;
            if (imageIndex >= AdsOptions.length) {
              imageIndex = 0;
            }
          }
          return (
            <React.Fragment key={option.text}>
              <CardsSection section={option.text} />
              {shouldShowImage && (
                <div className={styles["image-container"]}>
                  <img
                    src={image}
                    alt={`Ads ${imageIndex + 1}`}
                    className={styles["Ads-img"]}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
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
