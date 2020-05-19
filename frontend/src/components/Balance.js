import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const { calorieEvents } = useContext(GlobalContext);

  const amounts = calorieEvents.map(({ amount }) => amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h1>Calories: {2000 - total}</h1>
    </>
  );
};
