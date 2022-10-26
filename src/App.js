import React from "react";
import ExpenseItem from "./Components/ExpenseItem.js";

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
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
    </>
  );
};

export default App;
