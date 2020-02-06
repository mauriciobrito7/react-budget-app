import React from "react";
import "./Budget.scss";
import { Link } from "react-router-dom";
// components

import ExpenseList from "../components/ExpenseList";
import Alert from "../components/Alert";

function Budget({ expenses, clearItems, handleDelete, handleEdit, alert }) {
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1 className="title">Gastos</h1>
      <main className="App">
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
    </>
  );
}

export default Budget;
