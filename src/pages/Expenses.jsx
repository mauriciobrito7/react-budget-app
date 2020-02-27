import React, { useContext } from "react";
// Components
import ExpenseList from "../components/ExpenseList";
import Message from "../components/Message/Message";

// Contexts
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";

function Expenses() {
  const { expenses } = useContext(expenseContext);
  return (
    <>
      <h1 className="title">Gastos</h1>
      <ExpenseList />
      <br></br>
      <Message>
        Total gastado: $
        {expenses.reduce((acc, curr) => {
          return (acc += parseFloat(curr.amount));
        }, 0)}
      </Message>
    </>
  );
}

export default Expenses;
