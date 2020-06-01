import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/Users/UserContext";
import { AddCalorieEvent } from "./components/AddCalorieEvent";
import { CalorieEventList } from "./components/CalorieEventList";
import { CalorieVariation } from "./components/CalorieVariation";
import { Balance } from "./components/Balance";
import { NavBar } from "./components/NavBar";
import ModalRoute from "./components/Routes/ModalRoute";
import { HomePage } from "./components/HomePage";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { Nav } from "reactstrap";
import { CalcBMR } from "./components/Modals/CalcBMR";

function App() {
  const { loadUser, token, user } = useContext(UserContext);
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/protected">
            <NavBar />
            <div className="calorieTracker">
              <Balance />
              <CalorieVariation />
              <CalorieEventList />
              <AddCalorieEvent />
            </div>
          </PrivateRoute>

          <div>
            <ModalRoute path="/">
              <HomePage />
            </ModalRoute>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
