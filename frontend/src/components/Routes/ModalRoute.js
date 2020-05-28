import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/Users/UserContext";

export default function ModalRoute({ children, ...rest }) {
  const { isAuth } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/protected",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
