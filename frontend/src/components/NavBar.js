import React, { useState, useContext } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
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
      <div className="welcomeUser">
        <span>
          <strong>{user && `Welcome ${user.name}`}</strong>
        </span>
      </div>
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
        <NavItem>
          {" "}
          <NavLink href="#">calorie v0.8</NavLink>
        </NavItem>

        {isAuth ? authLinks : guestLinks}
      </Nav>
    </div>
  );
};
