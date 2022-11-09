import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./Components/UI/NewExpense";

let dummyExpense = [
  {
    id: "e1",
    title: "School Fee",
    amount: 1000,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 200,
    date: new Date(2022, 5, 20),
  },
  {
    id: "e3",
    title: "Food",
    amount: 500,
    date: new Date(2022, 5, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpense);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="final">
        <Expenses item={expenses} />
      </div>
    </>
  );
};

export default App;
