import React, { useContext, useEffect } from "react";
import "./App.css";
import { UserContext } from "./context/Users/UserContext";
import { AddCalorieEvent } from "./components/AddCalorieEvent";
import { CalorieEventList } from "./components/CalorieEventList";
import { CalorieVariation } from "./components/CalorieVariation";
import { Balance } from "./components/Balance";

function App() {
  const { loadUser, userError } = useContext(UserContext);

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userError);
  return (
    <>
      <h1>Calorie Tracker v0.5</h1>
      <Balance />
      <CalorieVariation />
      <CalorieEventList />
      <AddCalorieEvent />
    </>
  );
}

export default App;
