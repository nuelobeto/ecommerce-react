import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { GlobalContext } from "../context/GlobalContext";

function Header() {
  const { cart } = useContext(GlobalContext);

  const totalItems = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });

    return total;
  };

  return (
    <header>
      <div className="icons-container">
        <div className="icons">
          <MenuIcon className="icon" />
          <Link to="/products">
            <h3 className="logo">Nuel's</h3>
          </Link>
        </div>
        <div className="icons">
          <PersonIcon className="icon" />
          <Link to="/cart">
            <ShoppingCartIcon className="icon" />
            <span className="total-items">{totalItems()}</span>
          </Link>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="search items" />
        <button id="searchBtn">
          <SearchIcon className="icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
