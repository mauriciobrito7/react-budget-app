import React, { useContext } from "react";
//components
import ExpenseItem from "./ExpenseItem";

// styles
import "./ExpenseList.scss";

// Contexts
import { ThemeContext } from "../App";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";
// Types
import { DELETE_ALL, DELETE } from "../context/ExpenseContext/types";
// Icons
import { FiEdit } from "react-icons/fi";

const ExpenseList = () => {
  // Contexts
  const { theme } = useContext(ThemeContext);
  const { expenses, dispatch } = useContext(expenseContext);

  return (
    <>
      <ul className="list">
        {expenses.length === 0 && (
          <div className="list-empty">
            <FiEdit className="btn-icon icon-custom" />
            <h3 className="list-empty__title">No hay ningún gasto</h3>
          </div>
        )}
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              //handleDelete={handleDelete}
              //handleEdit={handleEdit}
              theme={theme}
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
