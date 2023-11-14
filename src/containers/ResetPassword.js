import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles.css";

export default function App() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valid, setValidity] = useState(true);
  const [compare, setCompare] = useState(true);

  useEffect(() => {
    const regExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (newPassword) {
      setCompare(true);
      if (newPassword.match(regExp)) {
        setValidity(true);
      } else {
        setValidity(false);
      }
    }
  }, [newPassword]);

  function comparePassword() {
    if (newPassword !== confirmPassword) {
      setCompare(false);
    } else {
      setCompare(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    comparePassword();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="password_old">
          <Form.Label>Old Password: </Form.Label>
          <Form.Control
            type="password"
            value={oldPassword}
            required={true}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password_new">
          <Form.Label>New Password: </Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            required={true}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          {/* TODO: Show card with rules */}
          {!valid ? (
            <Form.Text className="text-muted" style={{ color: "red" }}>
              Password should be minimum 8 characters in length and a mix of
              uppercase, lowercase, digits and special characters.
            </Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group size="lg" controlId="password_confirm">
          <Form.Label>Confirm Password: </Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            required={true}
            onFocus={() => setCompare(true)}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        {!compare ? (
          <Form.Text className="text-muted">Passwords do not match</Form.Text>
        ) : null}
        <Button block size="lg" type="submit" disabled={!valid && !compare}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
