import React, { useContext, useState, useEffect } from "react";
import "./ExpenseForm.scss";
import { useHistory, useParams } from "react-router-dom";
import uuid from "uuid/v4";
// Contexts
import { ThemeContext } from "../App";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";
// Types
import { SAVE, EDIT } from "../context/ExpenseContext/types";
// Components
import Alert from "./Alert";
import Calendar from "react-calendar";
// Icons
// import shapeDark from "../svg/shape-dark.svg";

const ExpenseForm = () => {
  // Contexts
  const { theme } = useContext(ThemeContext);
  const { expenses, dispatch } = useContext(expenseContext);

  // History
  const history = useHistory();
  // Params
  const slug = useParams();

  // single expense
  const [expense, setExpense] = useState({
    id: uuid(),
    charge: "",
    amount: "",
    label: "",
    description: "",
    date: ""
  });

  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // // edit item
  const [id] = useState(slug.expenseId ? slug.expenseId : 0);

  const [date, setDate] = useState(new Date());

  const [btnDisabled, setbtnDisabled] = useState(false);

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

  const handleDate = date => {
    setExpense({
      ...expense,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    });
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
        handleAlert("success", "El gasto fue editado");
      }
    } else {
      // handle alert called
      handleAlert("danger", "El gasto tiene que ser mayor a 0");
    }
  };

  // // handle edit
  const handleEdit = id => {
    // change button
    setEdit(true);

    // search expense to edit
    let expenseToEdit = expenses.find(expense => expense.id === id);

    // edit expense
    setExpense(expenseToEdit);
  };

  let idTimeoutAlert;

  const handleAlert = (type, text) => {
    // show the message
    setAlert({ show: true, type, text });
    // the button is disabled to not create a copy
    setbtnDisabled(true);

    // hide alert past one second
    idTimeoutAlert = setTimeout(() => {
      setAlert({ show: false });
      if (expense.amount > 0) {
        // Redirect to "/"
        history.push("/");
      }
    }, 1000);
  };

  useEffect(() => {
    if (slug.expenseId) {
      handleEdit(id);
    }
    return () => {
      clearInterval(idTimeoutAlert);
      setExpense({
        id: "",
        charge: "",
        amount: "",
        label: "",
        description: ""
      });
      setEdit(false);
    };
  }, [slug.expenseId]);

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
            value={expense.charge || ""}
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
            value={expense.amount || ""}
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
            value={expense.label || ""}
            onChange={handleLabel}
          />
        </div>
        <div className="form-control">
          <textarea
            placeholder="Descripción"
            className={`${theme} form-control`}
            id=""
            cols="30"
            rows="5"
            style={{ resize: "none" }}
            value={expense.description || ""}
            onChange={handleDescription}
          ></textarea>
        </div>
        <div className="form-control">
          <Calendar
            className={`calendar ${theme}`}
            onChange={handleDate}
            value={date}
            locale={"es-419"} // language
          />
        </div>

        <button disabled={btnDisabled} type="submit" className={`btn ${theme}`}>
          {edit ? "Editar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
