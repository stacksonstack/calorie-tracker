import React, { useState, useContext } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { UserContext } from "../context/Users/UserContext";
import { RegisterModal } from "./Modals/RegisterModal";
import { Logout } from "./Logout";
import { Login } from "./Modals/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user } = useContext(UserContext);

  const authLinks = (
    <>
      <NavItem>
        <span className="navbar-text mr-2">
          <strong>{user && `Welcome ${user.name}`}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </>
  );

  const guestLinks = (
    <>
      <NavItem>
        <RegisterModal />{" "}
      </NavItem>
      <NavItem>
        <Login />
      </NavItem>
    </>
  );
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          {" "}
          <NavLink href="#">calorie v0.8</NavLink>
        </NavItem>
        {isAuth ? authLinks : guestLinks}
      </Nav>
    </div>
  );
};
