import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const dateChange = (e) => {
    setEnteredDate(e.target.value);
  };
  const titleChange = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const expenseData = {
      date: enteredDate,
      title: enteredTitle,
      amount: enteredAmount,
    };

    props.onSaveExpenseData(expenseData);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
  return (
    <form className="form" onSubmit={submitForm}>
      <h1>Add an Expense</h1>
      <div className="input_date">
        <label>Date </label>
        <br />
        <input type="date" value={enteredDate} onChange={dateChange} />
      </div>
      <div className="input_title">
        <label>Title</label>
        <br />
        <input type="text" value={enteredTitle} onChange={titleChange} />
      </div>
      <div className="input_amount">
        <label>Amount</label>
        <br />
        <input type="number" value={enteredAmount} onChange={amountChange} />
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
