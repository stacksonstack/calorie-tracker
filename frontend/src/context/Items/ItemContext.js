import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";
import axios from "axios";

const initialState = {
  calorieEvents: [],
  error: null,
  loading: true,
};

// two more

export const ItemContext = createContext(initialState);

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  async function getCalorieEvents() {
    try {
      const response = await axios.get("api/v1/calories");
      dispatch({
        type: "GET_CALORIEEVENTS",
        payload: response.data.results,
      });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteCalorieEvent(id) {
    try {
      await axios.delete(`/api/v1/calories/${id}`);
      dispatch({
        type: "DELETE_CALORIEEVENT",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addCalorieEvent(calorieEvent) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/v1/calories",
        calorieEvent,
        config
      );
      dispatch({
        type: "ADD_CALORIEEVENT",
        payload: response.data.results,
      });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response.data.error,
      });
    }
  }

  // 7 more functions 400 lines approx...
  return (
    <ItemContext.Provider
      value={{
        calorieEvents: state.calorieEvents,
        error: state.error,
        loading: state.loading,
        getCalorieEvents,
        deleteCalorieEvent,
        addCalorieEvent,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
