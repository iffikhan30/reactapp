import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "../../assets/css/Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const yearFilterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
 
  const proceedHandler = () => {
    const elementToRemove = document.getElementById("alert");
    if (elementToRemove) {
      elementToRemove.remove();
      setProceedDelete(false);
      document.getElementById("removeButton").remove();
    }
  };
  const [proceedDelete, setProceedDelete] = useState(
    <div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>
  );

  const [deleteWarning, setDeleteWarning] = useState("");
  const deleteHandler = () => {
    setDeleteWarning(proceedDelete);
  };
  
  return (
    <div className="">
      {/* {deleteWarning}
      <button id="removeButton" onClick={deleteHandler}>Delete</button> */}

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChangeHandler={yearFilterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses}/>
        
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
}

export default Expenses;
