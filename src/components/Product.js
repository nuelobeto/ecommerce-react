import React, { useContext } from "react";
import "./Product.css";
import { GlobalContext } from "../context/GlobalContext";

function Product({ product }) {
  const { products, cart, setCart } = useContext(GlobalContext);

  const addToCart = (id) => {
    if (cart.some((product) => product.id === id)) {
      updateQuantity("plus", id);
    } else {
      const item = products.find((product) => product.id === id);
      const newItem = {
        ...item,
        quantity: 1,
      };
      setCart([newItem, ...cart]);
    }
  };

  const updateQuantity = (action, id) => {
    let update = cart.map((product) => {
      let quantity = product.quantity;
      if (product.id === id) {
        if (action === "minus" && quantity > 1) {
          quantity--;
        } else if (action === "plus" && quantity < product.instock) {
          quantity++;
        }
      }
      return {
        ...product,
        quantity,
      };
    });
    setCart(update);
  };

  return (
    <div className="product">
      <img src={product.imgSrc} alt="" />
      <p className="product-text">{product.name}</p>
      <p className="product-price">${product.price}</p>
      <div className="overlay">
        <div className="opacity"></div>
        <span className="add-to-cart" onClick={() => addToCart(product.id)}>
          add to cart
        </span>
      </div>
    </div>
  );
}

export default Product;
