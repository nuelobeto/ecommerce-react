import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
