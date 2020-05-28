import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";

export const AddCalorieEvent = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState("food");
  const [message, setMessage] = useState(null);
  const { addCalorieEvent, itemError } = useContext(ItemContext);

  console.log(itemError);
  useEffect(() => {
    itemError.id === "ADD_FAILURE"
      ? setMessage(itemError.message)
      : setMessage(null);
  }, [itemError]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      type,
      amount: +amount,
    };

    addCalorieEvent(newTransaction);
  };

  const handleAmount = (e) =>
    amount === 0 ? setAmount(null) : setAmount(Math.abs(e.target.value));

  return (
    <>
      <h3>Add new transaction</h3>
      {message ? <p>{message}</p> : <p></p>}
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
