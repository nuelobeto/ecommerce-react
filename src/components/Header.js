import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { GlobalContext } from "../context/GlobalState";

function Header() {
  const { cart } = useContext(GlobalContext);
  const [search, setSearch] = useState("");

  const totalItems = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  const handleSearch = () => {};

  return (
    <header>
      <div className="icons-container">
        <div className="icons">
          <MenuIcon className="icon" />
          <Link to="/">
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
        <input
          type="text"
          placeholder="search items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="searchBtn">
          <SearchIcon className="icon" onClick={handleSearch} />
        </button>
      </div>
    </header>
  );
}

export default Header;
