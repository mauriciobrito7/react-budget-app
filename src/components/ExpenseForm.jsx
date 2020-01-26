import React from "react";
import { IoMdSend } from "react-icons/io";
import "./ExpenseForm.scss";
const ExpenseForm = ({
  edit,
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  theme
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        {/*To conect the value with the variable */}
        <input
          type="text"
          className={`${theme} form-control`}
          id="charge"
          name="charge"
          placeholder="gasto"
          value={charge}
          onChange={handleCharge}
        />
      </div>
      <div className="form-group">
        {/*To conect the value with the variable */}
        <input
          type="number"
          className={`${theme} form-control`}
          id="amount"
          name="amount"
          placeholder="cuanto"
          value={amount}
          onChange={handleAmount}
        />
      </div>
      <button type="submit" className="btn">
        {edit ? "Editar" : "Guardar"}
      </button>
    </form>
  );
};

export default ExpenseForm;
