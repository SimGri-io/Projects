import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = ({charge, amount, handleSubmit, handleAmount, handleCharge, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                <label>charge</label>
                <input
                type="text"
                name="charge"
                placeholder="e.g. books"
                id="charge"
                className="form-control"  
                value={charge}  
                onChange={handleCharge}           
                />

                </div>
                <div className="form-group">
                <label>amount</label>
                <input
                type="text"
                name="amount"
                placeholder="e.g. 100"
                id="amount"
                className="form-control"   
                value={amount}      
                onChange={handleAmount}
                />

                </div>
            </div>
            <button type="submit" className="btn">{edit?'edit':'submit'} <MdSend className="btn-icon"/></button>
        </form>
    )
}

export default ExpenseForm
