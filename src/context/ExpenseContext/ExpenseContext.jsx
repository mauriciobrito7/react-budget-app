import React, { useEffect } from "react";

// Valores iniciales
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

//Context
export const expenseContext = React.createContext(initialExpenses);

// Reducer
const reducer = (expenses, action) => {
  switch (action.type) {
    case "SAVE":
      return save(expenses, action.expense);
    case "DELETE":
      return deleteOne(expenses, action.id);
    case "DELETE_ALL":
      return deleteAll(expenses);
    case "GET":
      return get(expenses, action.id);
    case "EDIT":
      return edit(expenses, action.id, action.charge, action.amount);

    default:
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
// get an expense
const get = (expenses, id) => {
  return expenses.find(expense => expense.id === id);
};
// edit an expense
const edit = (expenses, id, charge, amount) => {
  let tempExpenses = expenses.map(expense => {
    return expense.id === id ? { ...expense, charge, amount } : expense;
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
