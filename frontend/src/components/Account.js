import React, { useContext, useState, useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
  Collapse,
  Card,
  CardBody,
  Input,
  Alert,
  Form,
} from "reactstrap";
import { UserContext } from "../context/Users/UserContext";
import validator from "email-validator";
import { NavBar } from "./NavBar";
export const Account = () => {
  const [message, setMessage] = useState(false);
  const {
    user,
    userError,
    updateEmail,
    updatePassword,
    isLoading,
  } = useContext(UserContext);
  const [email, setNewEmail] = useState("");
  const [emailOpen, setEmailOpen] = useState(false);

  useEffect(() => {
    if (userError.id === "UPDATE_FAIL")
      setMessage("Something went wrong, try again.");
    else setMessage(null);
  }, [userError]);

  return (
    <div>
      <NavBar />

      <h1>Account info</h1>
      <ListGroup>
        <ListGroupItem>{`User Name: ${user.name}`}</ListGroupItem>
        <ListGroupItem>{`User Email: ${user.email}`}</ListGroupItem>
        <ListGroupItem>{`User Balance: ${user.balance}`}</ListGroupItem>
      </ListGroup>
      {message ? <Alert color="danger">{message}</Alert> : null}

      <div>
        <br />
        <Button
          color="primary"
          onClick={() => {
            setEmailOpen(!emailOpen);
          }}
          style={{ marginBottom: "1rem" }}
        >
          Update Email
        </Button>
        <Collapse isOpen={emailOpen}>
          {" "}
          <Card>
            <CardBody>
              <Form>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter new Email"
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <Button onClick={() => updateEmail(email)}>Submit</Button>
              </Form>
            </CardBody>
          </Card>{" "}
        </Collapse>
        <br />
        <br />
      </div>
    </div>
  );
};
