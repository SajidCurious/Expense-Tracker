import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form className="form">
      <h1>Add an Expense</h1>
      <div className="input_date">
        <label>Date </label>
        <br />
        <input type="date" className="label" />
      </div>
      <div className="input_title">
        <label>Title</label>
        <br />
        <input type="text" />
      </div>
      <div className="input_amout">
        <label>Amount</label>
        <br />
        <input type="number" />
      </div>
      <div>
        <button type="submit" className="create_expense">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
