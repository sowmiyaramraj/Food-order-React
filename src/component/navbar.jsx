import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,SignOut } from "phosphor-react";
import "./component.css";
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="link">
            <Link to="/home">Shop</Link>
            <Link to="/cart"><ShoppingCart/></Link>
            <Link to="/"><SignOut/></Link> 
            </div>           
        </div>
    );
}