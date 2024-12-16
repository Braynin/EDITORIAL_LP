import { Hero } from "./Hero.js";
import ProductsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainIndex() {
  return (
    <>
      <Hero />
      <ProductsCard section={""} />
      <Offers />
    </>
  );
}
export default MainIndex;
