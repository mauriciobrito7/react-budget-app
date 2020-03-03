import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components
import Alert from "./Alert";

// Styles
import "./ExpenseItem.scss";
// Contexts
import { ThemeContext } from "../App";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";
import { DELETE } from "../context/ExpenseContext/types";

// Icons
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const ExpenseItem = ({ expense }) => {
  const { id, charge, amount, label, description, date } = expense;
  // Contexts
  const { dispatch } = useContext(expenseContext);
  const { theme } = useContext(ThemeContext);

  // History
  const history = useHistory();

  // alert
  const [alert, setAlert] = useState({
    show: false
  });

  // Events
  const handleDelete = () => {
    dispatch({ type: DELETE, id });
    handleAlert("danger", "Gasto eliminado");
  };

  const handleEdit = () => {
    history.push(`new/${id}`);
  };

  let idTimeoutAlert;
  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });

    // hide alert past one second
    idTimeoutAlert = setTimeout(() => {
      setAlert({ show: false });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(idTimeoutAlert);
    };
  }, [alert]);

  return (
    <li className={`item ${theme}`}>
      {alert.show && <Alert type={"success"} text={"alert.text"} />}
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
  );
};

export default ExpenseItem;
