import React from 'react';
import {Container,Row,Col,CardGroup,Card, InputGroup,FormControl,Button} from "react-bootstrap"
import {HiOutlineUser} from "react-icons/hi"
import {GoLock} from "react-icons/go"


export default function Login() {

  return (
    <div className="login" id="full-height">
      <Container>
        <Row className="justify-content-center">
          <Col md="1" className="p-2 cikolata-kenar"></Col>
          <Col md="10" className="p-0">
            <CardGroup>
              <Card className="p-4 login-left">
                <Card.Body>
                  <h1 className="text-white" >Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="login-input"><div><HiOutlineUser/></div></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Username"
                      type="text"
                      className="login-input"
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="login-input"><div><GoLock/></div></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Password"
                      type="password"
                      className="login-input"
                    />
                  </InputGroup>
                  <Row>
                    <Col>
                      <Button className="px-4">Login</Button>
                    </Col>
                    <Col className="text-right">
                      <button class="btn btn-link px-0" type="button">Forgot password?</button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="text-white py-5 login-right" id="log-reg" style={{width:"44%"}}>
                <Card.Body className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button variant="outline-light" size="lg"className="mt-3">Register</Button>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}