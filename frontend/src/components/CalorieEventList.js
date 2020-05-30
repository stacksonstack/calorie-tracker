import React, { useContext, useEffect } from "react";
import { CalorieEvent } from "./CalorieEvent";
import { ItemContext } from "../context/Items/ItemContext";

export const CalorieEventList = () => {
  const { calorieEvents, getCalorieEvents } = useContext(ItemContext);

  useEffect(() => {
    getCalorieEvents();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="history">
      <h3>History</h3>
      <ul id="list" className="list">
        {calorieEvents.map((cEvent) => (
          <CalorieEvent key={cEvent._id} calorieEvent={cEvent} />
        ))}
      </ul>
    </div>
  );
};
