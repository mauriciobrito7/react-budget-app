import React, { useContext } from "react";
import "./ExpenseForm.scss";
import { ThemeContext } from "../App";
import { expenseContext } from "../context/ExpenseContext/ExpenseContext";

const ExpenseForm = () =>
  // {
  //   // edit,
  //   // charge,
  //   // amount,
  //   // handleCharge,
  //   // handleAmount,
  //   // handleSubmit
  // }
  {
    // Theme
    const { theme } = useContext(ThemeContext);
    const { expenses, dispatch } = useContext(expenseContext);
    const newExpense = {
      id: 1,
      charge: "prueba",
      amount: 1
    };

    return (
      <div>
        <button onClick={() => dispatch({ type: "SAVE", expense: newExpense })}>
          mi boton
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_ALL", expense: newExpense })}
        >
          Borrar todo
        </button>
        <button onClick={() => dispatch({ type: "DELETE", id: 1 })}>
          Borrar uno
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "EDIT",
              id: 1,
              charge: "prueba2",
              amount: 2
            })
          }
        >
          actualizar uno
        </button>

        <form className="form">
          {/* {console.log(expenseContext.expenses.map(expense => expense))}
        {console.log(expenseContext.dispatch("HANDLE_SUBMIT"))} */}
          <div className="form-group">
            {/*To conect the value with the variable */}
            <input
              type="text"
              className={`${theme} form-control`}
              // id="charge"
              // name="charge"
              // placeholder="Gasto"
              // value={charge}
              // onChange={handleCharge}
            />
          </div>
          <div className="form-group">
            {/*To conect the value with the variable */}
            <input
              type="number"
              className={`${theme} form-control`}
              // id="amount"
              // name="amount"
              // placeholder="Cuanto"
              // value={amount}
              // onChange={handleAmount}
            />
            <textarea
              placeholder="Descripción"
              className={`${theme} form-control`}
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button type="submit" className={`btn ${theme}`}>
            {true ? "Editar" : "Guardar"}
          </button>

          {expenses.map(expense => (
            <li key={expense.id}>{expense.charge}</li>
          ))}
        </form>
      </div>
    );
  };

export default ExpenseForm;
