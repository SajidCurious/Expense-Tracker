import React from "react";

import "./NewExpense.css";

import ExpenseForm from "../NewExpense/ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  return (
    <div className="main_div">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
