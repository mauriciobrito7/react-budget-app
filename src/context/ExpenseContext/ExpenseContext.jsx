import React, { useEffect } from "react";
import { SAVE, DELETE, DELETE_ALL, GET, EDIT } from "./types";
// Valores iniciales
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

//Context
export const expenseContext = React.createContext(initialExpenses);

// Reducer
const reducer = (expenses, action) => {
  switch (action.type) {
    case SAVE:
      return save(expenses, action.expense);
    case DELETE:
      return deleteOne(expenses, action.id);
    case DELETE_ALL:
      return deleteAll(expenses);
    case EDIT:
      return edit(expenses, action.editedExpense);

    default:
      console.log("No ha hecho una selección correcta");
      return expenses;
  }
};
// save an expense
const save = (expenses, expense) => {
  return [...expenses, expense];
};
// delete an expense
const deleteOne = (expenses, id) => {
  return expenses.filter(expense => expense.id !== id);
};
// delete all of the expenses
const deleteAll = () => {
  return [];
};
// edit an expense
const edit = (expenses, editedExpense) => {
  let tempExpenses = expenses.map(expense => {
    return expense.id === editedExpense.id ? editedExpense : expense;
  });
  return tempExpenses;
};

function ExpenseContext({ children }) {
  const [expenses, dispatch] = React.useReducer(reducer, initialExpenses);
  // ********** useEffect *********
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]); // call useEffect when expense changes
  return (
    <expenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </expenseContext.Provider>
  );
}

export default ExpenseContext;
