import React, { useState } from "react";
import { Jumbotron, Container, Badge, Button, Col, Row } from "reactstrap";
import { RegisterModal } from "./Modals/RegisterModal";
import { Login } from "./Modals/Login";
import { CalcBMR } from "./Modals/CalcBMR";
export const HomePage = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <>
      <div className="homepage">
        <Jumbotron fluid center>
          <Container fluid>
            <Row>
              <Col xs="6">
                <h1 color="primary" className="display-2">
                  {" "}
                  euphoric, caloric <Badge color="secondary">v.1.0</Badge>{" "}
                </h1>
              </Col>
              <Col xs="6">
                <h1 className="display-3 dead">
                  <div
                    id="deadp"
                    className="floatRight"
                    style={{
                      textalign: "center",
                      color: "A49BE8",
                      fontFamily: "Luminari ",
                      marginRight: "0px",
                      padding: "10px",
                      boxshadow: "5px 10px",
                      border: "13px double rgba(10,51,117,0.53)",
                      borderradius: "40px 7px 22px 0px",
                    }}
                  >
                    created by deadPixels{" "}
                  </div>
                </h1>
              </Col>
            </Row>

            <hr className="my-4" />
            <hr className="my-2" />
            <h1 className="display-4"> home workouts can be 🤷‍♀️ but.. </h1>
            <h1 className="display-4">accuracy is always 👏👏👏👏 </h1>
            <hr className="my-4" />
            <hr className="my-2" />
            <h2 className="lead display-4">
              deadPixels invites you to join v1.0 of our wellness application
            </h2>
            <p className="lead display-4">
              {!redirect ? (
                <Button color="primary">
                  {" "}
                  <Badge color="primary" pill>
                    {" "}
                    <RegisterModal
                      setRedirect={setRedirect}
                      redirect={redirect}
                    />
                  </Badge>
                </Button>
              ) : (
                <CalcBMR />
              )}
              <Button color="secondary">
                <Badge color="secondary" pill>
                  <Login />{" "}
                </Badge>
              </Button>
            </p>
            <hr className="my-2" />
          </Container>
          <div></div>
          <br></br>
          <h2 className="dispaly-3">
            <div style={{ textAlign: "center" }}>
              {" "}
              Created by Anthony Jimenez and Stacey Carrillo{" "}
            </div>
          </h2>
          <hr className="my-2" />

          <Container className="lead">
            <hr className="my-2" />
            <h3>
              Built with: React, Node, Mongoose, MongoDB, Axios, reactstrap,
              reactrouter, react-hooks, express, ES6+, JWT, ContextAPI
              <br></br>Context API and useReducer were used for state mangement
              <br></br>
            </h3>

            <hr className="my-2" />
            <hr className="my-2" />
            <br></br>
            <h1 className="display-6">Info for interested developers</h1>
            <p className="lead">
              This site is ready for use. However, we will be continuing to
              update and add new features. If you would like to leave feedback
              or contribute please email me at anthonyjim96@gmail.com
            </p>
            <hr className="my-2" />
          </Container>
        </Jumbotron>
      </div>
    </>
  );
};
