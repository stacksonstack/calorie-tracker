import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";
import ErrorReducer from "../Errors/ErrorReducer";
import { errorState } from "../Errors/ErrorContext";

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  isLoading: false,
  user: null,
};
// two more

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
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
  //const [errState, errorDispatch] = useReducer(ErrorReducer, errorState);
  // two more

  async function loadUser() {
    try {
      dispatch({ type: "USER_LOADING" });

      const data = await axios.get("/api/v1/auth/user", tokenConfig());

      dispatch({ type: "USER_LOADED", payload: data.data }); //data.user
    } catch (error) {
      returnErrors(error.response.data.error, error.response.data.status); // when refactoring error handling e.r.d.e is the proper way to access error message
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  }

  function tokenConfig() {
    const token = state.token;

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    if (token) {
      config.headers["x-auth-token"] = token;
    }

    return config;
  }
  return (
    <UserContext.Provider value={{ loadUser, userError: errState.message }}>
      {children}
    </UserContext.Provider>
  );
};
