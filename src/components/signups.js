import React, { useRef, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
export default function Signups() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
const { signUp } = useAuth();
const [error, setError] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  signUp(emailRef.current.value, passwordRef.current.value);
  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError("Passwords don't match");
  }
}
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="passwordConfirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className=""></Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p>Alerady have an account? Log in</p>
      </div>
    </>
  );
}
