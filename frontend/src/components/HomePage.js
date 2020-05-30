import React, { useState } from "react";
import { Jumbotron, Container, Badge, Button, Spinner } from "reactstrap";
import { RegisterModal } from "./Modals/RegisterModal";
import { Login } from "./Modals/Login";
import { CalcBMR } from "./Modals/CalcBMR";
export const HomePage = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <>
      <Jumbotron fluid center>
        <Container fluid>
          <h1 color="primary" className="display-2">
            {" "}
            euphoric, caloric <Badge color="secondary">v.1.0</Badge>
          </h1>
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
            <Button size="large" color="secondary">
              <Badge color="secondary" pill>
                <Login />{" "}
              </Badge>
            </Button>
          </p>
          <hr className="my-2" />
        </Container>
        <div></div>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container className="lead">
          <h1 className="display-3">Thing to know</h1>
          <p className="lead">
            This site is ready for use. However, we will be continuing to update
            and add new features. If you would like to leave feedback please
            email me at anthonyjim96@gmail.com
          </p>
          <hr className="my-2" />
        </Container>
      </Jumbotron>
    </>
  );
};
