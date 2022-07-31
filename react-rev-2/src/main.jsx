import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as ReactProvider } from "react-redux";
import store from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactProvider store={store}>
      <App />
    </ReactProvider>
  </React.StrictMode>
);
