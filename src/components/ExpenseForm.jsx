import React, { useContext, useState } from "react";
import "./ExpenseForm.scss";
import uuid from "uuid/v4";
// Contexts
import { ThemeContext } from "../App";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";
// Types
import { SAVE, EDIT } from "../context/ExpenseContext/types";
// Components
import Alert from "./Alert";
// Icons
// import shapeDark from "../svg/shape-dark.svg";

const ExpenseForm = () => {
  // Contexts
  const { theme } = useContext(ThemeContext);
  const { expenses, dispatch } = useContext(expenseContext);

  // single expense
  const [expense, setExpense] = useState({
    id: uuid(),
    charge: "",
    amount: "",
    label: "",
    description: ""
  });

  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // // edit item
  // const [id, setId] = useState(0);

  // ********** functionality *********
  const handleCharge = e => {
    setExpense({ ...expense, charge: e.target.value });
  };

  const handleAmount = e => {
    setExpense({ ...expense, amount: e.target.value });
  };

  const handleLabel = e => {
    setExpense({ ...expense, label: e.target.value });
  };

  const handleDescription = e => {
    setExpense({ ...expense, description: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (expense.charge !== "" && expense.amount > 0) {
      if (!edit) {
        // from our reducer
        dispatch({ type: SAVE, expense });
        handleAlert("success", "el gasto fue agregado");
      } else {
        // from our reducer
        dispatch({ type: EDIT, editedExpense: expense });
        setEdit(false);
        handleAlert("success", "el gasto fue editado");
      }
      setExpense({
        id: "",
        charge: "",
        amount: "",
        label: "",
        description: ""
      });
    } else {
      // handle alert called
      handleAlert("danger", "el gasto tiene que ser mayor a 0");
    }
  };

  // handle edit
  const handleEdit = (e, id) => {
    e.preventDefault();
    setEdit(true);
    let expense = expenses.find(expense => expense.id === id);
    setExpense(expense);
  };

  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });

    // hide alert past 3 seconds
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className={` `}></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/*To conect the value with the variable */}
          <input
            type="text"
            className={`${theme} form-control`}
            id="charge"
            name="charge"
            placeholder="Gasto"
            value={expense.charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className={`${theme} form-control`}
            id="amount"
            name="amount"
            placeholder="Cuanto"
            value={expense.amount}
            onChange={handleAmount}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            className={`${theme} form-control`}
            id="label"
            name="label"
            placeholder="Clasificación"
            value={expense.label}
            onChange={handleLabel}
          />
        </div>
        <div className="form-control">
          <textarea
            placeholder="Descripción"
            className={`${theme} form-control`}
            id=""
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            value={expense.description}
            onChange={handleDescription}
          ></textarea>
        </div>

        <button type="submit" className={`btn ${theme}`}>
          {edit ? "Editar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
