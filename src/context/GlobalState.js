import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  products: [],
  cart: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  // Call useReducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Fetch state
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCart();
  }, []);

  // Actions
  async function getProducts() {
    try {
      const res = await axios.get("http://localhost:5000/products");

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getCart() {
    try {
      const res = await axios.get("http://localhost:5000/cart");

      dispatch({
        type: "GET_CART",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function addToCart(product) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/cart",
        product,
        config
      );
      dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function removeFromCart(id) {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateQuantity(update, index, id) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        `http://localhost:5000/cart/${id}`,
        {
          id: update[index].id,
          name: update[index].name,
          price: update[index].price,
          imgSrc: update[index].imgSrc,
          instock: update[index].instock,
          quantity: update[index].quantity,
        },
        config
      );
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: update,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        getCart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
