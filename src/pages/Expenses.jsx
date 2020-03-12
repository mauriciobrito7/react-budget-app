import React from "react";
import { Link } from "react-router-dom";
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
