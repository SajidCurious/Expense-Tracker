import React from "react";
import Expenses from "./Components/Expenses";
import "./App.css";
import NewExpense from "./Components/NewExpense";

const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "School Fee",
      amount: 1000,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e1",
      title: "Books",
      amount: 200,
      date: new Date(2022, 5, 20),
    },
    {
      id: "e1",
      title: "Food",
      amount: 500,
      date: new Date(2022, 5, 25),
    },
  ];

  return (
    <>
      <NewExpense />
      <div className="final">
        <Expenses item={expenses} />
      </div>
    </>
  );
};

export default App;
