import React, {useState} from 'react';
import './App.css';
// components
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import uuid from 'uuid/v4'

const initialExpenses = [
  {id:uuid(), charge: "renta", amount:100},
  {id:uuid(), charge: "comida", amount:200},
  {id:uuid(), charge: "datos moviles", amount:10}
]

console.log(initialExpenses)

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

function App() {
  // ********** state values *********
  // all expenses, add expenses
  const [expenses, setExpenses] = useState(initialExpenses)
  // single expense
  const [charge, setCharge] = useState('')
  // single amount
  const [amount, setAmount]= useState('')

  // ********** functionality *********
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(charge,amount)
    if (charge !== '' && amount > 0){

      let newExpense = {id:uuid(), charge, amount} // these is the same that charge: charge, amount: amount 
      setExpenses([...expenses,newExpense])

      setCharge('')
      setAmount('')

    }else{
      // handle alert called
    }
  }

  return (
    <>
      <Alert></Alert>
      <h1>Calculador de gastos</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit}/>
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total gastado: <span className="total">
          ${expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount)) // we make sure it is a sum of numbers
          } , 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
