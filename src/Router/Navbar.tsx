import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1 className="title">SHOPPING APP</h1>
      <div className="nav-bar">
        <ul>
          <Link to="/abc">
            <li>Fashion</li>
          </Link>
          <Link to="/xyz">
            <li>Beauty</li>
          </Link>
          <Link to="/pqr">
            <li>Sports</li>
          </Link>
          <Link to="/mno">
            <li>Electronics</li>
          </Link>
          <Link to="/ijk">
            <li>Furniture</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
