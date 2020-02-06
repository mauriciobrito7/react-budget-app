import React from "react";

// Components
import ExpenseForm from "../components/ExpenseForm";
import ExpenseContext from "../context/ExpenseContext/ExpenseContext";

function ExpenseNew() {
  return (
    <ExpenseContext>
      <ExpenseForm />
    </ExpenseContext>
  );
}

export default ExpenseNew;
