import React from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const register = () => {
  return (
    <div className="register">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">React</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default register;
