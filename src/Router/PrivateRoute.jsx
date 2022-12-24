import React from "react";
import { getItem } from "../localstorage/LocalStorage";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = getItem("token");
  const googleToken = getItem("googleToken");

  if (token === "" || googleToken === null) {
    alert("Please Sign In");
    return navigate("/")
  }else{
      
      return children;
  }

}

export default PrivateRoute;
