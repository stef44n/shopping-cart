import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <header>
            <Link to="/">
                <h1>Shopping Cart</h1>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
}
