import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/Users/UserContext";
import {
  Form,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  FormGroup,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Alert,
} from "reactstrap";

export const CalcBMR = () => {
  const { setBalance } = useContext(UserContext);
  const [modalView, setModalView] = useState(true);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("M");
  const [message, setMessage] = useState("");
  const [selectValue, setSelectValue] = useState(1.2);
  const [bmr, setBMR] = useState(0);
  const { isAuth, skipBalance } = useContext(UserContext);
  const toggle = () => {
    setModalView(!modalView);
  };

  //   useEffect(() => {
  //     userError.id === "REGISTER_FAIL"
  //       ? setMessage(userError.message)
  //       : setMessage(null);
  //   }, [userError]);

  const onSubmit = () => {
    if (weight === 0 || age === 0 || height === 0) {
      setMessage("Update values to calculate BMR");
      return;
    }
    const final =
      gender === "M"
        ? 66 + 6.3 * weight + 12.9 * height - 6.8 * age
        : 655 + 4.3 * weight + 4.7 * height - 4.7 * age;

    setBalance(final * selectValue);
  };
  return (
    <>
      <NavLink onClick={toggle}>Calc your daily Cal Allowance</NavLink>
      <Modal isOpen={modalView} toggle={setModalView} backdrop="static">
        <ModalHeader toggle={toggle}>BMR</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            {message && <Alert color="danger">{message}</Alert>}
            <legend>Enter weight (lbs)</legend>
            <Input type="number" onChange={(e) => setWeight(e.target.value)} />
            <legend>Enter height (inches)</legend>
            <Input type="number" onChange={(e) => setHeight(e.target.value)} />
            <legend>Enter age (years)</legend>
            <Input type="number" onChange={(e) => setAge(e.target.value)} />
            <FormGroup tag="fieldset">
              <legend>Select Gender</legend>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio1"
                    onChange={(e) => setGender(e.target.checked)}
                    value="M"
                  />{" "}
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio1"
                    onChange={(e) => setGender(e.target.checked)}
                    value="F"
                  />{" "}
                  Female
                </Label>
              </FormGroup>
            </FormGroup>
            <legend>Select Activity Level</legend>
            <Input
              type="select"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value={1.2}>Sedentary</option>
              <option value={1.375}>Lightly Active</option>
              <option value={1.55}>Moderately Active</option>
              <option value={1.725}>Very Active</option>
              <option value={1.9}>Extra Active</option>
            </Input>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="warning"
            onClick={() => {
              toggle();
              skipBalance();
            }}
          >
            Use Default
          </Button>
          <Button color="primary" onClick={onSubmit}>
            {" "}
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
