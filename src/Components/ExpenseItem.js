import React from "react";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div className="date">
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
      </div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <p className="expense-item_price">${props.amount}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
