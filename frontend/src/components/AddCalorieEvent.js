import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddCalorieEvent = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const { addCalorieEvent } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addCalorieEvent(newTransaction);
  };

  const handleAmount = (e) =>
    type === "burn"
      ? setAmount(-Math.abs(e.target.value))
      : setAmount(e.target.value);

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <select onChange={(e) => setType(e.target.value)}>
          <option name="Add Food" value="consume">
            Add Food Item
          </option>
          <option name="Add Exercise" value="burn">
            Add Exercise activity
          </option>
        </select>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Calorie Event(Food in/Exercise Out)"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
