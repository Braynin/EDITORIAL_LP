import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className={styles["header"]}>
        <Header />
      </header>
      <main className={styles["main"]}>{children}</main>
      <footer>
        <Footer />
      </footer>
      <ButtonWhatsapp />
    </>
  );
};

export default Layout;
