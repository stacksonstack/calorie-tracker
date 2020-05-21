import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddCalorieEvent = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("food");
  const { addCalorieEvent } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      type,
      amount: +amount,
    };

    addCalorieEvent(newTransaction);
  };

  const handleAmount = (e) => setAmount(Math.abs(e.target.value));

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <select onChange={(e) => setType(e.target.value)}>
          <option name="Add Food" value="food">
            Add Food Item
          </option>
          <option name="Add Exercise" value="exercise">
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
