import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
