import { ToastContainer } from "react-toastify";

import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="bottom-right" autoClose={1000} theme="light" />
    </>
  );
}

export default App;
