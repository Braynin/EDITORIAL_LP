import Breadcrumb from "./Breadcrumb.tsx";
import ProductsCard from "./ProductsCard.tsx";
import Offers from "./Offers.tsx";

function MainSection({ section }: { section: string }) {
  return (
    <>
      <Breadcrumb section={section} />
      <ProductsCard section={section} />
      <Offers />
    </>
  );
}
export default MainSection;
