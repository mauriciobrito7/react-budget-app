import React from "react";
import "./Budget.scss";

// components
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Alert from "../components/Alert";
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

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
      <button className={`btn btn-circle ${theme}`} onClick={handleTheme}>
        {theme === "" ? (
          <IoMdMoon className="icon-custom" />
        ) : (
          <MdWbSunny className="icon-custom" />
        )}
      </button>
      <h1 className="title">Gastos</h1>
      <main className="App">
        {/* <ExpenseForm
          edit={edit}
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          theme={theme}
        /> */}
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          theme={theme}
        />
      </main>
    </>
  );
}

export default Budget;
