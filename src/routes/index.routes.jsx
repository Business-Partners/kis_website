import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../pages/createInstitution";
import Home from "../pages/home";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getStarted/*" element={<Welcome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
