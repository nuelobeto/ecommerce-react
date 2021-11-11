import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { GlobalContext } from "../context/GlobalContext";

function Cart() {
  const { cart } = useContext(GlobalContext);

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total.toFixed(2);
  };

  return (
    <div class="cart" id="cart">
      <h3 class="total">Total: {totalPrice()}</h3>
      <div class="cart-items">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div class="check-out">
        <h3>Proceed to checkout</h3>
      </div>
    </div>
  );
}

export default Cart;
