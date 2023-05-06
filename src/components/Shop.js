import fruitsArray from "../assets/fruits";
import Card from "./Card";
import Cart from "./Cart";
import "../styles/Shop.css";
import React from "react";
import cartIcon from "../assets/icons/cart.svg";
// import { Link } from "react-router-dom";

export default function Shop() {
    // RENDER PRODUCTS ON PAGE
    const allFruits = fruitsArray.map((fruit) => (
        <Card
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price}
            imageSource={fruit.image}
            addToCartButton={addToCartButton}
        />
    ));

    // CART STATE
    const [cartQty, setCartQty] = React.useState(0);
    const [cartTotal, setCartTotal] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);

    // TOGGLE PRODUCTS/CART PAGE
    const [togglePage, setTogglePage] = React.useState(true);

    function addToCartButton(childData) {
        let qty = childData.qty;
        let tot = childData.total;
        setCartQty((prevData) => prevData + qty);
        setCartTotal((prevData) => (Number(prevData) + Number(tot)).toFixed(2));

        console.table(childData);
        console.log(cartItems);

        const existingItem = cartItems.find((item) => item.id === childData.id);
        if (existingItem) {
            const updatedItems = cartItems.map((item) => {
                if (item.id === childData.id) {
                    return {
                        ...item,
                        qty: item.qty + childData.qty,
                        total: (
                            Math.round(
                                (Number(item.total) + Number(childData.total)) *
                                    100
                            ) / 100
                        ).toFixed(2),
                    };
                } else {
                    return item;
                }
            });
            setCartItems(updatedItems);
        } else {
            const newItems = [...cartItems, childData];
            setCartItems(newItems);
        }

        // console.log(existingItems);
    }

    function toggleShop() {
        setTogglePage(true);
    }

    function toggleCart() {
        setTogglePage(false);
    }

    // function alterCartItemQuantity(cartItem) { // REFINING PROJECT NEXT STEP
    //     //
    //     console.log(cartItem);
    //     let qty = cartItem.qty;
    //     let tot = cartItem.total;
    //     setCartQty((prevData) => prevData + (qty - prevData));
    //     setCartTotal((prevData) =>
    //         (Number(prevData) + Number(tot - prevData)).toFixed(2)
    //     );

    //     const updatedItems = cartItems.map((item) => {
    //         if (item.id === cartItem.id) {
    //             return {
    //                 ...item,
    //                 qty: item.qty + (cartItem.qty - item.qty),
    //                 total: (
    //                     Math.round(
    //                         (Number(item.total) +
    //                             Number(cartItem.total - item.total)) *
    //                             100
    //                     ) / 100
    //                 ).toFixed(2),
    //             };
    //         } else {
    //             return item;
    //         }
    //     });
    //     setCartItems(updatedItems);
    // }

    // RENDER ITEMS IN CART
    const allCartItems = cartItems.map((item) => (
        <Cart
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageSource={item.image}
            quantity={item.qty}
            total={item.total}
            // alterCartItemQuantity={alterCartItemQuantity} // REFINING PROJECT NEXT STEP
        />
    ));

    return (
        <div>
            <div className="cart-fixed">
                <div className="cart-small">
                    <img className="cart-icon" src={cartIcon} alt="cart-icon" />
                    {/* <p> */}({cartQty}){/* </p> */}
                </div>
                <button onClick={() => toggleCart()}>Go to cart</button>
            </div>
            {/* {!togglePage && (
                <button onClick={() => toggleShop()}>Back to products</button>
            )} */}
            {togglePage && <div className="products">{allFruits}</div>}
            {!togglePage && cartQty === 0 && (
                <div className="cart cart-empty">
                    <h1>The cart is empty...</h1>
                    <p>{cartQty}</p>
                    <img src={cartIcon} alt="cart-icon" />
                    <button onClick={() => toggleShop()}>
                        Back to products
                    </button>
                </div>
            )}
            {!togglePage && cartQty !== 0 && (
                <div className="cart">
                    {/* The cart is NOT empty... items in cart: {cartQty} */}
                    <div className="trolley">
                        <p>{cartQty}</p>
                        <img src={cartIcon} alt="cart-icon" />
                    </div>
                    <div className="cart-card">
                        <h2> </h2>
                        <h2>Item</h2>
                        <h2>Price ($)</h2>
                        <h2>Quantity</h2>
                        <h2>Total ($)</h2>
                    </div>
                    {allCartItems}
                    <div className="cart-card">
                        <h2> </h2>
                        <h2> </h2>
                        <h2> </h2>
                        <h2>TOTAL:</h2>
                        <h2>${cartTotal}</h2>
                    </div>
                    <div className="buttons">
                        <button onClick={() => toggleShop()}>
                            Back to products
                        </button>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}
