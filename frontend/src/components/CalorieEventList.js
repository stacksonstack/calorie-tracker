import React, { useContext, useEffect } from "react";
import { CalorieEvent } from "./CalorieEvent";
import { GlobalContext } from "../context/GlobalContext";

export const CalorieEventList = () => {
  const { calorieEvents, getCalorieEvents } = useContext(GlobalContext);
  useEffect(() => {
    getCalorieEvents();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {calorieEvents.map((cEvent) => (
          <CalorieEvent key={cEvent._id} calorieEvent={cEvent} />
        ))}
      </ul>
    </div>
  );
};
