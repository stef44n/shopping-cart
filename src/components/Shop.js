import fruitsArray from "../assets/fruits";
import Card from "./Card";
import Cart from "./Cart";
import "../styles/Shop.css";
import React from "react";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";

export default function Shop() {
    const allFruits = fruitsArray.map((fruit) => (
        <Card
            key={fruit.id}
            name={fruit.name}
            price={fruit.price}
            imageSource={fruit.image}
            childToParent={childToParent}
        />
    ));

    const [cartQty, setCartQty] = React.useState(0);
    const [cartItems, setCartItems] = React.useState("empty");

    function childToParent(childData) {
        let qty = childData.qty;
        setCartQty((prevData) => prevData + qty);
        console.table(childData);
        console.log(cartItems);
        if (cartItems === "empty") {
            console.log("empty array");
            return setCartItems([childData]);
        } else {
            setCartItems((prevData) => {
                return [...prevData, childData];
            });
        }
        console.log(cartItems);
    }

    return (
        <div>
            Shopping page
            <p>products will be here</p>
            <Link to="/cart">
                <div className="cart-fixed">
                    <img className="cart-icon" src={cartIcon} alt="cart-icon" />
                    ({cartQty})
                </div>
            </Link>
            <div className="products">{allFruits}</div>
            <Cart />
        </div>
    );
}
