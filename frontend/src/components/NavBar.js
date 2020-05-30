import React, { useState, useContext } from "react";
import { Nav, NavItem, NavLink, Spinner } from "reactstrap";
import { UserContext } from "../context/Users/UserContext";
import { RegisterModal } from "./Modals/RegisterModal";
import { Logout } from "./Logout";
import { Login } from "./Modals/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { CalcBMR } from "./Modals/CalcBMR";

export const NavBar = () => {
  const [redirect, setRedirect] = useState(false);
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
        {!redirect ? (
          <RegisterModal setRedirect={setRedirect} redirect={redirect} />
        ) : (
          <CalcBMR />
        )}
      </NavItem>
      <NavItem>
        <Login />
      </NavItem>
    </>
  );
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navBar">
      <Nav tabs>
      <div id="navTitle">
        <NavItem>
          {" "}
          
          <NavLink href="#">calorie v0.8</NavLink>
        </NavItem></div>
        <NavItem>
          <Spinner color="primary" />
        </NavItem>
        {isAuth ? authLinks : guestLinks}
      </Nav>
    </div>
  );
};
