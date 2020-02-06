import React, { useContext } from "react";

// Styles
import "./ExpenseItem.scss";
import { ThemeContext } from "../App";

// Icons
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense;
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`item ${theme}`}>
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        voluptatibus aperiam, commodi fuga exercitationem consequatur. Mollitia
        perspiciatis rerum, assumenda porro, itaque error sint eligendi earum
        incidunt molestiae cum voluptas rem.
      </div>
      <div className="menu">
        <span className="label">Esencial</span>
        <span className="date">20/01/2020</span>
        <button
          onClick={() => handleEdit(id)}
          className={`btn btn-circle__small ${theme}`}
        >
          <IoMdCreate className="icon-custom btn-edit" />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className={`btn btn-circle__small ${theme}`}
        >
          <IoMdTrash className="icon-custom btn-delete" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
