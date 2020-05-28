import React, { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";
import ErrorReducer from "../Errors/ErrorReducer";
import { errorState } from "../Errors/ErrorContext";
import { tokenConfig } from "../../utils/utils";
const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  isLoading: false,
  user: null,
  balance: null,
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

  function setBalance(balance) {
    dispatch({ type: "BALANCE_SET", payload: balance });
  }
  async function loadUser() {
    try {
      dispatch({ type: "USER_LOADING" });
      const res = await axios.get(
        "/api/v1/auth/user",
        tokenConfig(state.token)
      );

      dispatch({ type: "USER_LOADED", payload: res.data }); //data.user
    } catch (error) {
      returnErrors(error.response.data.error, error.response.data.status); // when refactoring error handling e.r.d.e is the proper way to access error message
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  }

  async function registerUser(name, email, password) {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify({ name, email, password });

      const res = await axios.post("/api/v1/users", body, config);
      console.log(res);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      returnErrors(
        error.response.data.error,
        error.response.data.status,
        "REGISTER_FAIL"
      ); // when refactoring error handling e.r.d.e is the proper way to access error message
      dispatch({
        type: "REGISTER_FAIL",
      });
    }
  }

  async function login(email, password) {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post("/api/v1/auth", body, config);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      returnErrors(
        error.response.data.error,
        error.response.data.status,
        "LOGIN_FAIL"
      ); // when refactoring error handling e.r.d.e is the proper way to access error message
      dispatch({
        type: "LOGIN_FAIL",
      });
    }
  }

  function logout() {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  }

  return (
    <UserContext.Provider
      value={{
        loadUser,
        registerUser,
        clearErrors,
        logout,
        login,
        setBalance,
        balance: state.balance,
        user: state.user,
        userError: errState,
        isAuth: state.isAuth,
        isLoading: state.isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
