import React, { useState, useContext } from "react";
import { Nav, NavItem, NavLink, Spinner } from "reactstrap";
import { UserContext } from "../context/Users/UserContext";
import { RegisterModal } from "./Modals/RegisterModal";
import { Logout } from "./Logout";
import { Account } from "./Account";
import { Login } from "./Modals/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { CalcBMR } from "./Modals/CalcBMR";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user, redirect } = useContext(UserContext);
  const authLinks = (
    <>
      <NavItem>
        <span className="navbar-text mr-2">
          <Link to="/account">
            {" "}
            <strong>
              {user && `Welcome ${user.name}, click here to update account`}
            </strong>{" "}
          </Link>
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
        <RegisterModal />
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
            <NavLink href="/">calorie v1.0</NavLink>
          </NavItem>
        </div>
        {isAuth ? authLinks : guestLinks}
      </Nav>
    </div>
  );
};
