import React from "react";
// Components
import ExpenseList from "../components/ExpenseList/ExpenseList";

function Expenses() {
  return (
    <>
      <h1 className="title">Gastos</h1>

      <ExpenseList />
      <br></br>
    </>
  );
}

export default Expenses;
