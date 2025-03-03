import Layout from "../components/Layout.tsx";

import MainIndex from "../components/MainIndex.tsx";
import Catalogos from "../components/CatalogoBtn.tsx";

function Home() {
  return (
    <>
      <Layout>
        <MainIndex />
        <Catalogos />
      </Layout>
    </>
  );
}

export default Home;
