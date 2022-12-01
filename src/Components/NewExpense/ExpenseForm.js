import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(ExpenseForm);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
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
        <button className="create_expense" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
