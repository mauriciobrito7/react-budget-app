import React, { useContext, useState } from "react";
//components
import ExpenseItem from "./ExpenseItem";
import Alert from "./Alert";

// styles
import "./ExpenseList.scss";

// Contexts
import { ThemeContext } from "../App";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";
// Types
import { DELETE_ALL } from "../context/ExpenseContext/types";
// Icons
import { FiEdit } from "react-icons/fi";

const ExpenseList = () => {
  // Contexts
  const { theme } = useContext(ThemeContext);
  const { expenses, dispatch } = useContext(expenseContext);

  // alert
  const [alert, setAlert] = useState({
    show: false
  });

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <ul className="list">
        {expenses.length === 0 && (
          <div className="list-empty">
            <FiEdit className="btn-icon icon-custom" />
            <h2 className={`list-empty__title ${theme}`}>
              No hay ningún gasto
            </h2>
          </div>
        )}
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              setAlert={setAlert}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button
          className={`btn ${theme} btn-danger`}
          onClick={() => dispatch({ type: DELETE_ALL, expenses })}
        >
          Eliminar todo
        </button>
      )}
    </>
  );
};

export default ExpenseList;
