import React from "react";
// import "../styles/Card.css";

export default function Card(props) {
    //set card state here
    // const [clickedState, setClickedState] = React.useState(false);

    // let resetAll = setClickedState(props.reSet);
    // let resetAll = props.reSet ? setClickedState(true) : false;
    // console.log(`%c PROPS.RESET: ${resetAll}`, "background: lightgrey");

    // function handleCardClick() {
    //
    // }

    return (
        <div
            // className="card"
            // className={`card ${clickedState}`}
            // value={`${clickedState}`}
            onClick={props.handleClick}
        >
            <img
                className="card-image"
                src={props.imageSource}
                alt="card"
                // data-value={`${clickedState}`}
                // onClick={() => handleCardClick(props.reSet)}
                // onClick={() => handleCardClick(false)}
            />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    );
}
