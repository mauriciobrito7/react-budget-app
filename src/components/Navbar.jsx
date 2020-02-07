import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./Navbar.scss";

// Icons
import { MdHome, MdAdd, MdInsertChart } from "react-icons/md";

function Navbar({ theme }) {
  return (
    <div className={`navbar ${theme}`}>
      <div className={`navbar-menu ${theme}`}>
        <Link to="/">
          <button className={` btn btn-circle ${theme}`}>
            <MdHome className="home icon-custom" />
          </button>
        </Link>
        <Link to="new">
          <button className={` btn btn-circle ${theme}`}>
            <MdAdd className="new icon-custom" />
          </button>
        </Link>
        <button className={`s btn btn-circle ${theme}`}>
          <MdInsertChart className="chart icon-custom" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;