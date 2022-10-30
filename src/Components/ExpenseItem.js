import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";

export const ExpenseItem = (props) => {
  return (
    <div className="main-container">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <p className="expense-item_price">${props.amount}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
