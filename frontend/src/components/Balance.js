import React, { useContext } from "react";
import { ItemContext } from "../context/Items/ItemContext";
import { UserContext } from "../context/Users/UserContext";
import { CalcBMR } from "../components/Modals/CalcBMR";
export const Balance = () => {
  const { calorieEvents } = useContext(ItemContext);
  const { balance } = useContext(UserContext);
  const total = calorieEvents
    .map(({ type, amount }) =>
      type === "exercise" ? -Math.abs(amount) : amount
    )
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  return <>{balance ? <legend>{balance - total}</legend> : <CalcBMR />}</>;
};
