import Alert from "react-bootstrap/Alert";

export default function ShowAlertMessage(message) {
  return <Alert variant="danger">{message}</Alert>;
}
