import React, { useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";
import { Badge } from "reactstrap";

export const CalorieEvent = ({ calorieEvent }) => {
  const { deleteCalorieEvent } = useContext(ItemContext);

  const amount =
    calorieEvent.type === "exercise"
      ? -Math.abs(calorieEvent.amount) // note talk to stacey
      : calorieEvent.amount;

  return (
    <li className={calorieEvent.type === "exercise" ? "minus" : "plus"}>
      <span>
        {calorieEvent.text} <Badge tab> Calories: {amount}</Badge>
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteCalorieEvent(calorieEvent._id)}
      >
        
      </button>
    </li>
  );
};
