import React, { useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";

export const CalorieEvent = ({ calorieEvent }) => {
  const { deleteCalorieEvent } = useContext(ItemContext);

  const inputVariation =
    calorieEvent.type === "exercise" ? "Burned while " : "Consumed ";

  const amount =
    calorieEvent.type === "exercise"
      ? -Math.abs(calorieEvent.amount) // note talk to stacey
      : calorieEvent.amount;

  return (
    <li>
      {inputVariation}
      <span>
        {calorieEvent.text} Calories:{amount}
      </span>
      <button onClick={() => deleteCalorieEvent(calorieEvent._id)}>x</button>
    </li>
  );
};
