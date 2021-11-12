import React, { useContext } from "react";
import "./CartItem.css";
import { GlobalContext } from "../context/GlobalContext";

function CartItem({ product }) {
  const { cart, setCart } = useContext(GlobalContext);

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

  const deleteItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  return (
    <div className="cart-item">
      <div className="image">
        <img src={product.imgSrc} alt="" />
      </div>
      <div className="title-price">
        <p className="text">{product.name}</p>
        <p className="price">${product.price}</p>
        <div className="quantity">
          <button
            className="minus"
            onClick={() => updateQuantity("minus", product.id)}
          >
            -
          </button>
          <input className="" type="number" value={product.quantity} />
          <button
            className="plus"
            onClick={() => updateQuantity("plus", product.id)}
          >
            +
          </button>
        </div>
        <button className="removeItem" onClick={() => deleteItem(product.id)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;
