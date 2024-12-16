import ProductsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainSection({ section }) {
  return (
    <>
      <ProductsCard section={section} />
      <Offers />
    </>
  );
}
export default MainSection;
