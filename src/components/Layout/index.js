import React from "react";
import Navbar from "../Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
