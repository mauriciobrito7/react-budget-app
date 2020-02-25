import React, { useContext } from "react";
import ExpenseList from "../components/ExpenseList";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";

function Expenses() {
  const { expenses, dispatch } = useContext(expenseContext);
  return (
    <>
      <h1 className="title">Gastos</h1>
      <ExpenseList />
      <br></br>
      <h3>
        Total gastado: $
        {expenses.reduce((acc, curr) => {
          return (acc += parseFloat(curr.amount));
        }, 0)}
      </h3>
    </>
  );
}

export default Expenses;
