import React from "react";
import "./ExpenseItem.css";

export const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <p>March 5th 2022</p>
      <div className="expense-item_description">
        <h2>Car Insurance</h2>
        <p className="expense-item_price">$200</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
