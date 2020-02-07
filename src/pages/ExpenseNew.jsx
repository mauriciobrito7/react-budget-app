import React from "react";

// Components
import ExpenseForm from "../components/ExpenseForm";

function ExpenseNew() {
  return (
    <>
      <h1 className="title">Nuevo gasto</h1>

      <ExpenseForm />
    </>
  );
}

export default ExpenseNew;
