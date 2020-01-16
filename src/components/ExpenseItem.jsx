import React from 'react';

// Icons
import { IoMdCreate } from 'react-icons/io'
import { IoMdTrash } from 'react-icons/io'

const ExpenseItem = ({expense}) => {
    const {id, charge, amount} = expense
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <button className="edit-btn"><IoMdCreate className="btn-icon"/></button>
            <button className="delete-btn"><IoMdTrash className="btn-icon"/></button>
        </li>
    );
}

export default ExpenseItem;
