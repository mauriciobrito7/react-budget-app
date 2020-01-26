import React from "react";
import "./Budget.scss";

// components
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Alert from "../components/Alert";
import FloatMessage from "../components/FloatMessage";

function Budget({
  edit,
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  expenses,
  clearItems,
  handleDelete,
  handleEdit,
  alert,
  handleTheme,
  theme
}) {
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <button onClick={handleTheme}>modo nocturno</button>
      <h1 className="title">Presupuesto</h1>
      <main className="App">
        <ExpenseForm
          edit={edit}
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          theme={theme}
        />
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          theme={theme}
        />
      </main>
      <FloatMessage expenses={expenses} />
    </>
  );
}

export default Budget;
