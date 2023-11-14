import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import PopupMsg from "./Popup.js";
import { LinkContainer } from "react-router-bootstrap";
// import "./styles.css";

export default function Home() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Delpheon
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            {/* <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/reset-password">
              <Nav.Link>Change Password</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Routes /> */}
    </div>
  );
}
