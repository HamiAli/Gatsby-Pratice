import React from "react";
import { Link } from "gatsby";
import "./nav.css"
export default function Navbar() {
  return (
    <div className=" narbar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/Product">Product</Link>
    </div>
  );
}

