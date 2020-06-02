import React, { useContext, useState, useEffect } from "react";
import { ItemContext } from "../context/Items/ItemContext";
import { UserContext } from "../context/Users/UserContext";
import { CalcBMR } from "./Modals/CalcBMR.js";
import { Button } from "reactstrap";
export const Balance = () => {
  const { calorieEvents } = useContext(ItemContext);
  const { user, balance, openBMR } = useContext(UserContext);

  const total = calorieEvents
    .map(({ type, amount }) =>
      type === "exercise" ? -Math.abs(amount) : amount
    )
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);
  console.log(user);

  return (
    <>
      <div className="balance">
        {" "}
        <div className="balanceNum">
          Daily allowance: {balance} <br />
          Remaining calories: {(balance - total).toFixed(2)}
        </div>
        <CalcBMR />
      </div>
    </>
  );
};
