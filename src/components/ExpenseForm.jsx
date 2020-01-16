import React from 'react';
import {IoMdSend} from 'react-icons/io'

const ExpenseForm = ({charge,amount,handleCharge, handleAmount, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="charge">Gasto</label>
                {/*To conect the value with the variable */}
                <input type="text" className="form-control" id="charge" name="charge" placeholder="gasto" value={charge} onChange={handleCharge} />
            </div>
            <div className="form-group">
                <label htmlFor="amount">Monto</label>
                {/*To conect the value with the variable */}
                <input type="number" className="form-control" id="amount" name="amount" placeholder="cuanto" value={amount} onChange={handleAmount}/>
            </div>
            <button type="submit" className="btn">
                Guardar
            <IoMdSend className="btn-icon"/>
            </button>
        </form>
    );
}

export default ExpenseForm;
