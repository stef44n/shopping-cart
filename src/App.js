import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
