import React from "react";
import Header from "./../NavBar/NavBar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app-layout container">{children}</div>
    </>
  );
};

export default Layout;
