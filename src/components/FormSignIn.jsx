import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import React from 'react';

function FormSignIn() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3 ml-0 flex-column" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="text-light">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 flex-column" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="text-light">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 flex-column" controlId="formPlaintextPassword">
        <Form.Label column className="text-light">
          Confirm Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check type={type} id={`default-${type}`} label={`default ${type}`} />
        </div>
      ))}
    </Form>
  );
}

export default FormSignIn;
