import React from "react";

// Icons
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
        <span className="date">20/01/2020</span>
      </div>
      <div className="menu">
        <button onClick={() => handleEdit(id)} className="edit-btn">
          <IoMdCreate className="btn-icon" />
        </button>
        <button onClick={() => handleDelete(id)} className="delete-btn">
          <IoMdTrash className="btn-icon" />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
