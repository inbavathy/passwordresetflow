import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function showToastMessage(message, status) {
  if (status === "success") {
    toast.success(message, { autoClose: 3000 });
  } else if (status === "error") {
    toast.error(message, { autoClose: 3000 });
  } else {
    toast(message);
  }
}
