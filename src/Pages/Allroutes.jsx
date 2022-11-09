import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Homepage/Home";
import Login from "./Loginpage/Login";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
