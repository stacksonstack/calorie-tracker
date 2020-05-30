import React, { useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";

export const CalorieVariation = () => {
  const { calorieEvents } = useContext(ItemContext);

  const caloriesConsumed = calorieEvents
    .filter(({ type }) => type === "food")
    .reduce((acc, { amount }) => (acc += amount), 0);

  const caloriesBurned = calorieEvents
    .filter(({ type }) => type === "exercise")
    .reduce((acc, { amount }) => (acc += amount), 0);

  return (
    <div className="calorieInfo">
      <div>
        <h4 className="caloriesIn">Food (Calories In)</h4>
        <p className="caloriePlus">{caloriesConsumed}</p>
      </div>
      <div>
        <h4 className="caloriesOut">Exercise (Calories Out)</h4>
        <p className="calorieMinus">{caloriesBurned}</p>
      </div>
    </div>
  );
};
