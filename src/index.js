import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/Navbar.css";
import "./styles/SCO.css";
import "./styles/Prodplan.css";
import "./styles/TeamSection.scss";
import "./styles/Resallo.css";
import App from "./App";
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
