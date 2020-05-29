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
  Label,
  Alert,
} from "reactstrap";

export const RegisterModal = ({ setRedirect, redirect }) => {
  const { isAuth, userError, registerUser, clearErrors } = useContext(
    UserContext
  );
  const [modalView, setModalView] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  const toggle = () => {
    clearErrors();
    setModalView(!modalView);
  };

  useEffect(() => {
    userError.id === "REGISTER_FAIL"
      ? setMessage(userError.message)
      : setMessage(null);
  }, [userError]);

  useEffect(() => {
    if (modalView && redirect) {
      toggle();
    }
  }, [isAuth, modalView]);

  const onSubmit = () => {
    registerUser(name, email, password);
    setRedirect(true);
  };
  return (
    <div>
      <NavLink onClick={toggle}>Register</NavLink>
      <Modal isOpen={modalView} toggle={setModalView} backdrop="static">
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            {message ? <Alert color="danger">{message}</Alert> : null}
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            {" "}
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
