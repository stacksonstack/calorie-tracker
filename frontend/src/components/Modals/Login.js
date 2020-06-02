import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/Users/UserContext";
import {
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Alert,
  Label,
} from "reactstrap";
export const Login = () => {
  const { isAuth, userError, clearErrors, login } = useContext(UserContext);
  const [modalView, setModalView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  const toggle = () => {
    clearErrors();
    setModalView(!modalView);
  };

  useEffect(() => {
    userError.id === "LOGIN_FAIL"
      ? setMessage(userError.message)
      : setMessage(null);
  }, [userError]);

  useEffect(() => {
    if (modalView && isAuth) toggle();
  }, [isAuth, modalView]);

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <NavLink onClick={toggle}>Log In</NavLink>

      <Modal isOpen={modalView} toggle={setModalView} backdrop="static">
        <ModalHeader color="primary" toggle={toggle}>
          Log In below
        </ModalHeader>
        <ModalBody>
          {message ? <Alert color="danger">{message}</Alert> : null}

          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
