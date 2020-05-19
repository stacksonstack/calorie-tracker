import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const CalorieVariation = () => {
  const { calorieEvents } = useContext(GlobalContext);

  const amounts = calorieEvents.map(({ amount }) => amount);

  const caloriesConsumed = amounts
    .filter((calorieEvent) => calorieEvent > 0)
    .reduce((acc, calorieEvent) => (acc += calorieEvent), 0);

  const caloriesBurned = amounts
    .filter((calorieEvent) => calorieEvent < 0)
    .reduce((acc, calorieEvent) => (acc += calorieEvent) * -1, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Food (Calories In)</h4>
        <p className="money plus">{caloriesConsumed}</p>
      </div>
      <div>
        <h4>Exercise (Calories Out)</h4>
        <p className="money minus">{caloriesBurned}</p>
      </div>
    </div>
  );
};
