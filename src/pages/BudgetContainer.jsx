import React, { useState, useEffect } from "react";
// components
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Alert from "../components/Alert";
import uuid from "uuid/v4";

// useEffect let's perform side effects
// runs after every render
// first paramater - callback function (runs after render)
// second paramater - array - for letting react know when to run useEffect
// react re-renders when state has changed or props

/*
const initialExpenses = [
  {id:uuid(), charge: "renta", amount:100},
  {id:uuid(), charge: "comida", amount:200},
  {id:uuid(), charge: "datos moviles", amount:10}
]*/

// import useState()
// retorna un [] con dos valores
// el valor actual del estado
// y la función para actualizar
// se le puede pasar un valor por defecto

/*
  result = useState(initialExpenses)
  expenses = result[0]
  setExpenses = result[1]
*/

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function BudgetContainer() {
  // ********** state values *********
  // all expenses, add expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // edit item
  const [id, setId] = useState(0);

  // ********** useEffect *********
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]); // call useEffect when expense changes

  // ********** functionality *********
  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });

    // hide alert past 3 seconds
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (!edit) {
        let newExpense = { id: uuid(), charge, amount }; // these is the same that charge: charge, amount: amount
        setExpenses([...expenses, newExpense]);
        handleAlert("success", "el gasto fue agregado");
      } else {
        //falta un paso
        let tempExpenses = expenses.map(expense => {
          return expense.id === id ? { ...expense, charge, amount } : expense;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert("success", "el gasto fue editado");
      }
      setCharge("");
      setAmount("");
    } else {
      // handle alert called
      handleAlert("danger", "el gasto tiene que ser mayor a 0");
    }
  };

  // clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert("danger", "se ha eliminado la lista");
  };

  // handle delete
  const handleDelete = id => {
    // return a new array without the item with the same id
    setExpenses(expenses.filter(expense => expense.id !== id));
    handleAlert("danger", "gasto eliminado");
  };

  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(expense => expense.id === id);
    setCharge(expense.charge);
    setAmount(expense.amount);
    setEdit(true);
    setId(expense.id);
  };

  const titleStyle = {
    textAlign: "center",
    marginTop: "48px !important"
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1 style={titleStyle}>Presupuesto</h1>
      <main className="App">
        <ExpenseForm
          edit={edit}
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
      <h1>
        Total gastado:{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount)); // we make sure it is a sum of numbers
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default BudgetContainer;
