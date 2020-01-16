import React from 'react';
//components
import ExpenseItem from './ExpenseItem'

// Icons
import { IoMdTrash } from 'react-icons/io'

const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense) =>{
                    return <ExpenseItem key={expense.id} expense={expense}/>
                })}
            </ul>
            {expenses.length > 0 && (
                <button> Limpiar lista <IoMdTrash className="btn-icon"/></button>
            )}
        </>
    );
}

export default ExpenseList;
