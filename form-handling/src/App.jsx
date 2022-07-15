import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import GetUsers from "./Components/GetUsers";

function App() {
  return (
    <div className="App">
      <Form />
      <GetUsers />
    </div>
  );
}

export default App;
