import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <p className="expense-item_price">${props.amount}</p>
    </div>
  );
};

export default ExpenseItem;
