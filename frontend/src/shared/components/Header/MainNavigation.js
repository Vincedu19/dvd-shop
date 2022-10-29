import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./MainNavigation.css"

const MainNavigation = () => {
  return (
    <Header>
      <div className="container-brand">
        <Link to="/">
          <img
            src="https://m.media-amazon.com/images/G/08/gc/designs/livepreview/amazon_squidink_noto_email_v2016_fr-main._CB463436975_.png"
            alt=""
          />
        </Link>
      </div>
      <nav className="main-navigation">
        <NavLinks />
      </nav>
    </Header>
  );
};

export default MainNavigation;
