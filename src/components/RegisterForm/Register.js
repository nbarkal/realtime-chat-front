import React from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const register = () => {
  return (
    <div className="register">
      <Container>
        <Row className="row">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Username&nbsp;:&nbsp;</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="row">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>

        <Row className="row">
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Password&nbsp;:&nbsp;</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default register;
