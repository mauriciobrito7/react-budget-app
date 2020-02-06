import React, { useContext } from "react";
import Navbar from "./Navbar";
import "./Layout.scss";
import { IoMdMoon } from "react-icons/io";
import { ThemeContext } from "../App";
import SunIcon from "../svg/Gradient-Sun.svg";

function Layout({ children }) {
  // Theme
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div className="layout">
      <button className={`theme btn btn-circle ${theme}`} onClick={handleTheme}>
        {theme === "" ? (
          <IoMdMoon className="icon-custom" />
        ) : (
          <img alt="icon" src={SunIcon} className="icon-custom" />
        )}
      </button>
      <div className="children">{children}</div>
      <Navbar theme={theme} />
    </div>
  );
}

export default Layout;
