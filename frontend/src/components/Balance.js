import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const { calorieEvents } = useContext(GlobalContext);

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
