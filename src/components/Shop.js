import fruitsArray from "../assets/fruits";
import Card from "./Card";
import "../styles/Shop.css";
import React from "react";
import cartIcon from "../assets/icons/cart.svg";

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

    const [data, setData] = React.useState(0);

    function childToParent(childData) {
        setData((prevData) => prevData + childData);
    }

    return (
        <div>
            Shopping page
            <p>products will be here</p>
            <div className="cart-fixed">
                <img className="cart-icon" src={cartIcon} alt="cart-icon" />(
                {data})
            </div>
            <div className="products">{allFruits}</div>
        </div>
    );
}
