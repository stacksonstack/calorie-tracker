import React, { useContext} from "react";
import { Jumbotron, Container, Badge, Button, Col, Row } from "reactstrap";
import { RegisterModal } from "./Modals/RegisterModal";
import { Login } from "./Modals/Login";
import { CalcBMR } from "./Modals/CalcBMR";
import { UserContext } from "../context/Users/UserContext";
export const HomePage = () => {
  const { redirect, setRedirect }= useContext(UserContext);
  return (
    <>
      <div className="homepage">
        <Jumbotron fluid center>
          <Container fluid id="test">
            <Row>
              <Col xs="6" id="homeTitle">
                <h1 color="primary" className="display-3">
                  {" "}
                  Calorie Tracker{" "}
                  <Badge pill color="primary">
                    <h4>v1.0</h4>
                  </Badge>{" "}
                </h1>
              </Col>
              <Col xs="6" id="homeBox">
                <h1 className="display-3">
                  <div
                    id="deadp"
                    className="floatRight"
                    style={{
                      textalign: "center",
                      color: "A49BE8",
                      fontFamily: "Luminari",
                      marginRight: "0px",
                      padding: "10px",
                      boxshadow: "5px 10px",
                      border: "13px double rgb(20, 133, 245, 0.53)",
                      borderradius: "40px 7px 22px 0px",
                    }}
                  >
                    Created By DeadPixels{" "}
                  </div>
                </h1>
              </Col>
            </Row>
            <div id="homeBio">
              <h1 className="display-4">counting calories? 🔍</h1>

              <h2>keeping tabs on what we eat isn't always easy..</h2>
              <h1>but deadPixels can help!</h1>
            </div>
            <p className="lead display-4" id="homeBtns">
              {!redirect ? (
                <Button color="primary">
                  {" "}
                  <Badge color="primary" pill>
                    {" "}
                    <RegisterModal
                   
                    />
                  </Badge>
                </Button>
              ) : (
                <CalcBMR />
              )}
              <Button>
                <Badge color="#1485f5" pill>
                  <Login />{" "}
                </Badge>
              </Button>
            </p>
          </Container>
          <br></br>

          <Container className="lead" id="websiteInfo">
            <br></br>
            <h1>Info for interested developers</h1>
            <p>
              This site is ready for use. However, we will be continuing to
              update and add new features. If you would like to leave feedback
              or contribute please email me at anthonyjim96@gmail.com
            </p>
            <p lead>
              Built with: React, Node, Mongoose, MongoDB, Axios, reactstrap,
              reactrouter, react-hooks, express, ES6+, JWT, ContextAPI
              <br></br>Context API and useReducer were used for state mangement
              <br></br>
            </p>{" "}
            <h4>
              <div>
                {" "}
                Anthony Jimenez and Stacey Carrillo <hr></hr>
                Repo Link
                <hr className="my-2" />
                Github Links
              </div>
            </h4>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
};
