import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Homepage/Home";
import Login from "./Loginpage/Login";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
