import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom"
function Navbar({cart,show,setshow}) {
  return (
    <nav className="navbar">
      <div className="logoBox">
        <img
          src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg"
          alt="logo"
        />
        <h2>ShopEase</h2>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className="navLinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button style={{ background: "#ff4f93",
  color: "white",
  padding: "11px 18px",
  borderRadius: "25px",
  cursor: "pointer",
  margin:"0",
  fontWeight: "bold"}} onClick={()=>{setshow(!show)}}>Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;