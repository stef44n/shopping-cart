import React from "react";
import "../styles/Card.css";

export default function Card(props) {
    //set card state here
    const [quantity, setQuantity] = React.useState(1);

    // let resetAll = setClickedState(props.reSet);
    // let resetAll = props.reSet ? setClickedState(true) : false;
    // console.log(`%c PROPS.RESET: ${resetAll}`, "background: lightgrey");

    function decrementQuantity() {
        setQuantity((prevQuantity) => prevQuantity - 1);
    }

    function incrementQuantity() {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    return (
        <div
            className="card"
            // className={`card ${clickedState}`}
            // value={`${clickedState}`}
            onClick={props.handleClick}
        >
            <h2>{props.name}</h2>
            <img
                className="card-image"
                src={props.imageSource}
                alt="card"
                // data-value={`${clickedState}`}
            />
            <p>${props.price}</p>
            <div className="quantity">
                <button
                    onClick={decrementQuantity}
                    disabled={quantity === 0 ? true : false}
                >
                    -
                </button>

                <p>{quantity}</p>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <button>Add to cart</button>
        </div>
    );
}
