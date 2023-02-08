import { ToastContainer } from "react-toastify";

import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position="top-center" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
