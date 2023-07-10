import React, { StrictMode } from "react";
import { ReactDOM } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Inventory from "./Inventory.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Terms from "./Terms.js";
import Support from "./Support.js";
import 'semantic-ui-css/semantic.min.css'
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="inventory" element={<Inventory/>} />
      <Route path="support" element={<Support/>} />
      <Route path="about" element={<About/>} />
      <Route path="/about/privacypolicy" element={<Privacy/>} />
      <Route path="/about/termsandconditions" element={<Terms/>} />
    </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>
);