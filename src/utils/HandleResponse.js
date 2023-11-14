import showToastMessage from "./ToastMessage";

export default function HandleResponse(status, route = "/") {
  if (status === 200) {
    showToastMessage("Success", "success");
  } else if (status === 401) {
    showToastMessage("Wrong username or password", "error");
  }
}
