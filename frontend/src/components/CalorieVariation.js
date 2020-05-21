import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const CalorieVariation = () => {
  const { calorieEvents } = useContext(GlobalContext);

  const caloriesConsumed = calorieEvents
    .filter(({ type }) => type === "food")
    .reduce((acc, { amount }) => (acc += amount), 0);

  const caloriesBurned = calorieEvents
    .filter(({ type }) => type === "exercise")
    .reduce((acc, { amount }) => (acc += amount), 0);

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
