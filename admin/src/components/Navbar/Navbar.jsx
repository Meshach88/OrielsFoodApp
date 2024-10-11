import React from "react";
import "./Navbar.css";
import { assets } from "../../assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={assets.logo} alt="Oriels logo" />
        <h4>Admin Panel</h4>
      </div>
      <img
        className="profile"
        src={assets.profile_image2}
        alt="profile picture"
      />
    </div>
  );
};

export default Navbar;
