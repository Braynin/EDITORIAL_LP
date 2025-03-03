import Layout from "../../src/components/Layout.tsx";

import MainIndex from "../../src/components/MainIndex.tsx";
import Catalogos from "../../src/components/CatalogoBtn.tsx";

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
