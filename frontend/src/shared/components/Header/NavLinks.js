import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/login">Identifiez-vous</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          <div className="container-cart-icon">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            Panier
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
