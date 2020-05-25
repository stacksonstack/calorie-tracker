import React, { useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";

export const Balance = () => {
  const { calorieEvents } = useContext(ItemContext);

  const total = calorieEvents
    .map(({ type, amount }) =>
      type === "exercise" ? -Math.abs(amount) : amount
    )
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  return (
    <>
      <h1>Calories: {2000 - total}</h1>
    </>
  );
};
