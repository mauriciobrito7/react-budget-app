import React, { useContext } from "react";

// Styles
import "./ExpenseItem.scss";
import { ThemeContext } from "../App";

// Icons
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const ExpenseItem = ({ expense }) => {
  const { charge, amount, label, description } = expense;
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`item ${theme}`}>
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div className="description">{description}</div>
      <div className="menu">
        <span className="label">{label}</span>
        <span className="date">20/01/2020</span>
        <button className={`btn btn-circle__small ${theme}`}>
          <IoMdCreate className="icon-custom btn-edit" />
        </button>
        <button className={`btn btn-circle__small ${theme}`}>
          <IoMdTrash className="icon-custom btn-delete" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
