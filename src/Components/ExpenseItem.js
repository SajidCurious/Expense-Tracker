import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

export const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("hi");
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle(newTitle);
  };
  const clickChange = (event) => {
    setNewTitle(event.target.value);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{title}</h2>
      <p className="expense-item_price">${props.amount}</p>
      <input type="text" value={newTitle} onChange={clickChange} />
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default ExpenseItem;
