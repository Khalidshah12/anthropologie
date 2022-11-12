import { Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBeer } from "react-icons/fa";
import Navbar2 from "./Navbar2";
const Navbar = () => {
  return (
    <header>
      <div className="NavbarFirst">
        <div className="globeSearch">
          <Link to="/">
            <img
              className="userLogo"
              src="https://previews.123rf.com/images/magurok/magurok1309/magurok130900108/22359466-vector-globe-search-icon.jpg"
              alt="Serach Logo"
            />
          </Link>

          <li className="dropdown">
            <a>English($)</a>
            <ul className="child-dropdown2">
              <div className="lidiv">
                <li>Currency</li>
                <li>USD</li>
                <li>Language</li>
                <li>English</li>
              </div>
            </ul>
          </li>
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

      <div className="Navbars">
        <div className="Navbar1">
          <div className="MainLogo">
            <Link to="/">
              <img
                className="MainLogo1"
                src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                alt="logomain"
              />
            </Link>
            <img
              className="MainLogo2"
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt="logomain"
            />
          </div>
        </div>
        <div className="SerachNavbar">
          <div
            style={{
              display: "flex",
              // border: "1px solid black",
            }}
          >
            <Input
              htmlSize={20}
              width="auto"
              justifyContent="center"
              alignItems="center"
              placeholder="Search Anthropologie"
            />
            <FaBeer size="2em" />
          </div>
          <Link to="/cart">
            <img
              style={{ width: "50px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8yKOzPgHpmIsQN3vp5u5XrPjigxM0Wk_QLMUnveo&s"
              alt=""
            />
          </Link>
        </div>
      </div>
 
    </header>
  );
};

export default Navbar;
