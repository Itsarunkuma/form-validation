import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Form />
    </div>
  );
}

export default App;
