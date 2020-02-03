import React from "react";
import Navbar from "./Navbar";
import "./Layout.scss";
function Layout({ theme, children }) {
  return (
    <div className="layout">
      <div className="children">{children}</div>
      <Navbar theme={theme} />
    </div>
  );
}

export default Layout;
