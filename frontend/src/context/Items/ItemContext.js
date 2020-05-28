import React, { createContext, useReducer } from "react";
import ItemReducer from "./ItemReducer";
import axios from "axios";
import ErrorReducer from "../Errors/ErrorReducer";
import { tokenConfig } from "../../utils/utils";
import { errorState } from "../Errors/ErrorContext";
const initialState = {
  token: localStorage.getItem("token"),
  calorieEvents: [],
  loading: true,
};

// two more

export const ItemContext = createContext(initialState);

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  const [errState, errDispatch] = useReducer(ErrorReducer, errorState);

  function returnErrors(message, status, id) {
    // ??? dispatch/return
    errDispatch({
      type: "GET_ERRORS",
      payload: { message, status, id },
    });
  }

  function clearErrors() {
    errDispatch({
      type: "CLEAR_ERRORS",
    });
  }
  async function getCalorieEvents() {
    try {
      const response = await axios.get("api/v1/calories");
      dispatch({
        type: "GET_CALORIEEVENTS",
        payload: response.data.results,
      });
    } catch (error) {
      returnErrors(error.response.data.error, error.response.data.status);
    }
  }

  async function deleteCalorieEvent(id) {
    try {
      await axios.delete(`/api/v1/calories/${id}`, tokenConfig(state.token));
      dispatch({
        type: "DELETE_CALORIEEVENT",
        payload: id,
      });
    } catch (error) {
      returnErrors(error.response.data.error, error.response.data.status);
    }
  }

  async function addCalorieEvent(calorieEvent) {
    try {
      console.log(state);
      const response = await axios.post(
        "/api/v1/calories",
        calorieEvent,
        tokenConfig(state.token)
      );
      dispatch({
        type: "ADD_CALORIEEVENT",
        payload: response.data.results,
      });
    } catch (error) {
      returnErrors(
        error.response.data.error,
        error.response.data.status,
        "ADD_FAILURE"
      );
    }
  }

  // 7 more functions 400 lines approx...
  return (
    <ItemContext.Provider
      value={{
        calorieEvents: state.calorieEvents,
        itemError: errState,
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
