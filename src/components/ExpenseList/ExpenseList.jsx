import React, { useContext, useState, useMemo } from "react";
//components
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Alert from "../Alert/Alert";
import Message from "../Message/Message";

// styles
import "./ExpenseList.scss";

// Contexts
import { ThemeContext } from "../../App";
import { expenseContext } from "../../context/ExpenseContext/ExpenseContext";
// Types
import { DELETE_ALL } from "../../context/ExpenseContext/types";
import { labels } from "../ExpenseForm/Label";
// Icons
import { FiEdit } from "react-icons/fi";

function useSearchExpenses(expenses) {
  // filter
  const [query, setQuery] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useMemo(() => {
    if (query !== "Todos") {
      const result = expenses.filter(expense => {
        return `${expense.label}`.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredExpenses(result);
    } else {
      setFilteredExpenses(expenses);
    }
  }, [expenses, query]);

  return { query, setQuery, filteredExpenses };
}

const ExpenseList = () => {
  // Contexts
  const { theme } = useContext(ThemeContext);
  const { expenses, dispatch } = useContext(expenseContext);
  const { query, setQuery, filteredExpenses } = useSearchExpenses(expenses);

  // alert
  const [alert, setAlert] = useState({
    show: false
  });

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className={`panel ${theme}`}>
        <Message className="message">
          Total gastado: $
          {expenses.reduce((acc, curr) => {
            return (acc += parseFloat(curr.amount));
          }, 0)}
        </Message>
        <div className="filter">
          <select
            className={`${theme} form-control`}
            onChange={e => {
              setQuery(e.target.value);
            }}
            name="select"
            value={query}
          >
            <option>Todos</option>
            {labels.map(label => {
              return <option key={label}>{label}</option>;
            })}
          </select>
        </div>
      </div>
      {/*List */}
      <ul className="list">
        {expenses.length === 0 && (
          <div className="list-empty">
            <FiEdit className="btn-icon icon-custom" />
            <h2 className={`list-empty__title ${theme}`}>
              No hay ningún gasto
            </h2>
          </div>
        )}
        {filteredExpenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              setAlert={setAlert}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button
          className={`btn ${theme} btn-danger`}
          onClick={() => dispatch({ type: DELETE_ALL, expenses })}
        >
          Eliminar todo
        </button>
      )}
    </>
  );
};

export default ExpenseList;
