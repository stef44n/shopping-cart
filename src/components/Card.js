import React from "react";
// import Cart from "./Cart";
import "../styles/Card.css";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

export default function Card(props) {
    //set card state here
    const [quantity, setQuantity] = React.useState(1);

    const [cardState, setCardState] = React.useState({
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.imageSource,
        qty: quantity,
        total: 0,
    });

    function decrementQuantity() {
        setQuantity((prevQuantity) => prevQuantity - 1);
    }

    function incrementQuantity() {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    // function addToCart() {
    //     const productName = props.name;
    //     const productPrice = props.price;
    //     let productQty = quantity;
    //     let productTotal = quantity * productPrice; // round to 2 dp
    //     // console.log(event.currentTarget);
    //     // console.log(props.id);
    //     let itemInfo = {
    //         name: productName,
    //         price: productPrice,
    //         qty: productQty,
    //         total: productTotal,
    //     };

    //     console.log(itemInfo);
    //     console.log(cardState);

    //     return itemInfo;
    // }

    React.useEffect(() => {
        setCardState((prevState) => {
            return {
                ...prevState,
                qty: quantity,
                total: Number(
                    (
                        Math.round(prevState.price * quantity * 100) / 100
                    ).toFixed(2)
                ),
            };
        });
    }, [quantity]);

    return (
        <div
            className="card"
            // className={`card ${clickedState}`}
            // value={`${clickedState}`}
            // onClick={props.handleClick}
            id={props.name}
        >
            <h2>{props.name}</h2>
            <img
                className="card-image"
                src={props.imageSource}
                alt="card"
                // data-value={`${clickedState}`}
            />
            <p className="price">${props.price}</p>
            <div className="quantity">
                <button
                    onClick={decrementQuantity}
                    disabled={quantity === 0 ? true : false}
                >
                    <img
                        className="quantity-button"
                        src={minus}
                        alt="subtract item"
                    />
                </button>

                <p id={`currentQuantity-${props.name}`}>{quantity}</p>
                <button onClick={incrementQuantity}>
                    <img
                        className="quantity-button"
                        src={plus}
                        alt="add item"
                    />
                </button>
            </div>
            {/* {<button onClick={addToCart}>Add to cart (card)</button>} */}
            {
                <button
                    onClick={() => props.childToParent(cardState)}
                    disabled={quantity === 0 ? true : false}
                >
                    Add to cart (shop func)
                </button>
            }
        </div>
    );
}
