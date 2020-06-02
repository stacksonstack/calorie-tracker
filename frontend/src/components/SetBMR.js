import React, { useContext } from "react";
import { UserContext } from "../context/Users/UserContext";
import { CalcBMR } from "./Modals/CalcBMR";
function SetBMR() {
  const { redirect } = useContext(UserContext);
  return redirect && <CalcBMR />;
}

export default SetBMR;
