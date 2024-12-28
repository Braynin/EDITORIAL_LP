import React from "react";
import styles from "./ProductsCards.module.css";
import arrayNavOptions from "../assets/NavOptions.js";
import CardsSection from "./SectionCards";
import { AdsOptions } from "../assets/HeroOptions.js";
import { Link } from "react-router-dom";
import { AdsMobileOptions } from "../assets/HeroOptions.js";
import { useState, useEffect } from "react";
interface ProductsCardProps {
  section: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ section }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const AdsOpt = isMobile ? AdsMobileOptions : AdsOptions;

  if (section === "") {
    let imageIndex = 0;
    return (
      <div className={styles["products-container"]}>
        {arrayNavOptions.map((option, index) => {
          const shouldShowImage = (index + 1) % 2 === 0;
          let image = "";
          if (shouldShowImage) {
            const heroOption = AdsOpt[imageIndex];
            image = heroOption.imgUrl;
            imageIndex++;
            if (imageIndex >= AdsOpt.length) {
              imageIndex = 0;
            }
          }
          return (
            <>
              <CardsSection section={option.text} />
              {shouldShowImage && (
                <div className={styles["image-container"]}>
                  <Link to={AdsOpt[imageIndex - 1].link}>
                    <img
                      src={image}
                      alt={`Ads ${imageIndex}`}
                      className={styles["Ads-img"]}
                      loading="lazy"
                    />
                  </Link>
                </div>
              )}
            </>
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
