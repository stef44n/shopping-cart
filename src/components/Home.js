import pic from "../assets/pineapple.webp";
import pic2 from "../assets/banana.jpg";
import pic3 from "../assets/blueberry.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-squares">
            <h1>
                [Fruits] <br /> ...on demand
            </h1>
            <img src={pic} alt="card"></img>
            <img src={pic2} alt="card"></img>
            <img src={pic3} alt="card"></img>
            <div className="centre-div">
                <h2>Your 5-a-day starts here!</h2>
                <Link to="/shop">
                    <button>Shop now!</button>
                </Link>
            </div>
            <img src={pic} alt="card"></img>
            <img src={pic2} alt="card"></img>
            <img src={pic3} alt="card"></img>
            <h2>'Where math jokes become reality'</h2>
        </div>
    );
}
