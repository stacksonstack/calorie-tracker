import React, { useContext, useState, useEffect } from "react";
import { ItemContext } from "../context/Items/ItemContext";
import { UserContext } from "../context/Users/UserContext";
import { CalcBMR } from "../components/Modals/CalcBMR";
import { Button } from "reactstrap";
export const Balance = () => {
  const { calorieEvents } = useContext(ItemContext);
  const { user, balance } = useContext(UserContext);
  const [bmr, setBMR] = useState(false);

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
      Daily allowance: {balance}{" "}
      <br>Remaining calories: {balance - total}</br> 
      </div>
      <Button color="secondary" onClick={() => setBMR(!bmr)} className="updateBalance">
        Update BMR
      </Button>
      {bmr && <CalcBMR />}
      </div>
    </>
  );
};
