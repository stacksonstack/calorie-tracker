import React, { useContext } from "react";
import { UserContext } from "../context/Users/UserContext";
import { NavLink } from "reactstrap";

export const Logout = () => {
  const { logout } = useContext(UserContext);
  return (
    <>
      <NavLink onClick={logout}>Logout</NavLink>
    </>
  );
};
