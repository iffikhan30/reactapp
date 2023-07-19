import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import '../../assets/css/NewExpense.css';

function NewExpense(props){

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const [isAdding, setIsAdding] = useState(false);

    const startAddingHandler = () => {
        setIsAdding(true);
    }

    const stopAddingHandler = () => {
        setIsAdding(false);
    }
    
    return (
        <div className="new-expense">
            {!isAdding && <button onClick={startAddingHandler} className="new-expense__actions">Add New Expense</button>}
            {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopAddingHandler}/>}
        </div>
    )
}
export default NewExpense;