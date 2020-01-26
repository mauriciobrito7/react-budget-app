import React from "react";
//components
import ExpenseItem from "./ExpenseItem";

// Icons
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

const ExpenseList = ({
  expenses,
  clearItems,
  handleDelete,
  handleEdit,
  theme
}) => {
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
        <button className="btn btn-danger" onClick={clearItems}>
          {" "}
          borrar todo
          <IoMdTrash className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
