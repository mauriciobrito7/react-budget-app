import React from "react";

// Styles
import "./Navbar.scss";

// Icons
import { MdHome, MdAdd, MdInsertChart } from "react-icons/md";

function Navbar({ theme }) {
  return (
    <div className={`navbar ${theme}`}>
      <div className={`navbar-menu ${theme}`}>
        <button className={` btn btn-circle ${theme}`}>
          <MdHome className="home icon-custom" />
        </button>
        <button className={` btn btn-circle ${theme}`}>
          <MdAdd className="new icon-custom" />
        </button>
        <button className={`s btn btn-circle ${theme}`}>
          <MdInsertChart className="chart icon-custom" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
