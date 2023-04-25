import pineapple from "./pineapple.webp";
import apple from "./apple.jpg";
import cherry from "./cherry.jpg";
import banana from "./banana.jpg";
import blueberry from "./blueberry.jpg";
import raspberry from "./raspberry.jpeg";
import watermelon from "./watermelon.avif";
import grapes from "./grapes.avif";
import orange from "./orange.avif";

const fruits = [
    {
        id: 0,
        name: "Pineapple",
        price: 1.89,
        image: pineapple,
    },
    {
        id: 1,
        name: "Apple",
        price: 0.38,
        image: apple,
    },
    {
        id: 2,
        name: "Cherry",
        price: 2.09,
        image: cherry,
    },
    {
        id: 3,
        name: "Banana",
        price: 0.27,
        image: banana,
    },
    {
        id: 4,
        name: "Blueberry",
        price: 2.59,
        image: blueberry,
    },
    {
        id: 5,
        name: "Raspberry",
        price: 2.49,
        image: raspberry,
    },
    {
        id: 6,
        name: "Watermelon",
        price: 3.55,
        image: watermelon,
    },
    {
        id: 7,
        name: "Grapes",
        price: 2.25,
        image: grapes,
    },
    {
        id: 8,
        name: "Orange",
        price: 0.35,
        image: orange,
    },
];

const fruitsArray = () => {
    return fruits;
};

export default fruitsArray();
