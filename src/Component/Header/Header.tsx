import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
   return (
     <nav className="nav-bar">
       <div className="nav-container">
         <Link to="/">Home</Link>
         <Link to="/favorites">Favorited</Link>
       </div>
     </nav>
   );
 };
