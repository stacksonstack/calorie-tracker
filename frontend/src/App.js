import React from "react";
import "./App.css";
import { AddCalorieEvent } from "./components/AddCalorieEvent";
import { CalorieEventList } from "./components/CalorieEventList";
import { CalorieVariation } from "./components/CalorieVariation";
import { Balance } from "./components/Balance";

function App() {
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
