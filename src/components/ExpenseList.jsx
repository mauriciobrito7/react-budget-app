import React, { useContext } from "react";
//components
import ExpenseItem from "./ExpenseItem";

// styles
import "./ExpenseList.scss";
import { ThemeContext } from "../App";

// Icons
import { FiEdit } from "react-icons/fi";

const ExpenseList = ({ expenses, clearItems, handleDelete, handleEdit }) => {
  const { theme } = useContext(ThemeContext);

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
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              theme={theme}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className={`btn ${theme} btn-danger`} onClick={clearItems}>
          Eliminar todo
        </button>
      )}
    </>
  );
};

export default ExpenseList;
