import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../../App";
import sunny from "../../svg/sunny.svg";

function Layout({ children }) {
  // Theme
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className="main">
      <button className={`theme btn btn-circle ${theme}`} onClick={handleTheme}>
        {theme === "" ? (
          <IoMdMoon className="icon-custom" />
        ) : (
          <img alt="icon" src={sunny} className="icon-custom" />
        )}
      </button>
      <div className="layout">
        <div className="children">{children}</div>
        <Navbar theme={theme} />
      </div>
    </div>
  );
}

export default Layout;
