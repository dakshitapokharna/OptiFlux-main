import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Navbar.css";
import "./SCO.css";
import"./Prodplan.css"
import "./Resallo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Footer /> */}
  </React.StrictMode>
);
