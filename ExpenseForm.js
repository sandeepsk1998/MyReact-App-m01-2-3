import React, { useState } from "react";
import "./ExpenseForm.css";
// import { useState } from 'react';

const ExpenseForm = (props) => {
  // const submiited = () => {
  //     alert('you submitted the form');
  // };

  const [enetredTitle, setEnteredTitle] = useState("");
  const [enetredAmount, setEnteredAmount] = useState("");
  const [enetredDate, setEnteredDate] = useState("");
  //    const [userInput,setUserInput] = useState({
  //         enetredTitle: '',
  //         enetredAmount: '',
  //         enetredDate:''
  //     });

  const titleChangeHandler = (event) => {
    //  console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enetredTitle: event.target.value
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, enetredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enetredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enetredDate: event.target.value
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enetredTitle,
      amount: enetredAmount,
      date: new Date(enetredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enetredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enetredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            value={enetredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
