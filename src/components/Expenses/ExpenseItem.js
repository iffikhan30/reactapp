import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "../../assets/css/ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props){

    const [ title , setTitle ] = useState(props.title);

    const clickHandler = () => {
        setTitle('Update!');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler} >Change</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;