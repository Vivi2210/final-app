import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import Form from "./form";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<Form />} />
      <Route path="/form/:id" element={<Form />} />
    </Routes>
  </BrowserRouter>
);