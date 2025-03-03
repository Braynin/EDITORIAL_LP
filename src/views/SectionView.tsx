import { useLocation } from "react-router-dom";
import Layout from "../components/Layout.tsx";
import MainSection from "../components/MainSection.tsx";
import Catalogos from "../components/CatalogoBtn.tsx";

const SectionView: React.FC = () => {
  const location = useLocation();
  const section = location.pathname.replace(/^\/|\/$/g, "");
  return (
    <>
      <Layout>
        <MainSection section={section} />
        <Catalogos />
      </Layout>
    </>
  );
};

export default SectionView;
