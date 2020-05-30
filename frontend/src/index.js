import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ItemProvider } from "./context/Items/ItemContext";
import { UserProvider } from "./context/Users/UserContext";

ReactDOM.render(
  <UserProvider>
    <ItemProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ItemProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
