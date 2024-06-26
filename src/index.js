import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client';
import App from "./App";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);