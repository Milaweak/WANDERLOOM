import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inscription">Inscription</Link>
        </li>
        <li>
          <Link to="/favoris">Favoris</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/MapPage">MapPage</Link>
        </li>
        <li>
          <Link to="/ItinaryForm">ItinaryForm</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
