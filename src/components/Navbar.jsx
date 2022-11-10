import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="NavbarFirst">
      <div className="globeSearch">
        <Link to="/">
          <img
            className="userLogo"
            src="https://previews.123rf.com/images/magurok/magurok1309/magurok130900108/22359466-vector-globe-search-icon.jpg"
            alt="Serach Logo"
          />
        </Link>
        <p>English ($)</p>
      </div>

      <img
        className="userLogo"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        alt="User Logo"
      />
      <Link to="/login">
        <div>Sign In / Sign In</div>
      </Link>
    </div>
  );
};

export default Navbar;
