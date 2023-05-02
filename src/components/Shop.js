import fruitsArray from "../assets/fruits";
import Card from "./Card";
import Cart from "./Cart";
import "../styles/Shop.css";
import React from "react";
import cartIcon from "../assets/icons/cart.svg";
// import { Link } from "react-router-dom";

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
    const [cartItems, setCartItems] = React.useState(["empty"]);

    const [togglePage, setTogglePage] = React.useState(true);

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

    function shopCartToggle() {
        setTogglePage((prevData) => !prevData);
    }

    const allCartItems = cartItems.map((item) => (
        <Cart
            key={item.id}
            name={item.name}
            price={item.price}
            imageSource={item.image}
            quantity={item.qty}
            total={item.total}
        />
    ));

    return (
        <div>
            Shopping page
            <p>products will be here</p>
            {/* <Link to="/cart"> */}
            <div className="cart-fixed">
                <img className="cart-icon" src={cartIcon} alt="cart-icon" />(
                {cartQty})
            </div>
            {/* </Link> */}
            <button onClick={() => shopCartToggle()}>
                Show cart / hide shop
            </button>
            {togglePage && <div className="products">{allFruits}</div>}
            {!togglePage && cartQty === 0 && (
                <div className="cart">The cart is empty...</div>
            )}
            {!togglePage && cartQty !== 0 && (
                <div className="cart">
                    The cart is NOT empty... items in cart: {cartQty}
                    <div className="cart-card">
                        <h2> </h2>
                        <h2>Item</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Total</h2>
                    </div>
                    {allCartItems}
                </div>
            )}
        </div>
    );
}
