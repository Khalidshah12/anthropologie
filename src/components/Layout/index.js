import React from "react";
import Footer from "../Footer/Footer";


const Layout = (props) => {
  return (
    <div>
      
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
