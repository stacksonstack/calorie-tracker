import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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

function App() {
  const { loadUser } = useContext(UserContext);

  useEffect(() => {
    console.log("d");
    loadUser();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/protected">
              <NavBar />
              <Balance />
              <CalorieVariation />
              <CalorieEventList />
              <AddCalorieEvent />
            </PrivateRoute>
            <ModalRoute path="/">
              <NavBar />
              <HomePage />
            </ModalRoute>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
