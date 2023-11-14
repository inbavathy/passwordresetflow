import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Redirect } from "react-router-dom";
import sendDetails from "../utils/SendDetails";
import HandleResponse from "../utils/HandleResponse";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleLogin = async (url, userDetail) => {
    const response = await sendDetails(url, userDetail);
    console.log("Status: ", response);
    HandleResponse(response);
    if (response === 200) setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const content = { username: username, password: password };
    //  For Ok:
    // const url = "https://run.mocky.io/v3/7f0b055a-b739-4cd4-b64d-346639089560";
    // For Wrong Password
    const url = "https://run.mocky.io/v3/6757dd18-64bc-4e08-9b1e-915ec06aa37c";
    // const data = await sendDetails(url, content);
    handleLogin(url, content);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to="/forgot-password">Forgot password?</Link>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
