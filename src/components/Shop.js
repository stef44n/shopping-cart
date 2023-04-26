import fruitsArray from "../assets/fruits";
import Card from "./Card";

export default function Shop() {
    const allFruits = fruitsArray.map((fruit) => (
        <Card
            key={fruit.id}
            name={fruit.name}
            price={fruit.price}
            imageSource={fruit.image}
        />
    ));

    return (
        <div>
            Shopping page
            <p>products will be here</p>
            {allFruits}
        </div>
    );
}
