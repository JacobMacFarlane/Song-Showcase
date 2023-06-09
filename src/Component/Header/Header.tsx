import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/noun-love-songs-4827584.png";
import fav from "../../assets/images/noun-favorite-bookmark-2939804.png";
import "../../assets/fonts/fonts.css";

import "./Header.css";
export const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <h1 className="nav-font">Song Versuz</h1>
        </Link>
        <Link to="/favorites">
          <img className="fav" src={fav} alt="fav" />
        </Link>
      </div>
    </nav>
  );
};
