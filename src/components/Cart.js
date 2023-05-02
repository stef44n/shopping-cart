import React from "react";
// import pic from "../assets/pineapple.webp";
// import "../styles/Home.css";
// import Shop from "./Shop";
import "../styles/Cart.css";

// Cart Item
export default function Cart(props) {
    // const [cart, setCart] = React.useState([]);
    // const [cartData, setCartData] = React.useState([]);

    // const itemsInCart = ""; //map

    const [cartItemState, setCartItemState] = React.useState({
        name: props.name,
        price: props.price,
        image: props.imageSource,
        qty: props.quantity,
        total: props.total,
    });

    // const cartFunction = props.shopToCart;

    return (
        <div className="cart-card">
            {
                <img
                    className="cart-image"
                    src={props.imageSource}
                    alt={props.name}
                />
            }
            {<p>{props.name}</p>}
            {<p>{props.price}</p>}
            {<p>{props.quantity}</p>}
            {<p>{props.total}</p>}
            {/* {cartFunction} */}
        </div>
    );
}
