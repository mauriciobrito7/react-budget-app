import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Styles
import "./ExpenseItem.scss";
// Contexts
import { ThemeContext } from "../../App";
import { expenseContext } from "../../context/ExpenseContext/ExpenseContext";
import { DELETE } from "../../context/ExpenseContext/types";

// Icons
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const ExpenseItem = ({ expense, setAlert }) => {
  const { id, charge, amount, label, description, date } = expense;
  // Contexts
  const { dispatch } = useContext(expenseContext);
  const { theme } = useContext(ThemeContext);

  // History
  const history = useHistory();

  // Events
  const handleDelete = () => {
    handleAlert("danger", "gasto eliminado");
    dispatch({ type: DELETE, id });
  };

  const handleEdit = () => {
    history.push(`new/${id}`);
  };

  const idTimeoutAlert = setTimeout(() => {
    setAlert({ show: false });
  }, 2000);

  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });

    // hide alert past one second
    return idTimeoutAlert;
  };

  useEffect(() => {
    return () => {
      console.log("fui destruido");
      //clearInterval(idTimeoutAlert);
    };
  }, []);

  return (
    <>
      <li className={`item ${theme}`}>
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div className="description">{description}</div>
        <div className="menu">
          <span className="label">{label}</span>
          <span className="date">{date}</span>
          <button
            onClick={() => handleEdit()}
            className={`btn btn-circle__small ${theme}`}
          >
            <IoMdCreate className="icon-custom btn-edit" />
          </button>
          <button
            onClick={() => handleDelete()}
            className={`btn btn-circle__small ${theme}`}
          >
            <IoMdTrash className="icon-custom btn-delete" />
          </button>
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
