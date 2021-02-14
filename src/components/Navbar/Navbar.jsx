import React from "react";
import { Link, useHistory } from "react-router-dom";

// Styles
import "./Navbar.scss";

// Icons
import { MdHome, MdInsertChart } from "react-icons/md";
import add from "../../svg/add.svg";

function Navbar({ theme }) {
  const { location } = useHistory();

  return (
    <div className={`navbar ${theme}`}>
      <div className={`navbar-menu ${theme}`}>
        <Link to="/">
          <button className={` btn btn-circle ${theme}`}>
            <MdHome className="home icon-custom" />
          </button>
        </Link>
        <Link to={`${location.pathname === "/new" ? "/" : "/new"}`}>
          <button
            className={`btn btn-circle ${theme}  ${
              location.pathname === "/new" ? "rotate" : ""
            }`}
          >
            <img src={add} alt="button" className="new icon-custom" />
          </button>
        </Link>
        <button className={`btn btn-circle ${theme}`}>
          <MdInsertChart className="chart icon-custom" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
