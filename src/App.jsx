import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormSignIn from './components/FormSignIn';

function App() {
  return (
    <Container fluid className={'bg-dark vh-100 vw-100'}>
      <Row>
        <Col lg={4} className="display">
          1 of 3
        </Col>
        <Col lg={4}>
          <h1 className="text-light">Sign Up</h1>
          <p className="text-secondary">Use your openID to sign up</p>
          <FormSignIn />
        </Col>
        <Col lg={4}>
          <p>
            already have account <a>Login</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
