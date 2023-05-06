import React from "react";
import "../styles/Cart.css";
// import minus from "../assets/icons/minus.svg";
// import plus from "../assets/icons/plus.svg";

// Cart Item
export default function Cart(props) {
    // const [itemQuantity, setItemQuantity] = React.useState(props.quantity);
    // console.log(`state of ${props.name}: ${itemQuantity}`);

    // const [cartItemState, setCartItemState] = React.useState({
    //     id: props.id,
    //     name: props.name,
    //     price: props.price,
    //     image: props.imageSource,
    //     qty: props.quantity,
    //     total: props.total,
    // });

    // function decrementQuantity() { // REFINING PROJECT NEXT STEP: adjust individual quantities in cart
    //     setItemQuantity((prevQuantity) => prevQuantity - 1);
    // }

    // function incrementQuantity() {
    //     setItemQuantity((prevQuantity) => prevQuantity + 1);
    // }

    // React.useEffect(() => {
    //     //
    //     setCartItemState((prevState) => {
    //         return {
    //             ...prevState,
    //             qty: itemQuantity,
    //             total: (
    //                 Math.round(Number(prevState.price) * itemQuantity * 100) /
    //                 100
    //             ).toFixed(2),
    //         };
    //     });
    // }, [itemQuantity]);

    return (
        <div className="cart-card item">
            {
                <img
                    className="cart-image"
                    src={props.imageSource}
                    alt={props.name}
                />
            }
            {<p>{props.name}</p>}
            {<p>{props.price}</p>}
            {
                // <div className="quantity"> // REFINING PROJECT NEXT STEP: +/- buttons
                //     <button
                //         onClick={() => {
                //             decrementQuantity();
                //             props.alterCartItemQuantity(cartItemState);
                //         }}
                //         // disabled={quantity === 1 ? true : false}
                //     >
                //         <img
                //             className="quantity-button"
                //             src={minus}
                //             alt="subtract item"
                //         />
                //     </button>
                <p>{props.quantity}</p>
                //     <button // REFINING PROJECT NEXT STEP
                //         onClick={() => {
                //             incrementQuantity();
                //             props.alterCartItemQuantity(cartItemState);
                //         }}
                //     >
                //         <img
                //             className="quantity-button"
                //             src={plus}
                //             alt="add item"
                //         />
                //     </button>
                // </div>
            }
            {<p>{props.total}</p>}
        </div>
    );
}
