import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Checking from "./components/Expenses/Checking";

import "./App.css";

const dummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 1, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.69,
    date: new Date(2019, 1, 28),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3.3",
    title: "House Insurance",
    amount: 195.67,
    date: new Date(2020, 3, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 2, 26),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpense); 

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <Checking />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
