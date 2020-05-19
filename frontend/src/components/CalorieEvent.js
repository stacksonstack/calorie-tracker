import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const CalorieEvent = ({ calorieEvent }) => {
  const { deleteCalorieEvent } = useContext(GlobalContext);

  const inputVariation =
    calorieEvent.amount < 0 ? "Burned while " : "Consumed ";

  return (
    <li>
      {inputVariation}
      <span>
        {calorieEvent.text} Calories:{Math.abs(calorieEvent.amount)}
      </span>
      <button onClick={() => deleteCalorieEvent(calorieEvent.id)}>x</button>
    </li>
  );
};
