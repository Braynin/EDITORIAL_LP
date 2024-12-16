import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonWhatsapp from "../components/ButtonWhatsapp";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <ButtonWhatsapp />

    </>
  );
};

export default Layout;
