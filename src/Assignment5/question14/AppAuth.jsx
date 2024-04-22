import React from "react";
import Profile from "./Profile";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AppAuth = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppAuth;
