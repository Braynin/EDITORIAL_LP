import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrayProducts from "../assets/ProductsOptions.js";
import styles from "./DetailsCard.module.css";
import ShareButton from "./ShareButton.tsx";



function DetailsCard() {
  const Query = new URLSearchParams(useLocation().search);
  const id = Query.get("id");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const product = arrayProducts.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      setPrice(product.precioMenor);
      setPrice(product.precioMenor);
    }
  }, [product]);

  const changePrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    if (product) {
      setPrice(newQuantity * product.precioMenor);
    }
  };

  const changeMini = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const selectedSrc = (event.target as HTMLImageElement).src;
    const bigSelector = document.querySelector<HTMLImageElement>("#big-img");
    if (bigSelector) {
      bigSelector.src = selectedSrc;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();

    // Coordenadas relativas al contenedor
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    // Convertir las coordenadas relativas en porcentajes
    const x = (offsetX / width) * 100;
    const y = (offsetY / height) * 100;

    setZoomPosition({ x, y });
  };

  const renderMiniImages = (product) => {
    return product.imagen.map((img, index) => (
      <img
        key={index}
        className={styles["mini-img"]}
        src={img}
        alt={product.nombre}
        onClick={changeMini}
      />
    ));
  };
  const firstWord = product?.nombre?.split(" ")[0];
  const showPresentacion = firstWord === "Código" || firstWord === "Coleccion";
  const productTitle = product
  ? `${product.nombre}${showPresentacion && product.presentacion ? ` ${product.presentacion}` : ""}`
  : "Producto no encontrado";

  return (
    
    <div className={styles["details-container"]}>
      <section className={styles["product-images-checkout-block"]}>
        <div className={styles["product-images-block"]}>
          <div className={styles["product-images"]}>
            {renderMiniImages(product)}
          </div>

          <div
            className={`${styles["big-img-container"]} ${
              isZoomed ? styles["zoomed"] : ""
            }`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              className={styles["big-img"]}
              id="big-img"
              src={product.imagen[0]}
              alt={product.nombre}
              style={
                isZoomed
                  ? {
                      transform: `scale(2) translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }
                  : undefined
              }
            />
          </div>
        </div>

        <div className={styles["product-checkout-block"]}>
          <div className={styles["checkout-container"]}>
            <h1 className={styles["checkout-total-label"]}> {productTitle}
            </h1>
            <p className={styles["checkout-autor"]}>{product.autor}</p>
            <h2 id="price" className={styles["checkout-total-price"]}>
              S/.{price}
            </h2>
            <div className={styles["checkout-process"]}>  
            <div className={styles["top"]}>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={changePrice}
                  className={styles["checkout-quantity"]}
                />
              </div>
              <a
                  href="https://wa.me/939613209"
                  className={styles["cart-btn"]}
                >
                 COMPRA AQUÍ
                </a>
                
            </div>

            <ul className={styles["checkout-policy-list"]}>
              <li>
                <a className={styles["policy-icon"]} href="#">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className={styles["icon icon-tabler icons-tabler-outline icon-tabler-file-text"]}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>
                </a>
                <p className={styles["policy-desc"]}>
                  Descarga el índice
                </p>
              </li> 
                
             <ShareButton />
            </ul>
           
            
          </div>
        </div>
      </section>

      <section className={styles["container-sipnosis-information"]}>
        <div className={styles["product-sipnosis-block"]}>
          <h2 className={styles["product-title"]}>Sinopsis:</h2>
          <span className={styles["product-sipnosis"]}>{product.sipnosis}</span>
        </div>

        <div className={styles["product-information-block"]}>
          <ul>
            <li className={styles["product-title"]}>Detalles de producto:</li>
          </ul>
          <ul className={styles["product-details"]}>
            <li className={styles["product-description"]}>
              <strong>ISBN: </strong> {product.isbn}
            </li>
            <li className={styles["product-description"]}>
              <strong>Autor: </strong> {product.autor}
            </li>
            <li className={styles["product-description"]}>
              <strong>Editorial: </strong> {product.editorial}
            </li>
            <li className={styles["product-description"]}>
              <strong>Año: </strong> {product.año}
            </li>
            <li className={styles["product-description"]}>
              <strong>Páginas: </strong> {product.paginas}
            </li>
            <li className={styles["product-description"]}>
              <strong>Presentación: </strong> {product.presentacion}
            </li>
            <li className={styles["product-description"]}>
              <strong>Peso: </strong> {product.peso}
            </li>
            <li className={styles["product-description"]}>
              <strong>Alto: </strong> {product.alto}
            </li>
            <li className={styles["product-description"]}>
              <strong>Ancho: </strong> {product.ancho}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default DetailsCard;
