import React from "react";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <nav className="layout">
      <div className="main-content">
        <main className="content"> {children} </main>
      </div>
      <Footer />
    </nav>
  );
};

export default Layout;
