import React from "react";
import "./App.scss";
import Routers from "./router";
import ToastContainer from "./components/common/ToastContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
