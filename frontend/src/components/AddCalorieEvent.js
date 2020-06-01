import React, { useState, useEffect, useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";
import {
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Alert,
  Select,
  Form,
} from "reactstrap";

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
      <div className="calorieForm">
        <h3 fluid id="addTransaction">
          Add below
        </h3>
        {message ? <p>{message}</p> : <p></p>}
        <Form onSubmit={onSubmit}>
          <div className="droplist">
            <Input type="select" onChange={(e) => setType(e.target.value)}>
              <option name="Add Food" value="food">
                Add Food Item
              </option>
              <option name="Add Exercise" value="exercise">
                Add Exercise activity
              </option>
            </Input>
          </div>
          <div className="calorieAmount">
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Calorie Event"
            />
          </div>
          <div className="addAmount">
            <Input
              type="number"
              value={amount}
              onChange={handleAmount}
              placeholder="Enter Calorie Amount"
            />
          </div>
          <Button color="primary" className="addBtn">
            Add Item{" "}
          </Button>
        </Form>
      </div>
    </>
  );
};
